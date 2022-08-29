import React, { Component } from 'react';
import Child from './childProps';

class PropsMethod extends Component {
    constructor(){
        super()
        this.state = {
            Parent: 'GoodMorning'
        }
        //this.handleClick = this.handleClick.bind(this)
    }
    //add an eventlistener
    handleClick=(children)=>{
        alert(`Hello ${this.state.Parent} from ${children}`)
    }
    render() { 
        return (
            <>
            <h2>{this.state.Parent}</h2>
            <Child greetParent= {this.handleClick}/>
            </>
        );
    }
}
 
export default PropsMethod;