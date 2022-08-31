import React, { Component } from 'react';
import "./index.css"
//import FunctionalApp from './Components/type of components';
//import ClassComponents from './Components/classcomp';
//import Hello from './Components/props';
//import ClassProps from './Components/propsclass';
//import State from './Components/stateClass';
//import PropsMethod from './Components/methodProps';
//import ConditionalRendering from './Components/conditions';
//import NameList from './Components/listRendering2';
//import Form from './Components/form';
//import LifeCycle from './Components/lifecycleA';
//import PureComp from './Components/PureComponents';
import ParentComp from './Components/ParentComponents';

class App extends Component {
    state = {  } 
    render() { 
        return (
           /* <>
            <FunctionalApp  />
            <ClassComponents />
            <Hello name = "Moses" otherNames = "Olaseni" />
            <ClassProps aka = "Engineer" alias ="Baddest" />
            <State />
            <PropsMethod  />
            <ConditionalRendering />
            <NameList />
            <Form />
             <LifeCycle />
            </>*/
            <>
           <ParentComp />
            </>
        );
    }
}
 
export default App;