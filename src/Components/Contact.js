import React from 'react'
import {BiLogoPinterestAlt} from "react-icons/bi";
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram,BsPhone} from 'react-icons/bs'
import {AiOutlineTwitter,AiOutlineMail,AiOutlineCopyrightCircle} from 'react-icons/ai'
import {MdOutlineLocationOn} from "react-icons/md"
const Contact = () => {
  return (
    <div>
      <div className='flex flex-row bg-[#343353] w-full gap-8 justify-around px-24 py-20'>
        <div className='flex flex-col w-[20%] gap-6'>
            <img src='https://ovatheme.com/meup/wp-content/uploads/2019/06/Asset-9.svg' className='w-[130px]'></img>
            <p className='text-white opacity-80 text-lg'>Lorem ipsum dolor sit amet, conse ctetuers adipiscing eli sed diam nonum nibhie…</p>
            <div className='flex flex-row gap-4 text-white opacity-80 text-xl'>

            <FaFacebookF></FaFacebookF>
            <BiLogoPinterestAlt></BiLogoPinterestAlt>
            <BsInstagram></BsInstagram>
            <AiOutlineTwitter></AiOutlineTwitter>
            </div>

        </div>
        <div className='flex flex-col text-white w-[20%] gap-4'>
            <p className='font-bold text-white text-2xl'>About Us</p>
            <p className='opacity-80 border-b-2 border-slate-600 py-2 w-full hover:opacity-100 hover:cursor-pointer'>About Us</p>
            <p className='opacity-80 border-b-2 border-slate-600 py-2 w-full hover:opacity-100 hover:cursor-pointer'>Submit Event</p>
            <p className='opacity-80 border-b-2 border-slate-600 py-2 w-full hover:opacity-100 hover:cursor-pointer'>All Venues</p>
            <p className='opacity-80  py-2 w-full hover:opacity-100 hover:cursor-pointer'>All Locations</p>

        </div>
        <div className='flex flex-col text-white w-[20%] gap-4 '>
              <p className='font-bold text-white text-2xl'>Contact Us</p>
              <p className='flex flex-row gap-2 items-center text-lg opacity-80 border-b-2 border-slate-600 py-2 w-full hover:opacity-100 hover:cursor-pointer'>
              <MdOutlineLocationOn className='text-2xl'></MdOutlineLocationOn> San Francisco City Hall, San Francisco, CA</p>
              <p className='flex flex-row gap-2 items-center text-lg opacity-80 border-b-2 border-slate-600 py-2 w-full hover:opacity-100 hover:cursor-pointer'><AiOutlineMail className='text-xl'></AiOutlineMail>
              contact@domain.com</p>
              <p className='flex flex-row gap-2 items-center text-lg opacity-80 border-b-2 border-slate-600 py-2 w-full hover:opacity-100 hover:cursor-pointer'><BsPhone className='text-xl'></BsPhone>
              (+011) 01234567</p>

        </div>
        <div className='flex flex-col text-white w-[20%] gap-4'>
        <p className='font-bold text-white text-2xl'>Contact Us</p>
        <img src='https://ovatheme.com/meup/wp-content/uploads/elementor/thumbs/apple-store-1-pdwp7sae9bvt9hlz5zn345sljk965blfdlfkbaklj4.png' className='w-[150px]'></img>
        <img src='https://ovatheme.com/meup/wp-content/uploads/elementor/thumbs/google_play-1-pdwp7v3wttzo8bhvpiuytn2zbpv9sewmdze0r4gf0g.png' className='w-[150px]'></img>


        </div>
      </div>
      <div className='bg-[#22213f] text-white flex flex-row justify-around items-center p-10 text-lg '>
        <p className='flex flex-row items-center gap-2 opacity-80'><AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>2023 ovatheme. All Rights Reserved.</p>
        <p className='opacity-80'>Terms of use
          |
        Privacy policy</p>
      </div>
    </div>
  )
}

export default Contact
