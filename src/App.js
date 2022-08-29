import React, { Component } from 'react';
import FunctionalApp from './Components/type of components';
import ClassComponents from './Components/classcomp';
import Hello from './Components/props';
import ClassProps from './Components/propsclass';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <FunctionalApp />
            <ClassComponents />
            <Hello name = "Moses" otherNames = "Olaseni" />
            <ClassProps aka = "Engineer" alias ="Baddest" />
            </>
        );
    }
}
 
export default App;