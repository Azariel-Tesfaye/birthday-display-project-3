import React from 'react'

const PeoplesCard = ({image, name, age}) => {
  return (
    <section className=''>
        <div className='flex'>
            <img src={image} alt="people" 
            className='rounded-full object-cover w-[75px] h-[75px] mt-4 mb-2' />
            <div className='flex flex-col justify-start ml-4 mt-7 '>
                <h3 className='font-mono font-bold text-black text-2xl'>{name}</h3>
                <p className='font-motserat text-slate-500 text-xl'>{age} years</p>
            </div>
        </div>
    </section>
  )
}

export default PeoplesCard