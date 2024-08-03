import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Footer() {
  return (
    <>
    <div className='bg-[#2C3E50] fixed bottom-0 right-0 left-0 p-20 row'>
        <div className='sm:w-full md:w-1/3  sm:mx-auto'>
            <h3 className='font-bold text-xl'>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p className='pt-3'>Clark, MO 65243</p>
        </div>

        <div className='sm:w-full md:w-1/3  sm:mx-auto pb-4'>
            <h3 className='font-bold text-xl pb-4'>AROUND THE WEB</h3>
            <i className='fa-brands fa-facebook px-2'></i>
            <i className='fa-brands fa-twitter px-2'></i>
            <i className='fa-brands fa-linkedin px-2'></i>
            <i className='fa-solid fa-globe px-2'></i>
        </div>

        <div className='sm:w-full md:w-1/3  sm:mx-auto'>
            <h3 className='font-bold text-xl'>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed</p>
            <p> Bootstrap theme created by Route</p>
        </div>

        <div className='py-5 bg-[#06090C] w-full fixed bottom-0 right-0 left-0'>
            <p className='text-center'>Copyright © Your Website 2021</p>
        </div>
        
    </div>
       

    </>
    
  )
}
