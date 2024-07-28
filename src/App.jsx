import AppNane from "./components/AppName";
import AddComponent from "./components/AddComponemt";
import TodoItem1 from "./components/TodaItem1";
import "./App.css";

function App() {
 

  return (
    <>
 
     <center id="main" className="">
    <AppNane/>
    <div className="items">
    <AddComponent/>
    <TodoItem1/>
    </div>
   
     </center>
  
    </>
  )
}

export default App
