import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
// import pic from '../../assets/logo.png';
const Navbar = () => {
  return (
    <nav className="bg-white p-2">
    <div className="container mx-auto flex justify-between items-center">
      
      <div className="text-white  text-xl font-bold">
        <img src='images/logo.png' alt='logo' className="object-contain h-12 w-30 rounded-lg"/>
      </div>
      
    
      <div className="text-grey">
        <FaUser size={18} />
      </div>
    </div>
  </nav>
  
  );
}

export default Navbar;
