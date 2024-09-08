import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (event)=>{
      event.preventDefault();
  }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 '>
            Subscribe now & get 20% off </p>
            <p className='text-gary-400 mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, iusto perspiciatis reprehenderit incidunt nisi alias quasi, expedita ab tempore porro obcaecati voluptates vero voluptas, enim omnis. Dolores, aliquid qui.
            </p>
            <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter your Email' />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
      
    </div>
  )
}

export default NewsLetterBox
