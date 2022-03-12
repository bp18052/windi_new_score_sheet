import Header from 'components/header'
import type { NextPage } from 'next'
import Image from 'next/image';
import LoginImage from '../public/LoginImage.jpg'
import { Auth, Typography, Button } from '@supabase/ui'

const loginForm :NextPage = () =>{
    return(
        <div className=' bg-gray-800'>
            <Header />
            <div className=' inline-block '>

            </div>
            <Image src={LoginImage} alt="archery target sheet" className=' inline-block'/>
        </div>
    )
}