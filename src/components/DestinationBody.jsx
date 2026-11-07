import Header from './Header';
import Stars from './Stars';
import bgDesktop from '../assets/destination/background-destination-desktop.jpg'
import bgTablet from '../assets/destination/background-destination-tablet.jpg'
import bgMobile from '../assets/destination/background-destination-mobile.jpg'
import { motion } from 'motion/react';
import LinkStyleHeader from './LinkStyleHeader';
import {  NavLink, useNavigate   } from "react-router-dom";
import PlanetImg from './PlanetImg';
import { useSwipeable } from 'react-swipeable';

function Destination({ planet, description, distance, travel, nextPage, previosPage }) {
    
    const navigate = useNavigate()

    const swipeHandler = useSwipeable({
            onSwipedLeft: () => {
                if (nextPage) navigate(nextPage );
            },
            onSwipedRight: () => {
                if (previosPage) navigate(previosPage);

            },
            trackMouse: true 
        });

    return (
        <>
        <div className="relative isolate min-h-dvh flex flex-col">

            <picture className='select-none'>
                <source media="(min-width: 1024px)" srcSet={bgDesktop} draggable={false}/>
                <source media="(min-width: 768px)" srcSet={bgTablet} draggable={false} />
                <img
                    src={bgMobile}
                    alt="Space with stars"
                    className="fixed inset-0 -z-10 w-full h-full object-cover"
                    draggable={false}
                />
            </picture>
            <Stars starsNum={350}/>
            <Header />

            <div className='w-full max-w-275 mx-auto px-6 mt-6 flex justify-center lg:justify-start md:mt-10'>    
                <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut"
                    }}
                    className="font-barlow-condensed text-[14px] sm:text-[16px] tracking-[15%] text-white md:text-[20px] lg:text-[28px]"
                >
                    <span className="mr-4 font-bold opacity-25">01</span>
                    PICK YOUR DESTINATION
                </motion.p>
            </div>

            <main className="flex-1 flex justify-center px-6 py-8" {...swipeHandler}>
                <div className='w-full max-w-275 mx-auto flex flex-col items-center gap-12
                                lg:flex-row lg:items-start lg:justify-between lg:gap-24'>

                    <div className="flex flex-col items-center lg:items-start">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.65,
                                y: 40
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <motion.div
                                animate={{
                                    y: [10, -10],
                                    rotate: [0, 3, 0],
                                    x: [5, -5]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 4,
                                    ease: "easeInOut"
                                }}
                            >
                                <img
                                    src={PlanetImg(planet)}
                                    alt={planet}
                                    className="w-40 md:w-75 lg:w-100 select-none lg:mt-10 lg:ml-30"
                                    draggable={false}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center max-w-110 lg:items-start">
                        <motion.nav
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2
                            }}
                            className="font-barlow-condensed flex gap-6 text-[14px] tracking-[15%] text-[#D0D6F9] md:text-base select-none"
                        >         
                            <NavLink
                                to="/destination/moon"
                                className={({ isActive }) =>
                                    isActive ? "h-full flex items-center border-b-[3px] border-white" : "" 
                                }
                            >
                                <LinkStyleHeader name={`moon`}/>
                            </NavLink>

                            <NavLink
                                to="/destination/mars"
                                className={({ isActive }) =>
                                    isActive ? "h-full flex items-center border-b-[3px] border-white" : "" 
                                }
                            >
                                <LinkStyleHeader name={`mars`}/>
                            </NavLink>

                            <NavLink
                                to="/destination/europa"
                                className={({ isActive }) =>
                                    isActive ? "h-full flex items-center border-b-[3px] border-white" : "" 
                                }
                            >
                                <LinkStyleHeader name={`europa`}/>
                            </NavLink>

                            <NavLink
                                to="/destination/titan"
                                className={({ isActive }) =>
                                    isActive ? "h-full flex items-center border-b-[3px] border-white" : "" 
                                }
                            >
                                <LinkStyleHeader name={`titan`}/>
                            </NavLink>
                        </motion.nav>

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.3
                            }}
                            className="mt-4 font-Bellefair text-[56px] uppercase text-white md:text-[80px] lg:text-[100px]"
                        >
                            {planet}
                        </motion.h1>

                        <motion.p
                            key={description}
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.4
                            }}
                            className="font-barlow text-[15px] leading-[180%] text-[#D0D6F9] md:text-base lg:text-[18px]"
                        >
                            {description}
                        </motion.p>

                        <hr className="my-6 w-full border-t border-white/25" />
                            <motion.div
                                key={planet}
                                initial={{
                                    opacity: 0,
                                    y: 25
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.55
                                }}
                                className="flex flex-col gap-8 md:flex-row md:gap-16"
                            >
                                <div>
                                    <p className="font-barlow-condensed text-[14px] tracking-[2px] text-[#D0D6F9]">
                                        AVG. DISTANCE
                                    </p>
                                    <p className="mt-2 font-Bellefair text-[28px] uppercase text-white">
                                        {distance}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-barlow-condensed text-[14px] tracking-[2px] text-[#D0D6F9]">
                                        EST. TRAVEL TIME
                                    </p>
                                    <p className="mt-2 font-Bellefair text-[28px] uppercase text-white">
                                        {travel}
                                    </p>
                                </div>
                            </motion.div>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
    
} 

export default Destination
