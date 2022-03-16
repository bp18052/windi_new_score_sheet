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
            <div className='flex'>
                <div className=' z-2 bg-gray-800 h-screen w-50vw flex content-center justify-center'>
                    <div className='card w-96 bg-gray-300 shadow-xl'>
                        <div className='card-body text-center'>
                            <h1>Sign In</h1>
                        </div>
                    </div>
                </div>
                <span className=' bg-transparent  h-screen w-50vw block'/>
            </div>
        </div>
    )
}

export default loginForm;