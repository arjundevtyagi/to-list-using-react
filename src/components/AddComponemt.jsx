import { useState } from "react"
import { RiAddCircleLine } from "react-icons/ri";


export default function AddComponent({newItems }){

  const [toDoName , setToDOName] = useState("");
  const [toDoDate , setToDODate] = useState("");

  const handelOnNameChange = (event)=>{
    setToDOName(event.target.value); 
  }; 
  
  const handelOnDateChange = (event)=>{
    setToDODate(event.target.value);
  };

  const handleOnBtnClick = (event)=>{
    newItems(toDoName , toDoDate);
    setToDOName("");
    setToDODate("");
  }

    return(
        <div className="row items">
             <div className="col-5 ">
                  <input type="text"
                   placeholder="Enter your todo here"
                   onChange={handelOnNameChange}
                   value={toDoName}
                    />
             </div>
            <div className="col-4 ">
                  <input type="date"
                   name="date"
                   id="date"
                   onChange={handelOnDateChange}
                   value={toDoDate}
                     />
            </div>
             <div className="col-3 ">
                  <button type="button"
                   className="btn btn-success"
                   onClick={handleOnBtnClick}
                   ><RiAddCircleLine />
</button>
            </div>
    
      </div>
    )
}