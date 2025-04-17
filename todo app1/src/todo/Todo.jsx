import "./style.css"
import InputText from "./input-text/InputText";
import Button from "./button/Button"
import Todos from "./todos";
import useHandler from "./useHandler.js"
window.todoId = 1000;
const FilterType = {
    DONE: 1,
    PENDING: 2,
    UNKNOWN: 3,
  };
function Todo() {
   const {
     handleFilter,
     handleDone,
     handleEditSave,
     handleEditCancel,
     handleDelete,
     handleEdit,
     handleAddTodo,
     handleTodoChange,
     handleUnDone,
     activeFilter,
     todoToAdd,
     todos,
   } = useHandler();

    let todoToShow = [];
    let doneTodos = [];
    let pendingTodos = [];

    todos.forEach((t)=> {
        if(t.isCompleted){
            doneTodos.push(t)
        } else {
            pendingTodos.push(t)
        }
    })
    if (activeFilter === FilterType.UNKNOWN) {
        todoToShow = [...pendingTodos, ...doneTodos];
    } else if (activeFilter === FilterType.PENDING) {
        todoToShow = [...pendingTodos];
    } else {
        todoToShow = [...doneTodos];
    }
    return (
      <div>
        <div>
          <InputText value={todoToAdd} onChange={handleTodoChange} />
          <Button onClick={handleAddTodo} label={"Add todo"} />
        </div>
        <Button label="show Me Done Todos" onClick={handleFilter} />
        <Todos
          onDelete={handleDelete}
          onEdit={handleEdit}
          onEditCancel={handleEditCancel}
          onEditSave={handleEditSave}
          onDone={handleDone}
          onUnDone={handleUnDone}
          todos={todos}
        />
      </div>
    );
}
export default Todo
