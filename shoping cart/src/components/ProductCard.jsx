import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext" 
import "./ProductCard.css"

export const ProductCard = ({product}) => {

  const {addToCart, cartList, removeFromCart} = useCart();
  
  const [isInCart, setIsInCart] = useState(false)

  const {id, name, price, image} = product;

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id)

    if(productIsInCart){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }
   
  }, [cartList, id])
  

  

  return (
    <div className="productCard">
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
            <p>${price}</p>
            
            {/* {isInCart ? (<button className="remove" onClick={()=> removeFromCart(product)}>Remove</button>) :  <button onClick={()=> addToCart(product)}>Add to Cart</button>} */}

            {isInCart ? (<button  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=> removeFromCart(product)}>Remove</button>) :  <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={()=> addToCart(product)}>Add to Cart</button>}
            
           
           
        </div>
    </div>
  )
}

 