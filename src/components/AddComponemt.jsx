export default function AddComponent(){

    return(
        <div className="row items">
        <div className="col-5 ">
          <input type="text" placeholder="Enter toda here" />
        </div>
        <div className="col-4 ">
          <input type="date" name="date" id="date" />
        </div>
        <div className="col-3 ">
        <button type="button" className="btn btn-success">ADD</button>
        </div>
    
      </div>
    )
}