import { useEffect } from "react"

export const useTitle = (title) => {
  
  useEffect(() => {
    document.title = `${title} - pKart  Shopping App`
  
  }, [title])
  
  return null

}
