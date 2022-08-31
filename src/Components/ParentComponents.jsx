import React, { Component } from 'react';
import PureComp from './PureComponents';
import RegComp from './RegularCopm';

class ParentComp extends Component {
    constructor(){
        super()
        this.state = {
            name : 'Anjorin'
        }
    } 
    render() { 
        return (
            <>
            <h2>{this.state.name}</h2>
            <PureComp />
            <RegComp />
            </>
        );
    }
}
 
export default ParentComp;
//Difference between the Regular components and the Pure Componnets
//Is that in The regular components, It does not implement the shouldComponentsUpdate method
//It always returns True by default while the Pure components
//Implements the shouldComponentsUpdate with a shallow props and state comparism
//However, its always advisable to use the regular Components class