const TodoItem = (props) => {

    console.log(props.todo);

    return ( 
        <li>{props.todo}</li>
     );
}
 
export default TodoItem;