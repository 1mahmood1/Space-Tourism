import Header from './Header';
import Stars from './Stars';
import bgDesktop from '../assets/technology/background-technology-desktop.jpg'
import bgTablet from '../assets/technology/background-technology-tablet.jpg'
import bgMobile from '../assets/technology/background-technology-mobile.jpg'
import { motion } from 'motion/react';
import { NavLink, useNavigate } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';




function Technology({ name, description, imagePortrait, imageLandscape, nextPage, previosPage }) {

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

    const circle = (isActive) =>
        `flex size-10 items-center justify-center rounded-full border font-bellefair text-base
         md:size-14 md:text-2xl lg:size-20 lg:text-[32px]
         ${isActive ? 'border-white bg-white text-[#0B0D17]' : 'border-white/25 text-white'}`

    return (
        <>
        <div className="relative isolate min-h-dvh flex flex-col overflow-x-hidden">

            <picture className='select-none'>
                <source media="(min-width: 1024px)" srcSet={bgDesktop} />
                <source media="(min-width: 768px)" srcSet={bgTablet} />
                <img
                    src={bgMobile}
                    alt="Space with stars"
                    className="fixed inset-0 -z-10 w-full h-full object-cover"
                    draggable={false}
                />
            </picture>

            <Stars starsNum={150} />
            <Header />

            <div className="w-full max-w-360 mx-auto flex-1 flex flex-col" {...swipeHandler}>

                <div className="w-full max-w-280 mx-auto px-6 mt-3 flex justify-center md:justify-start md:ml-4 md:mt-10 lg:mt-2 lg:px-1 lg:ml-auto">
                    <p className="font-barlow-condensed text-[14px] sm:text-[16px] tracking-[15%] text-white md:text-[20px] lg:text-[28px]">
                        <span className="mr-4 font-bold opacity-25">03</span>
                        SPACE LAUNCH 101
                    </p>
                </div>


                <main className="w-full mt-12 flex flex-col items-center gap-8 pb-10
                                md:mt-18 md:gap-12
                                lg:mt-0 lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:pb-0
                                max-w-360

                                ">

                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-44 overflow-hidden md:h-72
                                lg:order-2 lg:h-110"
                    >
                        <picture>
                            <source media="(min-width: 1024px)" srcSet={imagePortrait} />
                            <img
                                src={imageLandscape}
                                alt={name}
                                draggable={false}
                                className="size-full object-cover select-none"
                            />
                        </picture>
                    </motion.div>

                    <div className="w-full max-w-280 px-6 flex flex-col items-center gap-8
                                    md:gap-10
                                    lg:order-1 lg:flex-row lg:items-center lg:gap-16 lg:px-1 lg:pl-24 ">

                        {/* ===== navbar: كل الصفحات ===== */}
                        <nav className="flex gap-4 select-none md:gap-6 lg:flex-col lg:gap-8">

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3}}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <NavLink
                                    to="/technology/launch-vehicle"
                                    draggable={false}
                                    className={({ isActive }) => circle(isActive)}
                                >
                                    1
                                </NavLink>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3}}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <NavLink
                                    to="/technology/spaceport"
                                    draggable={false}
                                    className={({ isActive }) => circle(isActive)}
                                >
                                    2
                                </NavLink>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <NavLink
                                    to="/technology/space-capsule"
                                    draggable={false}
                                    className={({ isActive }) => circle(isActive)}
                                >
                                    3
                                </NavLink>
                            </motion.div>

                        </nav>

                        <div className="flex flex-col items-center text-center max-w-110 md:max-w-lg lg:items-start lg:text-left lg:max-w-md">

                            <motion.p
                                key={`t-${name}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="font-barlow-condensed uppercase tracking-[2px] text-[#D0D6F9] text-[14px] md:text-base md:tracking-[15%]"
                            >
                                The terminology…
                            </motion.p>

                            <motion.h1
                                key={name}
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className="mt-2 font-bellefair uppercase text-white text-[24px] md:text-[40px] lg:text-[50px]"
                            >
                                {name}
                            </motion.h1>

                            <motion.p
                                key={description}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-4 font-barlow text-[15px] leading-[180%] text-[#D0D6F9] md:text-[16px] lg:text-[16px]"
                            >
                                {description}
                            </motion.p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </>
    )
}

export default Technology
