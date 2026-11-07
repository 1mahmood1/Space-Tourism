import '@fontsource/barlow';
import Header from '../components/Header';
import Stars from '../components/Stars';
import bgMobile from '../assets/home/background-home-mobile.jpg';
import bgTablet from '../assets/home/background-home-tablet.jpg';
import bgDesktop from '../assets/home/background-home-desktop.jpg';

function Home() {
  return (
    <>
      <picture className='object-cover absolute inset-0 w-full h-full -z-10 select-none'>
        <source media="(min-width: 1024px)" srcSet={bgDesktop} draggable={false}/>
        <source media="(min-width: 768px)" srcSet={bgTablet} draggable={false}/>
        <img
          className='fixed inset-0 -z-10 w-full h-full object-cover'
          src={bgMobile}
          alt="Earth from space"
          draggable={false}
        />
      </picture>

      <Stars starsNum={250}/>
      <Header />
      <Body />
    </>
  )
}

export default Home
