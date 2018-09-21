import React, {Component} from "react";
import "./UrlLinkForm.css";
class UrlLinkForm extends Component {

  render(){
    return(
      <div>
        <div >
          <input className="urlInput" type="text" name="url" placeholder="Give me an image link human..." onChange={this.props.onUrlLinkChange}/>
        </div>
        <div >
          <button className="urlSubmitButton" type="submit" onClick={this.props.onUrlSubmit}>Analyze</button>
        </div>
      </div>
    );
  }
}

export default UrlLinkForm;
