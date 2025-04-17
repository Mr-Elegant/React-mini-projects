import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);  
  return (
    <div className="m-2">
        <h2>Counter : {count}</h2>
        <button className='border-2 bg-blue-500 p-2 rounded m-2' onClick={()=> setCount(count + 1)}>Increase</button>    
        <button className='border-2 bg-blue-500 p-2 rounded m-2' onClick={()=> setCount(count - 1)}>Decrease</button>    
        <button className='border-2 bg-red-500 p-2 rounded m-2' onClick={()=> setCount(0)}>Reset</button>    
        <button className='border-2 bg-blue-500 p-2 rounded m-2' onClick={() => setCount(count + 2)}>+2</button>
        
    </div>
  )
}

export default Counter