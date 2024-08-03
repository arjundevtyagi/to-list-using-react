export default function TodoItem({todaItem , todoDate}){

    return(
        <div className="row">
    <div className="col-5 ">
     <p>{todaItem}</p>
    </div>
    <div className="col-4 ">
      <p>{todoDate}</p>
    </div>
    <div className="col-3 ">
    <button type="button" className="btn btn-danger">DELETE</button>
    </div>

  </div>
    )
}