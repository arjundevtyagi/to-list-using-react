import AppNane from "./components/AppName";
import AddComponent from "./components/AddComponemt";
import ItemsContainer from "./components/ItemContainer";
import "./App.css";

function App() {

  const itemsList = [
    {
      name : "Do Code",
      date : "01/01/1990"
    },
    {
      name : "Do Exercise",
      date : "25/01/1990"
    },
    {
      name : "Do Eat",
      date : "04/01/1990"
    },
  ];

  console.log(itemsList);
 

  return (
    <>
 
 <center id="main" className="">
    <AppNane/>
    <AddComponent/>
    <ItemsContainer items = {itemsList}/>
   
  </center>
  
    </>
  )
}

export default App
