import "./style.css"
import Button from "../button"
import { useRef } from "react";

function Todos({todos = [], onDelete, onEdit, onDone, onEditCancel, onEditSave, onUnDone}) {
    return (
      <div className="todo-list">
        {todos.map((data, index) => {
          return (
            <TodoItem
              key={data.id}
              index={index}
              data={data}
              onDelete={onDelete}
              onEdit={onEdit}
              onEditCancel={onEditCancel}
              onEditSave={onEditSave}
              onDone={onDone}
              onUnDone={onUnDone}
            />
          );
        })}
      </div>
    );
}
export default Todos



function TodoItem( {data, onDelete, onEdit, onEditCancel, onEditSave, index, onDone, onUnDone} ) {

    const inputRef = useRef('');

    function handleEdit(id){
        return ()=> {
            onEdit(id)
        }
    }
    function handleDelete(id){
        return ()=> {
            onDelete(id)
        }
    }
    function handleEditCancel(id) {
        return () => {
            onEditCancel(id)
        }
    }
    function handleDone(id) {
        return () => {
            onDone(id)
        }
    }
    function handleUnDone(id) {
        return () => {
            onUnDone(id)
        }
    }
    function handleEditSave(id) {
        return () => {
            const value = inputRef.current.value;
            // console.log(value)
            onEditSave(id, value);
            inputRef.current.valueOf = ""
        }
    }
    if(data.isEditMode) {
        return (
            <div >
                <input ref={inputRef} type="text" defaultValue= {data.todo} />
                <Button onClick={handleEditSave(data.id)} label="save" />
                <Button onClick={handleEditCancel(data.id)} className="danger"  label="cancel"/>
            </div>
        )
    }
    return (
        <div data-completed-todo={data.isCompleted}  >
            <span>{data.todo}</span>
            <Button onClick={handleEdit(data.id)}  label="edit" />
            <Button onClick={handleDelete(data.id)} className="danger"  label="Delete"/>
            <Button onClick={handleDone(data.id)} className="success"  label="Done"/>
            <Button onClick={handleUnDone(data.id)} className="danger"  label="UnDone"/>
        </div>
    )
}