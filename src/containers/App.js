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


const initialState = {
  urlInput: "",
  imageSrc:"",
  detectedItems:[],
  itemInput:"",
  currentUser:{},
  route:""
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  // componentDidMount(){
  //   fetch("http://localhost:3000")
  //   .then(response => response.json())
  //   .then(console.log);
  // }
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet"/>
        <Particles className="particles" params={{
          particles: {
            "number":{
              "value":60,
              "density":{
                "enable":true,"value_area":800
              }
            }
          }
        }}/>
        <Navigation onSignOut={this.onSignOut} onRouteChange={this.onRouteChange} route={this.state.route}/>
        {
          this.state.route === "home"
          ?<div>
            <GreetingBanner currentUser={this.state.currentUser}/>
            <UrlLinkForm onUrlLinkChange={this.onUrlLinkChange} onUrlSubmit={this.onUrlSubmit}/>
            <div className="inline">
              <Image imageSrc={this.state.imageSrc}/>
              <ItemsList
              onItemInputChange={this.onItemInputChange}
              onDetectedItemsDelete = {this.onDetectedItemsDelete}
              detectedItems={this.state.detectedItems}
              itemInput = {this.state.itemInput}
              onItemInputSubmit = {this.onItemInputSubmit}/>
            </div>

          </div>
          :this.state.route === "register"
          ?<Register onRouteChange={this.onRouteChange} loadCurrentUser={this.loadCurrentUser} />
          :<SignIn onRouteChange={this.onRouteChange} loadCurrentUser={this.loadCurrentUser} />

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

    // fetch("http://localhost:3000/urlInputAnalyze", {
    fetch("https://mysterious-bayou-91998.herokuapp.com/urlInputAnalyze", {
      method:"post",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({
          urlInput:this.state.urlInput,
          email: this.state.currentUser.email
      })
    })
    .then(response => response.json())
    .then(response => {
      this.setState({detectedItems:response.outputs[0].data.concepts});
    });
  }
  onRouteChange = (route)=>{
    //console.log(route);
    this.setState({route:route});
  }
  onDetectedItemsDelete = (i)=>{
    this.state.detectedItems.splice(i,1);
    const newArr = this.state.detectedItems;
    // console.log(newArr);
    this.setState({detectedItems: newArr});


    // fetch("http://localhost:3000/itemList", {
    fetch("https://mysterious-bayou-91998.herokuapp.com/itemList", {
      method:"put",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({
        email: this.state.currentUser.email,
        detectedItems: newArr
      })
    })
    .then(response => response.json())
    .then(console.log)
  }
  onItemInputChange = (event) =>{
    //console.log(event.target.value);
    this.setState({itemInput: event.target.value});
  }
  onItemInputSubmit = (event) =>{
    if(event.key === "Enter" && event.target.value){
      const newList = this.state.detectedItems;
      newList.push({name:event.target.value});
      this.setState({detectedItems: newList});
      this.setState({itemInput: ""});


      // fetch("http://localhost:3000/itemList", {
      fetch("https://mysterious-bayou-91998.herokuapp.com/itemList", {
        method:"put",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
          email: this.state.currentUser.email,
          detectedItems: newList
        })
      })
      .then(response => response.json())
      .then(console.log)
    }
  }
  loadCurrentUser = (user) =>{
    console.log(user);
    // console.log(user.name);
    this.setState({currentUser:user});
    this.setState({urlInput:user.urlinput});
    this.setState({imageSrc:user.urlinput});
    this.setState({detectedItems:user.detecteditems})

  }
  onSignOut = () =>{
    this.setState(initialState);
    this.onRouteChange("login");
  }
}

export default App;
