import Header from 'components/header'
import type { NextPage } from 'next'
import Image from 'next/image';
import LoginImage from '../public/LoginImage.jpg'
import { Auth, Typography, Button } from '@supabase/ui'
import supabase from '../utils/supabaseClient'

const loginForm :NextPage = () =>{
    return(
        <div className=' bg-gray-800'>
            <Header />
            <div className=' bg-gray-300 w-5/6'>
                <div className='card w-96 bg-gray-600 shadow-xl'>
                    <div className='card-body text-center'>
                        <h1>Sign In</h1>
                    </div>
                </div>
            </div>
            <div className=' w-1/2'>
                <Image src={LoginImage} alt="archery target sheet" layout="fill" objectFit="contain"/>
            </div>
        </div>
    )
}

export default loginForm;