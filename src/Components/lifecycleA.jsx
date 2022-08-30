import React, { Component } from 'react';
import LifeCycleB from './lifecycleB';

class LifeCycle extends Component {
    constructor(){
        super()
        this.state={
            name: 'moses'
        }
        console.log('lifecycleA Constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('lifecycleA static getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleA componentsDidMount')
}
    render(){ 
        console.log('lifecycleA renderComponents')
        return (
            <>
            <div>Lifecycle A</div>
            <LifeCycleB />
            </>
        );
    }
}
 
export default LifeCycle;