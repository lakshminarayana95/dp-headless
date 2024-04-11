// import { MapTo } from '@adobe/aem-react-editable-components';
// import DOMPurify from 'dompurify';
// import React, { Component } from 'react';
// import extractModelId from '../../utils/extract-model-id';

// // This will help us to include TitleText component specific CSS
// require('./TitleText.css');

// /**
//  * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
//  *
//  * @type EditConfig
//  */
// const TitleTextEditConfig = {

//   emptyLabel: 'Title Text',

//   /**
//    * emptyLabel will be a component placeholder if nothing is 
//    * authored or below values are false.
//    */
//   isEmpty: function(props) {
//     return !props || !props.title || props.title.trim().length < 1;
//   }
// };

// /**
//  * Below is TitleText React component to render title 
//  * and description as part of render() function.
//  */
// class TitleText extends Component {


//   get textContent() {
//     return <div className='title-text'>
//             <h1>{this.props.title}</h1>
//             <p>{this.props.description}</p>
//            </div>;
//   }

//   render() {
//     return this.props.title ? this.textContent : "test";
//   }
// }

// /**
//  * This component is map to wknd-spa-react/components/title-text 
//  * resourceType to load JSON.
//  * It will return TitleText component if it is authored and not empty else 
//  * it will return TitleTextEditConfig default constant.
//  */
// export default MapTo('dp-headless/components/title-text')(
//   TitleText,
//   TitleTextEditConfig
// );