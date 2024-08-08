'use client'
import { FaVideo, FaCreditCard, FaExternalLinkAlt , FaFacebook, FaTwitter, FaLinkedin, FaGlobe} from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

import Image from 'next/image'



const SideBar = ({data}) => {
  console.log(data)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const targetDate = new Date('2024-12-31T23:59:59'); // Set your target date here
    const now = new Date();
    const difference = targetDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
<>

<div className='border-2 rounded-lg p-4 w-70 mb-2'>
      <h1 className='text-2xl font-bold mb-4'>{data.event_url}</h1>
      <div className='flex justify-around mb-4'>
        <div className='flex items-center'>
          <FaVideo size={20} className='mr-2' />
          {data.is_virtual ?<h4 className='font-thin  text-gray-900 '>Online</h4>:
          <h4 className='font-thin  text-gray-900 '>Offline</h4>}
        </div>
        <div className='flex items-center'>
          <FaCreditCard size={20} className='mr-2' />
          {data.is_free ?<h4 className='font-thin  text-gray-900 '>Free</h4>:
          <h4 className='font-thin  text-gray-900 '>Paid</h4>}
        </div>
      </div>
      <div className='mb-4'>
        <h2 className='font-medium'>Event Live Link: <a href={data.event_live_link} className='text-blue-500'>Open streaming website</a></h2>
      </div>
      <div className='mb-4'>
        <h2 className='font-mono text-gray-700 text-sm '>Date: Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</h2>
      </div>
      <div>
        <h2 className='font-medium text-lg  mb-2'>EVENT STARTS IN</h2>
        <h1 className='text-2xl font-bold'>{timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds</h1>
      </div>
      </div>
      <div className='mb-4'>
        <button className='w-full bg-black text-white py-2 rounded mb-2'>Buy Now</button>
        <button className='w-full border-2 border-black text-black py-2 rounded flex items-center justify-center'>
          Official Website <FaExternalLinkAlt className='ml-2' />
        </button>
      </div>
      <div>
        <h2 className='text-xl font-bold mb-2'>HOSTED BY</h2>
        <div className='border-2 rounded-lg p-4 flex items-start'>
          <img src={data.organiser_image_url} alt="Host Avatar" width={40} height={40} className='rounded-full mr-4'/>
          <div>
            <h3 className='font-bold'>{data.organiser_name}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.organiser_info }} />
            {/* <p>{data.organiser_info}</p> */}
            <h3 className='font-semibold mt-2 text-black'>Contact Us On</h3>
            <div className="flex space-x-5 text-black mt-4 ">
          <FaFacebook className=" cursor-pointer hover:text-gray-800" />
          <FaTwitter className="cursor-pointer hover:text-gray-800" />
          <FaLinkedin className="cursor-pointer hover:text-gray-800" />
          <FaGlobe className="cursor-pointer hover:text-gray-800" />
        </div>
          </div>
        </div>
      </div>

</>    
  )
}

export default SideBar