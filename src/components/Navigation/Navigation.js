import React,{Component} from "react";
import "./Navigation.css";
class Navigation extends Component{

  render(){
    // console.log(this.props.route);
    return(
      <div className="navigationBar">
        {
          this.props.route ==="home"
          ?<div className="signedInNavBar">
            <p onClick={this.props.onSignOut}>Sign out</p>
          </div>
          :<div className="signedOutNavBar">
            <p onClick={()=>this.props.onRouteChange("login")}>Login</p>
            <p onClick={()=>this.props.onRouteChange("register")}>Sign up</p>
          </div>
        }
      </div>
    );
  }
}

export default Navigation;
