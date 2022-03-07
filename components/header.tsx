import {VFC} from 'react'
import AppIcon from '../public/AppLogo.svg'

const header: VFC = () => {
    return (
        <header>
            <div className=' fixed backdrop-filter backdrop-sepia top-0 z-2 w-full flex items-center justify-between flex-wrap p-2 animate-animated animate-fadeIn animate-delay'>
                <a href='/' className=' flex justify-start items-center'>
                    <AppIcon className=' h-10 mx-2'></AppIcon>
                    <h1 className=' milka text-size-3xl text-yellow-300'>Archers</h1>
                </a>
            <nav>

            </nav>
            </div>
        </header>
    )
}

export default header;