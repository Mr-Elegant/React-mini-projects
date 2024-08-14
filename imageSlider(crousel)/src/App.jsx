import { useState, useEffect } from 'react'
const data = ["https://wallpapers-clan.com/wp-content/uploads/2024/05/one-piece-luffy-ocean-action-desktop-wallpaper-cover.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2qcHTz-_x_RkT8uOJqcAvklXR9vPEX4yBQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkc6XIlVNWIpUSnGRw_lxEpEwKwkHbL15og&s"]


function App() {
  


  const [index, setIndex] = useState(0)

  const previmageHandler = () => {
    // setIndex( activeIndex - 1)
    setIndex(!index ? data.length - 1 : index-1)
  }
  const nextimageHandler = () => {
    // setIndex( activeIndex - 1)
    setIndex((index + 1 ) % data.length)
  }

  useEffect(() => {
   const timer = setTimeout(() => {
    nextimageHandler()
   }, 2000);
   return () => {
    clearTimeout(timer);
   }
  }, [index])
  
  

  return (
    <>
      
 
    
      <h1>Image Slider</h1>
   
      <div className='flex justify-center m-10 '>

         <button onClick={previmageHandler} className='m-10'>-</button>
         {data.map((url, i) => (
           <img src={url} key={url} className={`w-[200px] h[150px] object-contain ${index === i ? "block" : "hidden"}`} alt="image slider" />
         ))}
         <button onClick={nextimageHandler} className='m-10'>+</button>

      </div>
      
      


        
    </>
  )
}

export default App
