import React, { useState, useEffect } from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import './carousel.css';

const CarouselEditConfig = {

    emptyLabel: 'Carousel',
  
    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
  };

const Carousel = (props) => {
    console.log('propsprops', props)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cards, setCards] = useState([]);

    // const cards = [
    //     {
    //         image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1707298920/Croma%20Assets/Entertainment/Television/Images/228393_jgdnwd.png?tr=w-360',
    //         description: 'Description 1'
    //     },
    //     {
    //         image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709122842/Croma%20Assets/Communication/Mobiles/Images/305041_i5rm5i.png?tr=w-360',
    //         description: 'Description 2'
    //     },
    //     {
    //         image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697175643/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/302273_gjmw3u.png?tr=w-360',
    //         description: 'Description 3'
    //     },
    //     {
    //         image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675864156/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/256184_0_smisal.png?tr=w-360',
    //         description: 'Description 4'
    //     },
    //     {
    //         image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703767747/Croma%20Assets/Large%20Appliances/Refrigerator/Images/273622_0_cjppke.png?tr=w-360',
    //         description: 'Description 5'
    //     },
    //     {
    //         image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697621846/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/196953_ez1bkz.png?tr=w-360',
    //         description: 'Description 6'
    //     }
    // ];
    useEffect(() => {
        fetchCarouselData();
      }, []);
    
      const fetchCarouselData = async () => {
        try {
          const response = await fetch('/data/carousel.json');
          const data = await response.json();
          console.log('data carousal', data)
          if (data) {
            // setHeaderItems(data['jcr:content']['root']);
            setCards(data);
    
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    const totalCards = cards[':itemsOrder'] ? cards[':itemsOrder'].length : 0;

    const nextSlide = () => {
        if (currentIndex < totalCards - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="container-fluid carousel-container">
            <button 
            className={`carousel-button prev ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={prevSlide} disabled={currentIndex === 0}>&lt;</button>
            <div className="card-container">
                {/* {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={`Card ${index + 1}`} />
                        <p>{card.description}</p>
                    </div>
                ))} */}
                {cards[':itemsOrder'] &&
                    cards[':itemsOrder'].map(itemId => {
                        const item = cards[':items'][itemId];
                        return (
                        <div key={item.id} className="carousel-item">
                            <a href={item.link}> 
                            {console.log('itemitem', item)}  
                            <span>{item.length}</span>                             
                            <img src={item.src} alt={item.alt} />
                            </a>
                        </div>
                        );
                    })}
                
            </div>
            <button 
            className={`carousel-button next ${currentIndex === totalCards - 1 ? 'disabled' : ''}`}
            onClick={nextSlide} disabled={currentIndex === totalCards - 1}>&gt;</button>
        </div>
    );
};

export default MapTo('dp-headless/components/carousel')(Carousel, CarouselEditConfig);

