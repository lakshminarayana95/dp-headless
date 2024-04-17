//Header.js
import React, { useState, useEffect, Component } from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

require('./header.css')

const HeaderEditConfig = {
 
  emptyLabel: 'Header',

  isEmpty: function(props) {
      return !props || !props.src || props.src.trim().length < 1;
  }
};

const Header = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisModalOpen(!isModalOpen);
    setMenuOpen(!menuOpen);

  };

  const [headerItems, setHeaderItems] = useState([]);

  // let menuItemList = []; 
  let menuItemList;
  let nestedMenuItemList;
  useEffect(() => {
    fetchHeaderData();
  }, []);

  const fetchHeaderData = async () => {
    try {
      const response = await fetch('/data/header.json');
      const data = await response.json();
      console.log('data', data)
      if (data) {
        // setHeaderItems(data['jcr:content']['root']);
        setHeaderItems(data);

      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function renderIconMenuItem(menuItem) {
    return (
      <li className="grey">
        <a href={menuItem.headingNavigationUrl} className={menuItem.subtitles ? "submenu": "icon-menu"}>
          <img
            src={menuItem.headingIcon}
            alt=""
            className="dropdown-icon"
          />
          <span>{menuItem.heading}</span>
        </a>
        {menuItem.subtitles && (
          <ul className="nested-menu1">
            {Object.keys(menuItem.subtitles).map((subtitleKey) => {
              const subtitle = menuItem.subtitles[subtitleKey];
              return (
                <li key={subtitleKey}>
                  <a href={subtitle.subheadingNavigationUrl}>{subtitle.subHeading}</a>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  }

  function renderMenuItem(menuItem) {
    return (
      <li>
        <a href={menuItem.headingNavigationUrl} className="submenu2">
          
          <span>{menuItem.heading}</span>
        </a>
        {menuItem.subHeading && (
          <ul className="nested-menu1">
            {Object.keys(menuItem.subHeading).map((subItemKey) => {
              const subItem = menuItem.subHeading[subItemKey];
              return (
                <li key={subItemKey}>
                  <a href={subItem.subheadingNavigationUrl}>{subItem.subHeading}</a>
                  <ul className="nested-menu2"> 
                  {subItem.nestedSubHeadings && renderNestedMenuItem(subItem.nestedSubHeadings)}
                  </ul>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  }

  function renderNestedMenuItem(nestedMenuItem) {
       if(nestedMenuItem && typeof nestedMenuItem === 'object') {
        {Object.keys(nestedMenuItem).map((subItemKey) => {
          const subItem = nestedMenuItem[subItemKey];  
          console.log('subItem', subItem) 
          return(                    
                <li key={subItemKey}>
                  <a href={subItem.nestedSubHeadingNavigationUrl}>{subItem.nestedSubHeading}</a>
                </li>  
          )
       })}  
      }
     
    
  }
  return (
    <div className="container-fluid with-header">
        <div className='container'>
        <header>
            <div className="logo-image">
              <img src={headerItems.brandLogo} alt="Logo" />
            </div>
            <div class="menu-bar" id="openModalBtn">
            <div class="menu-icon">
            {!menuOpen && (
              <><RxHamburgerMenu onClick={toggleMenu}/> Menu</>
            )}
            {menuOpen && (
              <img src={headerItems.closeIcon} alt="Close" class="close" onClick={toggleMenu}/>
              // <IoClose onClick={toggleMenu} />
            )}
              </div>
            </div>
            {true && (
          <div id="modalMenu" class="modalMenu">
          <div class="modal-content">
            <span class="close" id="closeModalBtn">&times;</span>
            <div class="menu-container">
              <ul class="menu">
              {headerItems?.menuIconItems && Object.keys(headerItems.menuIconItems).map((key) => {
                const menuItem = headerItems.menuIconItems[key];
                if(menuItem && typeof menuItem === 'object')
                return renderIconMenuItem(menuItem);
              })}           
        
                <li class="disabled">
                  <a href="#"> Shop by Category </a>
                </li>
                {headerItems?.menuItems && Object.keys(headerItems.menuItems).map((key) => {
                const menuItem = headerItems.menuItems[key];
                if(menuItem && typeof menuItem === 'object')
                return renderMenuItem(menuItem);
                })}
              </ul>
            </div>
          </div>
        </div>
        )} 
            <div class="search">
            <input type="search" placeholder={headerItems.searchPlaceHolder} id="inputField" oninput="handleInput()"/>
            <i class="fa fa-search" id="icon"></i>
            {/* <img src={headerItems.searchIconPath} alt="" class="search" /> */}
            <FaSearch className="searchIcon"/>

          </div>

          <div class="cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            {/* <img src={headerItems.cartIconPath} alt="" class="search" /> */}
            <FaCartShopping />

          </div>
          </header>
        </div>
    </div>
  );
};

// export default Header;
export default MapTo('dp-headless/components/header')(Header, HeaderEditConfig);
