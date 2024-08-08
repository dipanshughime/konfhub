// components/EventCard.js

import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const EventCard = ({ image, title, date, speakers, link }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-2  w-70">
    <img src={image} alt={title} className="w-full h-30 object-cover rounded-t-lg  mb-2" />
    <p className="text-lg">{title}</p>
    
    <div className="flex items-center text-gray-500 font-mono text-sm mb-4">
      <FaCalendarAlt className="mr-2" />
      <p>{date}</p>
    </div>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        {speakers.map((speaker, index) => (
          <img key={index} src={speaker} alt="Speaker" className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0" />
        ))}
      </div>
      <a href={link} className="bg-black text-white py-2 px-4 rounded-lg text-center">View Details</a>
    </div>
  </div>
  );
};

const EventList = () => {
  return (
    <div className="bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EventCard
          image="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=3840&q=75"
          title="How to make more money"
          date="Jun 11th, 2024 at 10:00 AM (IST)"
          speakers={["https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"]}
          link="#"
        />
        <EventCard
          image="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=3840&q=75"
          title="How to fight crime"
          date="Jun 1st, 2034 at 10:00 AM (IST)"
          speakers={["https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg"]}
          link="#"
        />
        <EventCard
          image="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=3840&q=75"
          title="This is a workshop connected to a ticket"
          date="Jun 1st, 2034 at 10:00 AM (IST)"
          speakers={["https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg", "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg"]}
          link="#"
        />
      </div>
    </div>
  );
};

export default EventList;
