import React, { useEffect, useState } from 'react'

const ThemedComponent = () => {
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage on mount
  useEffect(()=>{
    const savedTheme = localStorage.getItem('myComponentTheme');
    if(savedTheme) {
        setTheme(savedTheme)
    }
  },[])  

  // Save theme to localStorage when it changes
  useEffect(()=>{
    localStorage.setItem('myComponentTheme', theme);
  },[theme]);  

  const toggleTheme = ()=> {
    setTheme(prev=> (prev === 'light' ? 'dark': 'light'));
  }

  
  return (
    <div
    className={`p-4 rounded-lg transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
    }`}
  >
    <h2 className="text-xl mb-4">This is a themed component</h2>
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
    >
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  </div>
  )
}

export default ThemedComponent