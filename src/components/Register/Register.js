import React, {Component} from "react";
import "./Register.css";

class Register extends Component{
  constructor(){
    super();
    this.state = {
      name:"",
      email:"",
      password:""
    }
  }

  render(){
    return(
      <div className="registerForm">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                onChange ={this.onEmailChange} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Name</label>
                <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                onChange={this.onNameChange}/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                onChange={this.onPasswordChange}
                onKeyPress={this.onPasswordChange} />
              </div>
            </fieldset>
            <div className="">
              <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign Up"
              onClick={this.onRegisterSubmit}/>
            </div>
          </div>
        </main>
      </div>
    );
  }

  onNameChange = (event) =>{
    // console.log(event.target.value);
    this.setState({name: event.target.value});
  }

  onEmailChange = (event) =>{
    // console.log(event.target.value);
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) =>{
    // console.log(event.target.value);
    this.setState({password: event.target.value});
    if(event.key === "Enter"){
      this.onRegisterSubmit();
    }
  }

  onRegisterSubmit = () =>{
    // console.log("register submitted");

    fetch("http://localhost:3000/register", {
      method:"post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(user => {
      // console.log(user);
      // console.log(user.id)
      if(user.id){
        this.props.onRouteChange("home");
        this.props.loadCurrentUser(user);
      }
    })
    .catch(err => console.log("Error Register User, Check Email is Unique"));

  }


}

export default Register;
