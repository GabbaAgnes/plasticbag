import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
 
const images = [
  'https://media0.giphy.com/media/Cmr1OMJ2FN0B2/200w.gif',
  'https://i-h1.pinimg.com/564x/d2/38/cb/d238cb4557be4d9f9a89fc0fbee74459.jpg',
  'https://i-h1.pinimg.com/564x/12/3c/89/123c899c49333b96f0b052d3a82ee8b6.jpg',
  'https://media0.giphy.com/media/3o7aCWyaY8icmPnW9O/200w.gif?cid=e1bb72ff5c7194445a2e75756b3c7124',
];
 
export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}