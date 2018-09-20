import React, { Component } from 'react';
import './App.css';

import Image from "../components/Image/Image";
import UrlLinkForm from "../components/UrlLinkForm/UrlLinkForm";
import GreetingBanner from "../components/GreetingBanner/GreetingBanner";

import Particles from "react-particles-js";

class App extends Component {
  constructor(){
    super();
    this.state={
      urlInput: "",
      imageSrc:""
    }
  }

  render() {
    return (


      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet"/>
        <Particles className="particles" params={{
          particles: {
            "number":{
              "value":40,
              "density":{
                "enable":true,"value_area":800
              }
            }
          }
        }}/>
        <GreetingBanner/>
        <UrlLinkForm onUrlLinkChange={this.onUrlLinkChange} onUrlSubmit={this.onUrlSubmit}/>
        <Image imageSrc={this.state.imageSrc}/>
        <Image imageSrc={this.state.imageSrc}/>
      </div>
    );
  }

  onUrlLinkChange =(event)=>{
    // console.log(event.target.value);
    this.setState({urlInput: event.target.value});
  }
  onUrlSubmit = () =>{
    // console.log("image submitted");
    // console.log(this.state.urlInput);
    this.setState({imageSrc:this.state.urlInput});
  }
}

export default App;
