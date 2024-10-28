import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {

  const {productId} = useParams()
  // console.log(productId);
  const {products, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const[image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  },[productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item, index) => (
                  <img onClick={()=>setImage(item)} src={item} key={index} alt="product" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                ))
              }
            </div>
            <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="product" />
            </div>
          </div>

          {/* <div className='flex-1'>

          </div> */}

          <div className='flex flex-col gap-4 my-8'>
            <p>Select size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 h-[60px]'>ADD TO CART</button>

        </div>
      </div>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product