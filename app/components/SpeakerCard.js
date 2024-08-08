// components/SpeakerCard.js

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from 'react-icons/fa';

const SpeakerCard = ({ image, name, position, company, location }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6 flex items-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-md mr-4" />
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-1">{name}</h2>
        <p className="text-gray-700">{position}</p>
        <p className="text-gray-500 mb-2">{company}</p>
        <div className="flex space-x-4 text-gray-600 mt-2">
          <FaFacebook className="cursor-pointer hover:text-gray-800" />
          <FaTwitter className="cursor-pointer hover:text-gray-800" />
          <FaLinkedin className="cursor-pointer hover:text-gray-800" />
          <FaGlobe className="cursor-pointer hover:text-gray-800" />
        </div>
      </div>
    </div>
  );
};

const SpeakerList = () => {
  return (
    <div className="bg-white p-3">
      <p className="text-gray-700 mb-5">This is the description for speakers section.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SpeakerCard
          image="https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"
          name="Bruce Wayne"
          position="Chairman"
          company="Wayne Enterprises"
          location="Gotham"
        />
        <SpeakerCard
          image="https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg"
          name="Dark Knight"
          position="Batman"
          company="Gotham"
          location="Gotham"
        />
      </div>
    </div>
  );
};

export default SpeakerList;
