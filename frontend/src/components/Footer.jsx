import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div> 
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo5} className='mb-5 w-32' alt="logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae quae officiis suscipit modi deserunt, exercitationem rem eveniet aperiam atque!
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+374-77-00-81-32</li>
                    <li>example@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* <div>
            <hr />
            <p className='py-5 text-sm text-center'></p>
        </div> */}
    </div>
  )
}

export default Footer