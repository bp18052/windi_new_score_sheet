import Footer from 'components/footer'
import SignButton from 'components/SignInButton'
import type { NextPage } from 'next'
import Image from 'next/image'
import homeImage from '../public/HomeImage.jpg'
const Home: NextPage = () => {
  return (
    <div className=' bg-gray-600'>
      <div className='block'>
        <Image src={homeImage} alt="Picture of the author" className='relative z-0'/>
        <figcaption>
          <h1 className='itc animate-animated animate-fadeInUpBig z-1 mt-2'>Let&apos;s record <br />your score</h1>
        </figcaption>
      </div>
      <span className=' bg-transparent block h-32'></span>
    </div>
  )
}

export default Home
