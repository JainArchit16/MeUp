import React from 'react'
import { useState } from 'react';

const Slide = (props) => {
    let datK=props.data;
    const [isShown, setIsShown] = useState(false);
  return (
    <div className='relative h-[400px] w-[300px]' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <img src={datK.image} className='w-full h-full opacity-90'></img>
      <p className='z-20 p-4 font-bold absolute bottom-4 text-white text-xl'>{datK.place}</p>
      {
        isShown?(
        <p className='z-20 p-4 absolute -bottom-1 text-white text-lg'>{datK.eventNumber} Events</p>

        ):(<></>)
      }
      <p></p>
    </div>
  )
}

export default Slide
