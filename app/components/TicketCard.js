import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Dropdown from './DropDown';


const  TicketCard = ({ title, description, venue, additionalDetails, availableTill, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="flex items-center text-blue-500 mb-2">
        <FaMapMarkerAlt className="mr-2" />
        <a href="#" className="underline">{venue}</a>
      </div>
      <p className="text-gray-500 mb-2">{additionalDetails}</p>
      <p className="bg-gray-100 text-gray-700 py-1 px-2 inline-block rounded mb-4">{availableTill}</p>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">{price}</p>
        <button className="bg-black text-white py-2 px-6 rounded">Register</button>
      </div>
    </div>
  );
};

const TicketList = () => {
  return (
    <div className="bg-gray-100 p-8">
      <TicketCard
        title="Free Ticket"
        description="This is a ticket description. This is a free ticket. This ticket is uncategorised."
        venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
        additionalDetails="This is additional venue details."
        availableTill="Available Till: 31st Aug 2034, 06:00 PM IST"
        price="FREE"
      />
      <TicketCard
        title="Paid Ticket"
        description="This is a ticket description. This is a paid ticket. This ticket is uncategorised."
        venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
        additionalDetails="This is additional venue details."
        availableTill="Available Till: 31st Aug 2034, 06:00 PM IST"
        price="₹1,000"
      />
      <Dropdown />
      <Dropdown />
    </div>
  );
};

export default TicketList;