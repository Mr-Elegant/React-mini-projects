import { useEffect, useState, createContext, useContext, memo } from "react"

const ThemeMode = {
  Light : 1,
  Dark : 2,
}
const ThemeClass = {
  [ThemeMode.Light] : "light",
  [ThemeMode.Dark] : "dark",
}
const myCT = createContext({name: "hey"});

function ThemeManager({children}) {
  const [themeMode , setThemeMode] = useState(ThemeMode.Dark);

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
      <myCT.Provider value={{themeMode, handleToggle}}>
        {children}
      </myCT.Provider>
    </div>
  )
}

const App = () => {
    return (
      <ThemeManager>
        <GrandParent />
      </ThemeManager>
    )
}

  const GrandParent = ()=> {
    console.log("gp")
    return (
      <Parent />
    )
  }
  const MemoizedGrandParent = memo(GrandParent);

  const Parent= ()=> {
    console.log("parent")
    return (
      <Child />
    )
  }
  const Child = ()=> {
    const {themeMode, handleToggle} = useContext(myCT);

    const text = themeMode === ThemeMode.Dark ? "🌚" : "😎"
    return( 
    <>
      <button onClick={handleToggle} className="border w-20 p-4 bg-black rounded border-red-300">{text}</button>
    </>)
  }

  


export default App
