// import React,{useEffect} from 'react'

// const SubNavBar = () => {

//   return (
//     <div className="bg-white py-4 mt-4 border-b-2">
//       <div className="container mx-auto flex justify-between items-center">
//         <ul className="flex gap-6">
//           <li>
//             <a href="#about" className="p-2 text-gray-800 hover:bg-gray-300">About</a>
//           </li>
//           <li>
//             <a href="#tickets" className="p-2 text-gray-800 hover:bg-gray-300">Tickets</a>
//           </li>
//           <li>
//             <a href="#speakers" className="p-2 text-gray-800 hover:bg-gray-300">This is speakers section</a>
//           </li>
//           <li>
//             <a href="#workshops" className="p-2 text-gray-800 hover:bg-gray-300">This is workshop section</a>
//           </li>
//           <li>
//             <a href="#sponsors" className="p-2 text-gray-800 hover:bg-gray-300">This is event sponsors</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SubNavBar

import React, { useState, useRef } from "react";
import TicketList from "./TicketCard";
import SpeakerList from "./SpeakerCard";
import EventList from "./EventCard";
import SponsorSection from "./SponsorCard";


const SubNavBar = ({ data }) => {
  const [activeTab, setActiveTab] = useState("About");

  const aboutRef = useRef(null);
  const ticketsRef = useRef(null);
  const speakersRef = useRef(null);
  const workshopRef = useRef(null);
  const sponsorsRef = useRef(null);

  const tabs = [
    { name: "About", ref: aboutRef },
    { name: "Tickets", ref: ticketsRef },
    { name: "This is speakers section", ref: speakersRef },
    { name: "This is workshop section", ref: workshopRef },
    { name: "This is event sponsors", ref: sponsorsRef },
  ];

  const handleClick = (tab) => {
    setActiveTab(tab.name);
    tab.ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="bg-white py-1 mt-4 border-b-2  ">
        <div className="container mx-auto flex justify-between items-center"  >
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`p-2 text-gray-800 hover:bg-gray-200 ${
                activeTab === tab.name ? "text-black font-semibold" : ""
              }`}
              onClick={() => handleClick(tab)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="relative mt-2">
       
         
        </div>
      </div>

      <div ref={aboutRef} className=" p-4">
        <div className="bg-white py-8">
          <div className="container mx-auto">
            <h3 className="text-2xl font-medium  text-left mb-4">ABOUT EVENT</h3>
            {/* <p className="text-lg text-gray-700 text-left mb-16">
          {return({data.description})}
        </p>
        <div className="p-4">
          <YouTubePreview videoId="dQw4w9WgXcQ" />
        </div> */}

            <About data={data} />
          
          </div>
        </div>
      </div>
      <div ref={ticketsRef} className="p-4">
        <h3 className="text-2xl font-medium  text-left mb-4">TICKETS</h3>
        <TicketList />
      </div>
      <div ref={speakersRef} className="p-4">
        <h3 className="text-2xl font-medium text-left mb-4">
          THIS IS SPEAKERS SECTION
        </h3>
        <SpeakerList />
      </div>
      <div ref={workshopRef} className="p-4">
        <h3 className="text-2xl font-medium text-left mb-8">
          THIS IS WORKSHOP SECTION
        </h3>

        <EventList />
      </div>
      <div ref={sponsorsRef} className="p-4">
        <h3 className="text-2xl font-medium text-left mb-4">
          THIS IS EVENT SPONSORS
        </h3>
        <SponsorSection />
      </div>
    </div>
  );
};

const About = ({ data }) => {
  return (
    <>
      <div>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </>
  );
};

export default SubNavBar;
