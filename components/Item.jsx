import React from 'react' ; 

const ItemComponent = (props)=>{
  return <>
    <h1>{props.item.name}</h1> 
    <div>{props.item.calories}</div>
    <button name={props.item.name} onClick ={props.onClick}>Remove</button>
  </>
}

export default ItemComponent ; 