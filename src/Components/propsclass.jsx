import React, { Component } from 'react';

class ClassProps extends Component {
    state = {  } 
    render() { 
        //lets destructure props in this class components
        const {aka, alias} = this.props
        return (
            <>
            <h3>Software {aka} {alias}</h3>
             </>
        );
    }
}
 
export default ClassProps;