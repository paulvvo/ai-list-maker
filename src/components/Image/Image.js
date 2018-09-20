import React,{Component} from "react";

class Image extends Component{
  render(){
    return(
      <div>
        <img
        src={this.props.imageSrc}
        alt=""/>
      </div>
    );
  }
}


export default Image;
