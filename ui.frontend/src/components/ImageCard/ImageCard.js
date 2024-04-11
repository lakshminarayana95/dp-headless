
import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
 
 const ImageCardEditConfig = {
 
    emptyLabel: 'ImageCard',
 
    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};
 
const ImageCard = () => {
        return (
            <div className="container-fluid">
                <div className='container'>
                    <section className='imagecard'>
                        <div class="card-container">
                            <div class="card">
                                <img src='https://lh3.googleusercontent.com/SzQYUObnbDy0Vh_3R9JCJaFqslkNkOC61vJ0sS8rH0SBqcx6z3yHatJF8W6lxe6Xz1bKH0w8D49FlQ18W38FVALAjijIQyXAv92Af_U=w1064-v0' />
                                <p>Description for Image 1</p>
                            </div>
                            <div class="card">
                                <img src='https://lh3.googleusercontent.com/asxSAl0gCWS6GXSfAKOK2mW-8nCNTnU6hROfF2wrotCX8moNMKTb3moUeQI48NIu1tnoDbJqqv_RBDZG6P7IK9XXxRJ4VNv94fVBDB0=w1064-v0' />
                                <p>Description for Image 2</p>
                            </div>
                            <div class="card">
                                <img src='https://lh3.googleusercontent.com/SzQYUObnbDy0Vh_3R9JCJaFqslkNkOC61vJ0sS8rH0SBqcx6z3yHatJF8W6lxe6Xz1bKH0w8D49FlQ18W38FVALAjijIQyXAv92Af_U=w1064-v0' />
                                <p>Description for Image 3</p>
                            </div>
                            <div class="card">
                                <img src='https://lh3.googleusercontent.com/asxSAl0gCWS6GXSfAKOK2mW-8nCNTnU6hROfF2wrotCX8moNMKTb3moUeQI48NIu1tnoDbJqqv_RBDZG6P7IK9XXxRJ4VNv94fVBDB0=w1064-v0' />
                                <p>Description for Image 4</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
 
 
// Mapping ImageCard component to AEM component with ImageCardEditConfig
export default MapTo('dp-headless/components/imagecard')(ImageCard, ImageCardEditConfig);
 