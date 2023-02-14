import React from "react";

export function Parent() {
  return(
    <>
      <h1>Hello</h1>
      <Child name="Billy" description="A lean green fighting machine"/>
      <Child name="Zara" description="Literally a piece of broccoli"/>
      <Child name="M'Baku" description="mm he thicc"/>
      <Conditional condition="sally" first="tom" second="bob"/>
      <Conditional condition="not sally" first="tom" second="bob"/>
      <Ternary/>
      <Ternary condition="hmm"/>
      <Ternary condition={null}/>
      <List/>
      <h1>The B-Team:</h1>
      <BTeam/>
    </>
  );
}
  
function Child({name, description}) {
  return(
    <div>
    <h3>{name}</h3>
    <p>{description}</p>
    </div>
  );
}

function Conditional({condition, first, second}) {
  if (condition==="sally") {
    return <li>{first}</li>
  }
  return <li>{second}</li>
}

function Ternary({condition}) {
  return <li>
    {condition ? "Condition passed": "Condition unknown." }
  </li>
}

const people = ["bill", "really", "bodega", "rintaro", "zealand", "tim"]

function List() {
  const listItems = people.map(person => <li key={person}>{person}</li>);
  return(
    <ul>{listItems}</ul>
  );
}

function BTeam() {
  const bRoll = people.filter(person => person[0]==="b") 
  return <ul>{bRoll.map(person=> <li key={person}>{person}</li>)}</ul>
}