import React from 'react';
import './CopyText.css';

class CopyExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = { copySuccess: '' }
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  render() {
    return (
      <div onClick={()=>{this.props.copyTextMethod(this.props.copy)}}>
        {
         document.queryCommandSupported('copy') &&
          <div className="surroundingCopy">
            <button className="surroundingButton" onClick={this.copyToClipboard}>Copy</button> 
            {this.state.copySuccess}
          </div>
        }
        <form className="surroundingForm" >
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value={this.props.copy}
          />
        </form>
      </div>
    );
  }

}

export default CopyExample;
