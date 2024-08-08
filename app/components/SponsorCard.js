// components/SponsorSection.js

import React from 'react';

const SponsorSection = () => {
  return (
    <div className="bg-white p-8">
      {/* <h1 className="text-2xl font-bold mb-2">THIS IS EVENT SPONSORS</h1> */}
      <p className="text-gray-600 mb-4 ">This is the description of the sponsors section.</p>
      <img
        src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=3840&q=75"
        alt="Main Sponsor"
        className="w-40 h-30 object-cover rounded-lg mb-4 border border-gray-300 "
      />
      <h2 className="text-xl font-bold mb-2">SPONSOR CATEGORY</h2>
      <div className="flex items-center mb-4">
        <div className="w-1/2  p-4 rounded-lg">
          {/* <h3 className="text-lg font-semibold mb-2">Dark Knight</h3> */}
          <img
            src="/path/to/sponsor/image.png"
            alt="Dark Knight"
            className="w-48 h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
