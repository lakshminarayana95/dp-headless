
import React, {useState, useEffect} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
require('./imageCard.css')

 const ImageCardEditConfig = {
 
    emptyLabel: 'ImageCard',
 
    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};
 
const ImageCard = () => {
    const [imageCardItems, setImageCardItems] = useState([]);

    useEffect(() => {
        fetchImageCardData();
      }, []);
    
      const fetchImageCardData = async () => {
        try {
        //  const response = await fetch('http://localhost:4502/content/dp-headless/us/en/home/jcr:content/root/responsivegrid/imagecard.model.json');
        const response = await fetch('/data/imagecard.json')  
        const data = await response.json();
          if (data) {
            setImageCardItems(data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
        return (
            <div className="container-fluid">
                <div className='container'>
                    <section className='imagecard'>
                        <div class="card-container">                            
                            {imageCardItems?.images?.map((item, index)=>(
                                <div class="card" key={index}>
                                    <img src={item?.imagepath} alt={`Card ${index}`} key={index}/>
                                    {/* <p>{item?.imagealt}</p> */}
                                </div>
                                )
                            )}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
 
 
// Mapping ImageCard component to AEM component with ImageCardEditConfig
export default MapTo('dp-headless/components/imagecard')(ImageCard, ImageCardEditConfig);
 