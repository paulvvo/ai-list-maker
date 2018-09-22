import React, {Component} from "react";
import "./SignIn.css";

class SignIn extends Component{
  render(){
    return(
      <div className="signInForm">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" />
              </div>

            </fieldset>
            <div className="">
              <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={()=>this.props.onRouteChange("home")}/>
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db" onClick={()=>this.props.onRouteChange("register")}>Sign up</a>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default SignIn;
