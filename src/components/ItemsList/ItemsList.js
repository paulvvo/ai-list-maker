import React,{Component} from "react";
import "./ItemsList.css"
class ItemsList extends Component{

  render(){
    //console.log(this.props.detectedItems);
    //console.log(this.props.key); key isn't a prop
    const {detectedItems, onDetectedItemsDelete, itemInput, onItemInputChange, onItemInputSubmit} = this.props;

    if(detectedItems.length > 0){

      return(
        <div className="itemsListContainer">
          {

            detectedItems.map((item, i) =>{
              return <li><span onClick={()=>onDetectedItemsDelete(i)} className="deleteIcon">X</span>{i}. {item.name}</li>
            })
          }

          <input
          id="newItemInput"
          name="newListItem"
          type="text"
          placeholder="Missed An Item? Add Here"
          value={itemInput}
          onChange={onItemInputChange}
          onKeyPress={onItemInputSubmit}
          required />

        </div>
      )

    }else{return <div></div>}
  }

}
export default ItemsList;
