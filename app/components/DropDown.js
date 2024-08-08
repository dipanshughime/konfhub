import React, { useState } from 'react';
import TicketList from './TicketCard';
import TicketCard from './TicketCard';


const TicketDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto mt-4">
      <div
        className="cursor-pointer  bg-white p-4 rounded-md shadow-md flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <h2 className="text-lg font-bold">This is a category</h2>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
      
          <p className="text-gray-600">
            This is category description. This category is collapsed by default.
          </p>

          {/* Free Ticket Card */}
          <div className="bg-white p-4 rounded-md border border-gray-200 shadow-md">
            <h3 className="text-lg font-bold">Free Ticket in Category1</h3>
            <p className="text-gray-700">This is a ticket description. This is a free ticket. This ticket is categorized.</p>
            <p className="text-gray-500 text-sm">This is additional venue details.</p>
            <p className="text-gray-600 text-sm mt-2">Available Till: 31st Aug 2034, 06:00 PM IST</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold">FREE</p>
              <button className="bg-black text-white py-2 px-4 rounded-lg">Register</button>
            </div>
          </div>

          {/* Paid Ticket Card */}
          <div className="bg-white p-4 rounded-md border border-gray-200 shadow-md">
            <h3 className="text-lg font-bold">Paid Ticket in Category1</h3>
            <p className="text-gray-700">This is a ticket description. This is a paid ticket. This ticket is categorized.</p>
            <p className="text-blue-600 text-sm">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                KonfHub Technologies, Nagaravaraplay, C V Raman Nagar, Bengaluru, Karnataka, India
              </a>
            </p>
            <p className="text-gray-500 text-sm">This is additional venue details.</p>
            <p className="text-gray-600 text-sm mt-2">Available Till: 31st Aug 2034, 06:00 PM IST</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold">₹1,000</p>
              <button className="bg-black text-white py-2 px-4 rounded-lg">Register</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketDropdown;
