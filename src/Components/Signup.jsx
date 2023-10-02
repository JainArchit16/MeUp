import React from 'react'
import signupImg from "../assets/signup.png";
import Template from './Template';


function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Join the million Events for free"
      desc1="Create Events for today, tomorrow, and beyond."
      
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup