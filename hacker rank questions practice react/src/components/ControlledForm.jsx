import React, { useState } from 'react'

const ControlledForm = () => {
    const [user, setUser] = useState("");
    const handleSubmit = (e)=> {
        e.preventDefault();
    }
  return (
    <div className='mt-2'>
        <form onSubmit={handleSubmit}>
            <input value={user} onChange={(e)=> setUser(e.target.value)} placeholder='enter user name' className='border-2 text-white'  type="text" />
            <p>Hello, {user}</p>
        </form>
    </div>
  )
}

export default ControlledForm