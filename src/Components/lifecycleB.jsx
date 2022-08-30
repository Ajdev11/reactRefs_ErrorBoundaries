import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(){
        super()
        this.state={
            name: 'moses'
        }
        console.log('lifecycleB Constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('lifecycleB static getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleB componentsDidMount')
}
    render(){ 
        console.log('lifecycleB renderComponents')
        return (
            <>
            <div>Lifecycle B</div>
            </>
        );
    }
}
 
export default LifeCycleB;