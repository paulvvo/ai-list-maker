import React,{Component} from "react";
import "./GreetingBanner.css";
class GreetingBanner extends Component{
  render(){
    return(
      <div>
        <h1 className="mainGreeting">{`Hello User, What Would You Like To Track Today?`}</h1>
      </div>
    );
  }
}


export default GreetingBanner;
