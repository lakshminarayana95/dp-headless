import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import './imageCard.css';

const ImageCardEditConfig = {
  emptyLabel: 'ImageCard',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1;
  }
};

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCardItems: []
    };
  }

  componentDidMount() {
    this.fetchImageCardData();
  }

  fetchImageCardData = async () => {
    try {
      const response = await fetch('/data/imagecard.json');
      const data = await response.json();
      if (data) {
        this.setState({ imageCardItems: data });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    const { imageCardItems } = this.state;

    return (
      <div className="container-fluid">
        <div className="container">
          <section className="imagecard">
            <div className="card-container">
              {imageCardItems?.images?.map((item, index) => (
                <div className="card" key={index}>
                  <img src={item?.imagepath} alt={`Card ${index}`} key={index} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default MapTo('dp-headless/components/imagecard')(ImageCard, ImageCardEditConfig);