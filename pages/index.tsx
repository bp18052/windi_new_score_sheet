import Footer from 'components/footer';
import Header from 'components/header';
import type { NextPage } from 'next';
import Image from 'next/image';
import homeImage from '../public/archerHeader.jpg';

const Home: NextPage = () => {
  return (
    <div className=' bg-gray-800'>
      <Header />
      <div className='block'>
        <Image
          src={homeImage}
          alt='Picture of the author'
          className='relative z-0'
        />
        <figcaption>
          <h1
            className='
            itc 
            animate-animated 
            animate-fadeInDownBig 
            animate-delay 
            z-1 
            absolute 
            left-10 
          text-light-400 
            lg:(text-8xl top-3/5) 
            hover:underline
            font-medium'
          >
            Let&apos;s record <br />
            your score
          </h1>
        </figcaption>
      </div>
      <span className=' bg-transparent block h-32'></span>
    </div>
  );
};

export default Home;
