import React,{Component} from "react";

class Item extends Component{
  render(){
    return(
      <div>
          <li>{this.props.name} {this.props.value*100}%</li>
      </div>
    );
  }
}
export default Item;
