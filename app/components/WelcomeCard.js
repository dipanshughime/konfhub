import React from 'react'

const WelcomeCard = ({welcomeimg}) => {
  return (
    <>
        <div className = "container mx-auto bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] rounded-[30px] p-3">
            <img src = {welcomeimg} alt = 'welcome image' className = 'rounded-[30px] size-full '/>
        </div>
        
    </>
    
  )
}

export default WelcomeCard