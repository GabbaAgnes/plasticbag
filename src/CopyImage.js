import React from 'react';

class CopyImage extends React.Component {

  constructor(props) {
    super(props);

  }

  

  render() {
    return (
      <div onClick={()=>{this.props.copyImageMethod(this.props.copy)}}>
      
     
          <img id="squareImage"
            ref={(img) => this.img = img}
            value={this.props.copy}
          />

          
       
      </div>
    );
  }

}

export default CopyImage;
