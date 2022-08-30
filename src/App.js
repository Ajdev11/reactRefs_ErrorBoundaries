import React, { Component } from 'react';
import "./index.css"
import FunctionalApp from './Components/type of components';
import ClassComponents from './Components/classcomp';
import Hello from './Components/props';
import ClassProps from './Components/propsclass';
import State from './Components/stateClass';
import PropsMethod from './Components/methodProps';
import ConditionalRendering from './Components/conditions';



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
            </>*/
            <>
            <ConditionalRendering />
            </>
        );
    }
}
 
export default App;