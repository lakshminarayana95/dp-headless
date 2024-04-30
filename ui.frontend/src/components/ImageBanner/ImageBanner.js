
import React, {useState, useEffect} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
require('./imageBanner.css')

 const ImageBannerEditConfig = {
 
    emptyLabel: 'ImageBanner',
 
    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};
 
const ImageBanner = () => {
    const [imageBannerItems, setImageBannerItems] = useState([]);

    useEffect(() => {
        fetchImageCardData();
      }, []);
    
      const fetchImageCardData = async () => {
        try {
        //  const response = await fetch('http://localhost:4502/content/dp-headless/us/en/home/jcr:content/root/responsivegrid/imagecard.model.json');
        const response = await fetch('/data/imagebanner.json')  
        const data = await response.json();
          if (data) {
            setImageBannerItems(data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
        return (
            <div className="container-fluid">
                <div className='container'>
                    <section className='imagebanner'>
                        <div class="banner-container">                            
                            
                                <div class="banner" >
                                    <h3>{imageBannerItems?.imagecardtext}</h3> 
                                    <img src={imageBannerItems?.imagepath}/>
                                    {/* <p>{item?.imagealt}</p> */}
                                </div>
                                
                            
                        </div>
                    </section>
                </div>
            </div>
        );
    }
 
 
// Mapping ImageCard component to AEM component with ImageCardEditConfig
export default MapTo('dp-headless/components/imagebanner')(ImageBanner, ImageBannerEditConfig);
 