import React,{Component} from "react";
import Item from "../Item/Item.js";
import "./ItemsList.css"
class ItemsList extends Component{

  render(){
    //console.log(this.props.detectedItems);
    console.log(this.props.key);
    if(this.props.detectedItems.length > 0){
      return(
        <div className="itemsListContainer">
          {
            this.props.detectedItems.map((item, i)=>{

              return <Item key={item.id} name={item.name} value={item.value} index={i}/>
            })
          }
        </div>
      )
    }else{
      return(
        <div>
        </div>
      )
    }
  }
}
export default ItemsList;
