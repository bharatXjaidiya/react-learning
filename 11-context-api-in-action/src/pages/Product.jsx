import React, { use, useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'
const Product = () => {
  const navigate = useNavigate();
  const { productData, getSelectedData } = useContext(ProductDataContext)
  function handleClick(id){
    navigate(`/product/detail/${id}`)
  }
  return (
    <div>
      <header className='bg-violet-500 text-2xl p-5 text-center font-bold underline' >Product Page</header>
      <div className="cardContainer flex flex-wrap justify-center items-center gap-2 p-2">
        {productData ? productData.map((e,id) => {
          return <div key={id} onClick={()=>{
            handleClick(id+1)
          }} className="card overflow-hidden w-full sm:w-60 sm:h-70 p-3 border-2 border-violet-300 rounded-2xl active:scale-95 transition-all flex flex-col  items-center sm:block ">
            <img src={e.image} className='rounded-2xl object-contain h-50 w-70 mb-2' alt="" />
            <div className='flex flex-col sm:flex-row items-center gap-5'>
              <h2 className='font-bold text-center text-violet-400 sm:text-nowrap overflow-x-scroll scroll-smooth text-2xl' >{e.title}</h2>
              <h2 className='text-white font-bold text-xl'>${e.price}</h2>
            </div>
          </div>
        }) : <p className='text-violet-400 text-2xl' >Loading....</p>}
      </div>


    </div>
  )
}

export default Product
