import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import {MdKeyboardArrowDown} from "react-icons/md"
import {AiOutlineUser,AiOutlinePlus} from "react-icons/ai"



const Navbar = (props) => {
  const logo=`https://ovatheme.com/meup/wp-content/uploads/2019/06/Asset-9.svg`;
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  function handleClick()
  {
    toast.error("Login Required")
  }

  return (
    <>
    <div className="flex justify-between items-center w-[95vw] py-4 mx-auto">
      <Link to="/">
        <img src={logo} height={16} width={110} loading="lazy" />
      </Link>

      <div className="flex flex-row gap-6 items-center">

      <ul className="flex gap-x-6 text-white ">
          <li>
            <Link to="/" className="flex flex-row items-center text-red-500">Home<MdKeyboardArrowDown></MdKeyboardArrowDown></Link>
          </li>
          <li>
            <Link to="/" className="flex flex-row items-center hover:text-red-500">Listing<MdKeyboardArrowDown></MdKeyboardArrowDown></Link>
          </li>
          <li>
            <Link to="/" className="flex flex-row items-center hover:text-red-500">Page<MdKeyboardArrowDown></MdKeyboardArrowDown></Link>
          </li>
          <li>
            <Link to="/" className="flex flex-row items-center hover:text-red-500">Blog<MdKeyboardArrowDown></MdKeyboardArrowDown></Link>
          </li>
        </ul>

      {/* Button - Login = Signup = Logout = Dashboard  */}

      <div className="flex items-center gap-x-4 text-white ">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="py-[8px] px-[12px] flex flex-row items-center border-r-2 hover:text-red-500">
            <AiOutlineUser></AiOutlineUser>
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className=" py-[8px] px-[5px] hover:text-red-500">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logout Sucessfully");
              }}
              className=" py-[8px] px-[12px] rounded-[8px]"
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className=" py-[8px] px-[12px] rounded-[8px]">
              Dashboard
            </button>
          </Link>
        )}
        
        {
          isLoggedIn?(<Link to="/Insert">
            <button className="py-[8px] px-[12px] flex flex-row items-center text-white bg-red-500 rounded-lg">
            <AiOutlinePlus className="mr-2"></AiOutlinePlus>
              Create Event
            </button>
          </Link>):(<Link to="/Login">
            <button className="py-[8px] px-[12px] flex flex-row items-center text-white bg-red-500 rounded-lg" onClick={handleClick}>
            <AiOutlinePlus className="mr-2"></AiOutlinePlus>
              Create Event
            </button>
          </Link>)
        }
        
      </div>

      </div>
        
    </div>
    </>
  );
};

export default Navbar;
