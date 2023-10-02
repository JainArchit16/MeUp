import React from 'react'
import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import {GrDocumentText} from 'react-icons/gr'
import {FaLocationDot} from 'react-icons/fa6'


const Home = () => {

  const [selectedOption, setSelectedOption] = useState("");

  
    const  handleDropdownChange = (event) => {
      setSelectedOption(event.target.value);
  }

  return (



    <div className='w-[100vw] h-[100vh] bgimage bg-center bg-no-repeat p-12 text-center top-[-75px] relative -z-10 flex flex-col justify-center module'>
        <div className='font-bold text-7xl text-white'>
          Connecting the world
        </div>
        <div className='text-white text-2xl m-6'>
        Easy to search, you just enter the keyword
        </div>
        <div className='w-[100vw] flex flex-row justify-center mt-6'>

          <form className='flex flex-row flex-wrap justify-center items-center z-10 w-[80%]'>
          <AiOutlineSearch className='relative left-8 text-2xl text-red-500'></AiOutlineSearch>
            <input type='text' placeholder={`Enter Name...`} className='w-[20%] h-[50px] pl-10'></input>
            <GrDocumentText className='relative left-2 text-2xl z-20 text-red-400'></GrDocumentText>
            <select  value={selectedOption} onChange={handleDropdownChange} className='w-[20%] h-[50px] pl-10 -left-6 relative z-10'>
                <option  value="Education">Education</option>
                <option  value="Concert">Concert</option>
                <option  value="Conference">Conference</option>
			      </select>
            <FaLocationDot className='relative -left-3 text-2xl z-20 text-red-500'></FaLocationDot>
            <select  value={selectedOption} onChange={handleDropdownChange} className='w-[20%] h-[50px] pl-10 -left-12 relative z-10'>
                <option  value="Today">Today</option>
                <option  value="Tomorrow">Tomorrow</option>
                <option  value="This Week">This week</option>
			      </select>
          </form>
          <button className='cursor-pointer p-4 font-bold text-white bg-red-500 w-[15%] -left-64 relative'>Search</button>

          
        </div>

    
    
</div>




    
  )
}

export default Home;