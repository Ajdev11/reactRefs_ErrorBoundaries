import React, { Component } from 'react';

class RegComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Olaseni'
        }
    }
    render() { 
        return (
            <>
            <h2>{this.state.name}</h2>
            </>
        );
    }
}
 
export default RegComp;