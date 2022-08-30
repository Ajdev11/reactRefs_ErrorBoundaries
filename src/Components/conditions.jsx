import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render(){
   //example of the if/else statement
    /*if (this.state.isLoggedIn) {
      return <div>Welcome MOses</div>;
    } else {
      return <div>WElcome Guest</div>;
    }
    //example of the elemnet variavble
    /*let message;
        if(this.state.isLoggedIn){
            message = <div>Welcome Moses</div>
        }else{
            message = <div>Goodbye Moses</div>
        }
        return <div>{message}</div>*/
    //the best approach for conditional rendering is the tenary method;
 return (
    this.state.isLoggedIn ? (<div>Welcome AJdEV</div>) : (<div>Goodbye Ajdev</div>)
 )
  }
}

export default ConditionalRendering;
