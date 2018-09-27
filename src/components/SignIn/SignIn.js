import React, {Component} from "react";
import "./SignIn.css";

class SignIn extends Component{

  constructor(){
    super();
    this.state={
      emailInput:"",
      passwordInput:""
    }
  }

  render(){
    return(
      <div className="signInForm">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                onChange ={this.onEmailChange} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                onChange={this.onPasswordChange} />
              </div>

            </fieldset>
            <div className="">
              <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={this.onSignInSubmit}/>
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db" onClick={()=>this.props.onRouteChange("register")}>Sign up</a>
            </div>
          </div>
        </main>
      </div>
    )
  }
  onEmailChange = (event) =>{
    // console.log(event.target.value);
    this.setState({emailInput:event.target.value});
  }
  onPasswordChange = (event) =>{
     //console.log(event.target.value);
    this.setState({passwordInput:event.target.value});
  }

  onSignInSubmit = (event) =>{
    // console.log(this.state.emailInput);
    // console.log(this.state.passwordInput);
    fetch("http://localhost:3000/signin",{
      method:"post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email:this.state.emailInput,
        password:this.state.passwordInput
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id){
        this.props.onRouteChange("home");
        this.props.loadCurrentUser(user);
      }
    })
    .catch(err => console.log("Check Email and Password"));
  }



}
//()=>this.props.onRouteChange("home")

export default SignIn;
