import Header from 'components/header'
import type { NextPage } from 'next'
import Image from 'next/image';
import LoginImage from '../public/SignInBackImg.jpg'
import { Auth, Typography, Button } from '@supabase/ui'
import supabase from '../utils/supabaseClient'

const loginForm :NextPage = () =>{
    return(
        <div>
            <Header />
            <Image src={LoginImage} alt="archery target sheet" layout="fill" objectFit='cover'/>
            <div className='md:flex'>
                <div className=' h-screen z-2 md:(bg-gray-800 w-50vw) flex justify-center'>
                    <div className=' my-25 card w-96 bg-gray-300 shadow-xl all:(backdrop-filter backdrop-grayscale-80 backdrop-brightness-100)'>
                        <div className='card-body text-center'>
                            <h1>Sign In</h1>
                        </div>
                    </div>
                </div>
                <span className=' md:(bg-transparent  h-screen w-50vw block)'/>
            </div>
        </div>
    )
}

export default loginForm;