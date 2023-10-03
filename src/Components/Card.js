import React from 'react'
import {AiOutlineClockCircle} from "react-icons/ai"
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-hot-toast';

const Card = (props) => {
    let data=props.dataOne;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        // Logic
        if (likedCourses.includes(props.dataOne.id)) {
            // pahle se liked 
            setLikedCourses((prev) => prev.filter((cid) => cid !== props.dataOne.id));
            toast.error("Liked Removed");
        }
        else {
            // pahle se like nahi hai course 
            // insert karne h y course like course me 
            if (likedCourses.length === 0) {
                setLikedCourses([props.dataOne.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, props.dataOne.id]);
            }
            toast.success("Liked Successfully");
        }
    }

  return (
    
           
<div className='flex flex-col justify-center bg-white h-[400px]'>


                
                    <img src={props.dataOne.image} className='w-full -top-10 h-64'></img>
                    <p className='absolute bg-purple-500  rounded-lg text-white p-1 left-6'>{props.dataOne.tag}</p>
                    <div className='rounded-full w-[40px] h-[40px] bg-white relative p-1 -right-96 -top-14 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(props.dataOne.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
                    
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
