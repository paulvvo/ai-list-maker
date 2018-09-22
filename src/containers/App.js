import React, { Component } from 'react';
import './App.css';

import Image from "../components/Image/Image";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import UrlLinkForm from "../components/UrlLinkForm/UrlLinkForm";
import GreetingBanner from "../components/GreetingBanner/GreetingBanner";
import Navigation from "../components/Navigation/Navigation";
import ItemsList from "../components/ItemsList/ItemsList";

import Particles from "react-particles-js";
import Clarifai from "clarifai";

const clarifaiApp = new Clarifai.App({
 apiKey: 'd4ccf75959a54619b16a900eab3667e7'
});



class App extends Component {
  constructor(){
    super();
    this.state={
      urlInput: "",
      imageSrc:"",
      detectedItems:[],
      route:""
    }
  }

  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet"/>
        <Particles className="particles" params={{
          particles: {
            "number":{
              "value":80,
              "density":{
                "enable":true,"value_area":800
              }
            }
          }
        }}/>
        <Navigation onRouteChange={this.onRouteChange} route={this.state.route}/>
        {
          this.state.route === "home"
          ?<div>
            <GreetingBanner/>
            <UrlLinkForm onUrlLinkChange={this.onUrlLinkChange} onUrlSubmit={this.onUrlSubmit}/>
            <div className="inline">
              <Image imageSrc={this.state.imageSrc}/>
              <ItemsList detectedItems={this.state.detectedItems}/>
            </div>

          </div>
          :this.state.route === "register"
          ?<Register onRouteChange={this.onRouteChange} />
          :<SignIn onRouteChange={this.onRouteChange} />

        }


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

    clarifaiApp.models
    .predict("aaa03c23b3724a16a56b629203edc62c", this.state.urlInput)
    .then(response => {
      // console.log(response.outputs[0].data.concepts[0].name);
      this.setState({detectedItems:response.outputs[0].data.concepts})
    });
  }

  onRouteChange = (route)=>{
    //console.log(route);
    this.setState({route:route});
  }

}

export default App;
