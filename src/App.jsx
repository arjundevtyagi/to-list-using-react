import AppNane from "./components/AppName";
import AddComponent from "./components/AddComponemt";
import ItemsContainer from "./components/ItemContainer";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";



function App() {


  // console.log(itemsList);
  const[toDoItems , setToDoItems] = useState([]);

  const onAddingNewItems = (item , dueDate) =>{
   
       const newArr = [
        ...toDoItems ,
         { 
          name : item,
          date : dueDate
        }
                      ];
        setToDoItems(newArr);
        
    
    
  };
  
  const handelDltBtn = (itemNAme)=>{
    console.log("deleted");
    console.log(itemNAme);

    const newToDoItems = toDoItems.filter((item) => itemNAme !== item.name);
    setToDoItems(newToDoItems);
    
    
  }



  return (
    <>
 
 <center id="main" className="">
    <AppNane/>
    <AddComponent  newItems = {onAddingNewItems} />
   {(toDoItems.length) <= 0 && <WelcomeMsg  />} 
    <ItemsContainer items = {toDoItems} handelDltBtn = {handelDltBtn} />

  </center>
  
    </>
  )
}

export default App




/**  code for more optimization for empty value
 *  if(item === "" && dueDate === ""){
      const newArr = [
        ...toDoItems ,
         { 
          name : "Task not assigned",
          date : "Date not assigned"
        }
                      ];
        setToDoItems(newArr);
    }
    else if(item === "" ){
      const newArr = [
        ...toDoItems ,
         { 
          name : "Task not assigned",
          date : dueDate
        }
                      ];
        setToDoItems(newArr);
    }
    else if(dueDate === ""){
      const newArr = [
        ...toDoItems ,
         { 
          name : item,
          date : "Date not assigned"
        }
                      ];
        setToDoItems(newArr);
    }
 */