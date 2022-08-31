import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            name: 'Moses'
        }
    }
    render() { 
        return ( 
            <h2>{this.state.name}</h2>
         );
    }
}
 
export default PureComp;
