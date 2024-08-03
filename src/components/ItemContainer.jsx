import TodoItem from "./TodaItem";


function ItemsContainer({items}){
    
items.map((i)=>(console.log(i)));
    return <>
    {items.map((item)=>(<TodoItem key={item.name} todaItem={item.name} todoDate={item.date}/>)
    )}

</>

    
}


export default ItemsContainer;

/*
    <TodoItem todaItem = {"Buy Milk"} todoDate={"02/07/2004"}/>
    <TodoItem todaItem = {"Buy Milk"} todoDate={"02/07/2004"}/>
    <TodoItem todaItem = {"Buy Milk"} todoDate={"02/07/2004"}/>
 */