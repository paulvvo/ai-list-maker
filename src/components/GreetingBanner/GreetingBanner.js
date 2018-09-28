import React,{Component} from "react";
import "./GreetingBanner.css";
class GreetingBanner extends Component{

  render(){
    // const{name} = this.props.currentUser;
    // console.log(name);
    // console.log(typeof name);

    if(this.props.currentUser.name){
      return(
        <div>
          <h1 className="mainGreeting">{`Hello Human ${this.props.currentUser.name.toUpperCase()}, What Would You Like To Track Today?`}</h1>
        </div>
      );
    }

    return(<div></div>);

  }
}

export default GreetingBanner;
