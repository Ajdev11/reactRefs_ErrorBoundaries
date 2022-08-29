import React, { Component } from 'react';
import FunctionalApp from './Components/type of components';
import ClassComponents from './Components/classcomp';




class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <FunctionalApp />
            <ClassComponents />
            </>
        );
    }
}
 
export default App;