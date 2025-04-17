import React, { useState } from 'react'

const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [index, setIndex] = useState(null)
  const [editText, setEditText] = useState('')

  const addTodo = ()=> {
    if(task.trim() !== ""){
        setTodos([...todos, {text: task, done: false}]);
        setTask('')
    }
  } 
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
   }

   const deleteTodo = (index)=> {
    const updatedTodos = todos.filter((_,i) => i !==index)
    setTodos(updatedTodos);
   }

   const updateTodo = () => {
    if(editText.trim() !== '') {
        const updatedTodos = todos.map((todo,i) => i === index ? {...todo , text: editText}: todo);
        setTodos(updatedTodos);
        setEditText('');
        setIndex(null);
    };
   }

  return (
    <div>
        <input value={task} type="text" onChange={(e)=> setTask(e.target.value)} placeholder='enter task' className='border-2 border-violet-300 p-2 m-2' />
        <button onClick={addTodo} className='border-2 rounded-sm p-1 text-white bg-blue-300'>Add todo</button>

        {(index !== null) && (
            <div className='mt-5'>
                <input className='border-2 ' type="text" value={editText} onChange={(e)=> setEditText(e.target.value)} placeholder='Edit todo'  />
                <button onClick={updateTodo} className='ml-3 border-2 border-pink-200 '>Update Todo</button>
            </div>
        )}

        <ul className='list-none mt-5 border-2'>
            {todos.map((todo, i)=> (
                <li key={i} onClick={()=> toggleTodo(i)} style={{ textDecoration: todo.done ? 'line-through' : 'none' }} className='flex gap-3 mb-2'>
                    <span>{todo.text}</span>
                    <div>
                        <button onClick={()=> {
                            setIndex(i);
                            setEditText(todo.text);
                        }} className='bg-green-500 p-1 rounded'>Edit</button>
                        <button onClick={()=> deleteTodo(index)} className='ml-3 border-2 border-red-500 bg-red-200 p-1 '>Delete</button>
                    </div>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default TodoList