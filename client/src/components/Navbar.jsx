import React from 'react';
import { assets } from '../assets/assets';
import arrow from '../assets/arrow.svg';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { navigate, token, logout } = useAppContext();

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20'>
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt='logo'
        className='w-32 sm:w-44 cursor-pointer'
      />

     
          <button
            onClick={() => navigate('/admin')}
            className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-indigo-700 hover:bg-blue-900 text-white px-6 py-2.5'
          >
           {token ? 'Dashboard' : 'Login'}
            <img src={assets.arrow} className='w-3' alt='arrow' />
          </button>

          
      
    </div>
  );
};

export default Navbar;
