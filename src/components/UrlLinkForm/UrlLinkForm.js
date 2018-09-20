import React, {Component} from "react";
import "./UrlLinkForm.css";
class UrlLinkForm extends Component {

  render(){
    return(
      <div>
        <input  type="text" name="url" placeholder="enter in your url" onChange={this.props.onUrlLinkChange}/>
        <button type="submit" onClick={this.props.onUrlSubmit}>Analyze</button>
      </div>
    );
  }
}

export default UrlLinkForm;
