//props are properties that rae passed from the parent to the children
//they are optional input a components can accept and it can work dynamically
//we specify an attribute an asiign a value
//examples below
import React from "react";
//lets destructure this props then we have;
const Hello = (props) => {
    const {name, otherNames} = props
    return ( 
        <>
       <h3>Hey {name} {otherNames}</h3>
        </>
     );
}
 
export default Hello;