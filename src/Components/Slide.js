import React, { useState } from 'react';

const Slide = (props) => {
  let datK = props.data;
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className='relative h-[400px] w-[300px]'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img src={datK.image} className='w-full h-full opacity-90' />
      <div className='bg-black bg-opacity-20 absolute w-full bottom-0 p-2 bg-gradient'>
        <div className='z-20 font-bold text-white text-xl'>{datK.place}</div>
        <p
          className={`z-20 text-white text-lg ${
            isShown ? 'opacity-100' : 'hidden opacity-0'
          } transition-all duration-1000`}
        >
          {datK.eventNumber} Events
        </p>
      </div>
    </div>
  );
};

export default Slide;
