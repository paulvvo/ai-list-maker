import React,{Component} from "react";
import "./Navigation.css";
class Navigation extends Component{
  render(){
    return(
      <div className="navigationBar">
        <p>Sign In</p>
        <p>Sign Up</p>
        <p>Sign Out</p>
      </div>
    );
  }
}

export default Navigation;
