import React from 'react';
import People from './listRendering';

function NameList(){
   let Persons = [
      {id:1, Name:'Moses', skills:'React'},
      {id:2, Name:'Jose', skills:'J.React'}
   ]
   const PersonObj = Persons.map(person=>(
//
  <People person={person}/>
   ))
   return(
      <div>
         {PersonObj}
      </div>
   )
}
export default NameList;
