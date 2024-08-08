'use client'

import Image from "next/image";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import WelcomeCard from "./components/WelcomeCard";
import SubNavBar from "./components/SubNavBar";
import { useEffect ,useState} from "react";
import axios from 'axios';


export default function Home() {
  const [data, setData] = useState(null);
  

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  },[])

  return (
    <>
    <div className="mb-1">

      <NavBar />
    </div>

    {
      loading == false ? 

      <div className="flex">
      <div className="w-8/12  mx-7 px-2 ">
          <WelcomeCard welcomeimg = {data.event_poster_url}/>
          
          <SubNavBar data = {data}/>
        
        </div>
        <div className="w-3/12 p-2">
          <SideBar data = {data}/>
        </div>
    </div>
    : 
    <div className="flex items-center justify-center h-screen">
    <img 
      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTRua3R6YmJjdnFiamVwZHI4amZvZmdlejZzajFhZTlmNmNrMHRqNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/feN0YJbVs0fwA/giphy.webp" 
      alt="Centered"
      className="max-w-full h-auto" 
    />
  </div>
    }
      

      {/* <section id="about">
<h1>
  kbhsakfjafjkaf afnasdksaf has
</h1>
</section>
<section id="tickets">
<h1>
  kbhsakfjafjkaf afnasdksaf has
</h1>
</section>
<section id="speakers">
<h1>
  kbhsakfjafjkaf afnasdksaf has
</h1>
</section>
<section id="workshops">
<h1>
  kbhsakfjafjkaf afnasdksaf has
</h1>
</section>
<section id="sponsors">
<h1>
  kbhsakfjafjkaf afnasdksaf has
</h1>
</section> */}


{/* 
      <div id = 'about'>
       About
      </div>
      
      <div id = 'Tickets'>
        Tickets
      </div>
      <div id = 'This is speakers section'>
        This is speakers section
      </div>
      <div id = 'This is workshop section'>
        This is workshop section
      </div>
      <div id = 'Thisiseventsponsors'>
        This is event sponsors
      </div>
       */}

      {/* <div className="columns-2">
        <div className="">
          <WelcomeCard />
        </div>
        <div>
          <SideBar />
        </div>
      </div> */}
    </>
  );
}
