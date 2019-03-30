import React from 'react';
import './CopyText.css';

class CopyText extends React.Component {

  constructor(props) {
    super(props);

  }

  

  render() {
    return (
      <div onClick={()=>{this.props.copyTextMethod(this.props.copy)}}>
      
     
          <textarea id="squareText"
            ref={(textarea) => this.textArea = textarea}
            value={this.props.copy}
          />

          
       
      </div>
    );
  }

}

export default CopyText;
