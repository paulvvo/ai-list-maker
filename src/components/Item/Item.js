import React,{Component} from "react";
import "./Item.css";
class Item extends Component{
  render(){
    return(
      <div>

          <li className="displayOn">
            <span className="deleteIcon" onClick={()=>this.onItemClick()}>X</span>
            {this.props.name}
            {this.props.index}
          </li>
      </div>
    );
  }

  onItemClick = () =>{
    // console.log("delete clicked");
    const li = document.getElementsByTagName("li");
    //li.parentNode.removeChild(li[this.props.index]); //this doesn't work
    li[this.props.index].classList.add("disappear");
    //console.log(li[this.props.index]);
  }
}
export default Item;
