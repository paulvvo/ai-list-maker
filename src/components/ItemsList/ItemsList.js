import React,{Component} from "react";
//import Item from "../Item/Item.js";
import "./ItemsList.css"
class ItemsList extends Component{

  render(){
    //console.log(this.props.detectedItems);
    //console.log(this.props.key); key isn't a prop


    if(this.props.detectedItems.length > 0){

      return(
        <div className="itemsListContainer">
          {

            this.props.detectedItems.map((item, i) =>{
              return <li><span onClick={()=>this.props.onDetectedItemsModify(i)}className="deleteIcon">X</span>{item.name}{i}</li>
            })
          }

          <input
          id="newItemInput"
          name="newListItem"
          type="text"
          placeholder="Did I Miss An Item?"
          value={this.props.itemInput}
          onChange={this.props.onItemInputChange}
          onKeyPress={this.props.onItemInputSubmit} />

        </div>
      )

    }else{return <div></div>}
  }



}
export default ItemsList;


//
// onDeleteItemClick = (index) =>{
//   console.log(index, "clicked the x");
//   console.log(this.props.detectedItems);
//
//   const li = document.getElementsByTagName("li");
//   li[index].parentNode.removeChild(li[index]);
// }


// this.props.detectedItems.map((item, i) => {
//   return (
//     <li>
//       <span onClick={() =>{
//         this.onDeleteItemClick(i)
//         this.props.onDetectedItemsModify(i)
//       }} className="deleteIcon">X</span>
//       {item.name}
//       {i}
//     </li>
//   )
// })
