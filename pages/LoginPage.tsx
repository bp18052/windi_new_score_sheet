import Header from 'components/header'
import type { NextPage } from 'next'
import Image from 'next/image';
import LoginImage from '../public/LoginImage.jpg'
import { Auth, Typography, Button } from '@supabase/ui'
import supabase from '../utils/supabaseClient'

const loginForm :NextPage = () =>{
    return(
        <div>
            <Header />
            <div className=' flex bg-gray-800 content-center justify-center'>
                <div style={{width:'50vh', height:'100vh'}}>
                    <div className='card w-96 bg-gray-300 shadow-xl'>
                        <div className='card-body text-center'>
                            <h1>Sign In</h1>
                        </div>
                    </div>
                </div>
                <div style={{width: '50vh',height: '100vh'}}>
                    <Image src={LoginImage} alt="archery target sheet" layout="fill" objectFit='contain' objectPosition={'right center'}/>
                </div>
            </div>
        </div>
    )
}

export default loginForm;