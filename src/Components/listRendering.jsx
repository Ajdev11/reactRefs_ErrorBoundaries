import React from 'react';

function People({person}){
    return ( 
        <>
        <h1>I am{person.Name}, i love coding{person.skills}</h1>
        </>
     );
}
 
export default People;