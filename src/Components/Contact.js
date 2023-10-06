import React from 'react'
import {BiLogoPinterestAlt} from "react-icons/bi";
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
const Contact = () => {
  return (
    <div>
      <div className='flex flex-row bg-[#343353]'>
        <div className='flex flex-col'>
            <img src='https://ovatheme.com/meup/wp-content/uploads/2019/06/Asset-9.svg' className='w-[130px]'></img>
            <p className='text-white opacity-80'>Lorem ipsum dolor sit amet, conse ctetuers adipiscing eli sed diam nonum nibhie…</p>
            <div className='flex flex-row gap-4 text-white opacity-80'>

            <FaFacebookF></FaFacebookF>
            <BiLogoPinterestAlt></BiLogoPinterestAlt>
            <BsInstagram></BsInstagram>
            <AiOutlineTwitter></AiOutlineTwitter>
            </div>

        </div>
        <div className='flex flex-col text-white'>
            <p className='font-bold text-white text-2xl'>About Us</p>
            <p className='opacity-80 border-b-2 border-slate-600 py-2 w-full'>About Us</p>
            <p className='opacity-80 border-b-2 border-slate-600 py-2 w-full'>Submit Event</p>
            <p className='opacity-80 border-b-2 border-slate-600 py-2 w-full'>All Venues</p>
            <p className='opacity-80  py-2 w-full'>All Locations</p>

        </div>
        <div className='flex flex-col text-white'>
        <p className='font-bold text-white text-2xl'>Contact Us</p>

        </div>
      </div>
    </div>
  )
}

export default Contact
