import { createContext, useState , useEffect } from 'react'
import {getAllProductData} from '../api/productApi.js'

export const ProductDataContext = createContext(); 
const ProductContext = ({children}) => {
  const [productData, setProductData] = useState([]);

  async function getData(){  
    let data =  await getAllProductData();
    setProductData(data)
  }

  useEffect(()=>{
    getData()
  },[])
  
  return (
    <div>
      <ProductDataContext.Provider value={{productData}}>
      {children}    
      </ProductDataContext.Provider>
    </div>
  )
}
export default ProductContext
