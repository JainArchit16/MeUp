import React from 'react'
import {AiOutlineClockCircle} from "react-icons/ai"

const Card = (props) => {
    let data=props.dataOne;
  return (
    
           
<div className='flex flex-col justify-center bg-white h-[400px]'>


                
                    <img src={props.dataOne.image} className='w-full -top-10 h-64'></img>
                    <p className='absolute bg-purple-500  rounded-lg text-white p-1 left-6'>{props.dataOne.tag}</p>
                    
                <p  className='font-bold p-2 pl-10 text-2xl'>{data.title}</p>
                <div className='flex flex-row items-center opacity-70 pl-10'>
                    <AiOutlineClockCircle></AiOutlineClockCircle>
                    <p className='pl-2'>{data.time}</p>

                </div>
                <div className='flex flex-row justify-around m-4'>

                    <button className='font-bold hover:bg-red-500 hover:text-white inline-block  border-2 transition-all p-1'>Get Ticket</button>
                        <p className='font-bold text-red-500 text-2xl'>${data.price}</p>
                </div>




</div>
       
  )
}

export default Card
