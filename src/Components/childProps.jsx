import React from "react";

const Child = (props) => {
    return ( 
        <>
        <button onClick={()=>props.greetParent('children')}>SayHelloToParent</button>
        </>
     );
}
 
export default Child;