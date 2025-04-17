import { useEffect, useState } from "react"

const ThemeMode = {
  Light : 1,
  Dark : 2,
}
const ThemeClass = {
  [ThemeMode.Light] : "light",
  [ThemeMode.Dark] : "dark",
}


const PropDrillingWay = () => {
  const [themeMode , setThemeMode] = useState(ThemeMode.Dark);
  
    // useEffect(()=> {
    //   const body = document.getElementsByTagName("body")[0];
    //   body.classList.add(ThemeClass[themeMode])
    // },[])
  
    useEffect(()=> {
      addThemeClass(ThemeClass[themeMode])
    },[])
  
    function addThemeClass(className , removeClassName) {
      const body = document.getElementsByTagName("body")[0];
      removeThemeClassFromBody(body, removeClassName)
      body.classList.add(className)
    }
    function removeThemeClassFromBody(body, className){
      if (!className) return;
      body.classList.remove(className);
    }
    const handleToggle = ()=> {
      const newThemeMode = themeMode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark
      setThemeMode(newThemeMode);
      const removeClassName = ThemeClass[themeMode];
      addThemeClass(ThemeClass[newThemeMode], removeClassName)
    }
  
    return (
      <div className='m-10'>
        <span>Hello, im learning theme switching </span>
        <GrandParent themeMode={themeMode} setThemeMode = {handleToggle}/>
      </div>
    )
}


const GrandParent = ({themeMode, setThemeMode})=> {
    return (
      <Parent themeMode={themeMode} setThemeMode = {setThemeMode}/>
    )
  }
  const Parent= ({themeMode, setThemeMode})=> {
    return (
      <Child themeMode={themeMode} setThemeMode = {setThemeMode}/>
    )
  }
  const Child = ({themeMode, setThemeMode})=> {
    const text = themeMode === ThemeMode.Dark ? "🌚" : "😎"
    return( 
    <>
      <button onClick={setThemeMode} className="border w-20 p-4 bg-black rounded border-red-300">{text}</button>
    </>)
  }
  


export default PropDrillingWay
