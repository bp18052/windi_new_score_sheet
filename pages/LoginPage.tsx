import Header from 'components/header';
import type { NextPage } from 'next';
import Image from 'next/image';
import LoginImage from '../public/SignInBackImg.jpg';
import { Auth, Typography, Button } from '@supabase/ui';
import { supabase } from '../utils/supabaseClient';

const loginForm: NextPage = () => {
  return (
    <div>
      <Header />
      <Image
        src={LoginImage}
        alt='archery target sheet'
        layout='fill'
        objectFit='cover'
      />
      <div className='md:flex'>
        <div className=' h-screen  min-h-60px z-2 flex justify-center md:(bg-gray-800 w-50vw)'>
          <div className=' my-25 card backdrop-filter backdrop-blur-4xl w-70vw md:(bg-light-100 shadow-xl w-40vw)'>
            <div className='card-body'>
              <h1 className=' w-70vw text-gray-200 card-title text-3xl md:(w-40vw text-gray-600)'>
                Sign In
              </h1>
              <div>
                <label></label>
                <input></input>
              </div>
            </div>
          </div>
        </div>
        <span className=' md:(bg-transparent  h-screen w-50vw block)' />
      </div>
    </div>
  );
};

export default loginForm;
