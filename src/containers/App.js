import React, { Component } from 'react';
import './App.css';
import UrlLinkForm from "../components/UrlLinkForm/UrlLinkForm";
import Image from "../components/Image/Image";
import GreetingBanner from "../components/GreetingBanner/GreetingBanner";


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
        <GreetingBanner/>
        <UrlLinkForm onUrlLinkChange={this.onUrlLinkChange} onUrlSubmit={this.onUrlSubmit}/>
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
