import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { Contact } from 'lucide-react';

const Navbar = () => {
  const LinksData = [
    {
      title: 'Login',
      link: '/login'
    },
    {
      title: 'Register',
      link: '/register'
    },
    {
      title: 'Events',
      link: '/event'
    },
  ];

  return (
    <nav className='w-full h-16 flex items-center bg-gradient-to-r from-indigo-800 via-blue-500 to-teal-400 text-white shadow-lg'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <div className='flex items-center space-x-4'>
          <NavLink to="/" className="text-2xl font-extrabold hover:text-white transition-colors duration-300">
            BLOOM
          </NavLink>
        </div>
        <div className='flex items-center space-x-6'>
          {LinksData.map((data, index) => (
            <NavLink key={index} to={data.link} className="hover:text-indigo-300 transition-colors duration-300">
              {data.title}
            </NavLink>
          ))}
          <NavLink to="/contact" className="flex items-center space-x-2 hover:text-indigo-300 transition-colors duration-300">
            <Contact className="h-6 w-6" />
            <span>Contact</span>
          </NavLink>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
