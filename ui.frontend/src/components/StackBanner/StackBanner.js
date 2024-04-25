import React, { useState, useEffect } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
require('./StackBanner.css')

const StackBannerEditConfig = {
  emptyLabel: 'StackBanner',
  isEmpty: function(props) {
    return !props || !props.carousalSlides || props.carousalSlides.length === 0;
  }
};

const StackBanner = () => {
  const [carousalSlides, setCarousalSlides] = useState([]);

  useEffect(() => {
    fetchStackBannerData();
  }, []);

  const fetchStackBannerData = async () => {
    try {
      const response = await fetch('/data/stackbanner.json');
      const data = await response.json();
      if (data && data.carousalSlides) {
        setCarousalSlides(data.carousalSlides);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <section className="stack-banner">
          <div className="stack-banner-container">
            {carousalSlides?.map((slide, index) => (
              <div className="stack-banner-slide" key={index}>               
                <a href={slide?.link}><img src={slide?.fileReference} alt={slide?.alt} /></a>
              </div>
            ))}
            
          </div>
        </section>
      </div>
    </div>
  );
};

// Mapping StackBanner component to AEM component with StackBannerEditConfig
export default MapTo('dp-headless/components/stackbanner')(StackBanner, StackBannerEditConfig);
