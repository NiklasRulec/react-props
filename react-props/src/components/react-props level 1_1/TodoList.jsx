import TodoItem from "./TodoItem";

const TodoList = () => {

    const todoArray = ["Buy Grocerys","Send Email","Finish Assignment","Write Blog","Bake Cake"]
    
    return ( 
        <ul>
            <h1>My Todos</h1>
            {todoArray.map((item,index) => <TodoItem todo={item} key={index}/> )}
        </ul>
     );
}
 
export default TodoList;