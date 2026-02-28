import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'
const ProductDetails = () => {
  const {productData} = useContext(ProductDataContext)
  let selectedData = productData[(useParams().id)-1];
  return (
    <div>
      <header className='bg-violet-500 text-2xl p-5 text-center font-bold underline' >Product Details Page</header>
      {selectedData ?<div className="card flex-col sm:flex-row overflow-scroll w-full sm:w-[90%] sm:h-[70%] p-3 sm:border-2 border-violet-300    sm:rounded-2xl transition-all sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-[-50%] flex gap-5 items-center sm:item-[unset] sm:justify-around">
            <img src={selectedData.image} className='rounded-2xl object-contain sm:w-[30%] sm:h-[99%]' alt="" />
            <div className='flex flex-col items-center gap-5'>
              <h2 className='font-bold text-center text-violet-400 overflow-x-scroll scroll-smooth text-2xl' >{selectedData.title}
              </h2>
              <h2 className='text-white font-bold text-3xl'>${selectedData.price}</h2>
            <p className='text-violet-200  overflow-scroll text-center sm:text-left' >{selectedData.description}</p>
            <button className='bg-violet-400 text-white border-none px-7 py-3 font-bold active:scale-95' >Buy Now</button>
            </div>
        </div> : "" } 
    </div>
  )
}

export default ProductDetails
