import { MdOutlineDelete } from "react-icons/md";
import design from "./TodaItem.module.css"


export default function TodoItem({todaItem , todoDate , handelDltBtn}){

    return(
    <div className="row">
           <div className="col-5 ">
                <p>{todaItem}</p>
           </div>
           <div className="col-4 ">
                <p>{todoDate}</p>
           </div>
          <div className="col-3 ">
               <button type="button"
                       className={`btn btn-danger `}
                       onClick={()=>handelDltBtn(todaItem)}
               ><MdOutlineDelete className={`${design.btn}`} />

              </button>
    </div>

  </div>
    )
}