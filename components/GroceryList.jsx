import React, { useState } from 'react' ; 
import ItemComponent from './Item';

let initialState = [
  {name : 'Apple' ,calories : 25 } ,
  {name : 'Orange' ,calories : 25 } , 
  {name : 'Rice' ,calories : 25 }
]

const GrocerListComponent = () =>{
  const [list , setGroceryList] = useState(initialState) ;

  const removeItemHandler = (e)=>{
    let copyList = [...list] ;

    let updtaedList = copyList.filter((val)=>{
      return val.name != e.target.name ;
    });
    setGroceryList(updtaedList) ;
  }

  return  (
     <div>
            {list.map((value ,index )=>{
              return(
              <ItemComponent
                  item={value}
                  key ={index}
                  onClick = {removeItemHandler}
             /> 
              );
            })}
       </div>
  );
}

export default GrocerListComponent ;