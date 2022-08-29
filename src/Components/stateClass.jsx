import React, { Component } from 'react';

class State extends Component {
    /*state = { 
        message : "Hi, i am the best dev in React.js"
     }*/
     constructor(){
        super()
        this.state ={
        message : "Hi, i am the best dev in React.js"
        }
        //binding method
       // this.handleMessage = this.handleMessage.bind(this)
     }
     //pass an handler or event listener
     //alternatively the binding method can be called in the handleclass also
     //lets an example of that below
     handleMessage(){
        //call setState
        this.setState({
            message : "thanks for seeing me"
        })
     }
     //also the arrow function can be passed into the button directly 
     //example below
    render() { 
        return (
            <>
            <h4>{this.state.message}</h4>
            <button onClick={()=> this.handleMessage()}>Subscribe</button>
            </>
        );
    }
}
//however the binding method in the constructor and the class should be the best approach going forward
 
export default State;