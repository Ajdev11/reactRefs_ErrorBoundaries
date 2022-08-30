import React from 'react';

function PersonList(){
 let names = ['moses','Olaseni','Adebayo','Angela']
 let nameList = names.map(surname =><h1>{surname}</h1>)

 return(
    <>
    {nameList}
    </>
 )
}
export default PersonList;
