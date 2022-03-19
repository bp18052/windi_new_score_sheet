import {VFC} from 'react';
import AppIcon from '../public/AppLogo.svg';
import Link from 'next/link';

const header: VFC = () => {
    return (
        <header>
            <div className=' fixed backdrop-filter backdrop-sepia backdrop-blur-4xl top-0 z-5 w-full flex items-center justify-between flex-wrap p-2 animate-animated animate-fadeIn animate-delay'>
                <a href='/' className=' flex justify-start items-center'>
                    <AppIcon className=' h-10 mx-2'></AppIcon>
                    <h1 className=' milka text-size-3xl text-yellow-300'>Archers</h1>
                </a>
            <nav>
                <Link href='/LoginPage'>
                    <h2 className='itc text-size-xl text-light-50 mr-4 hover:underline'>Sign Up</h2>
                </Link>
            </nav>
            </div>
        </header>
    )
}

export default header;