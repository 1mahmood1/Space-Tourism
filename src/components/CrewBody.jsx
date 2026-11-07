import Header from './Header';
import Stars from './Stars';
import bgDesktop from '../assets/crew/background-crew-desktop.jpg'
import bgTablet from '../assets/crew/background-crew-tablet.jpg'
import bgMobile from '../assets/crew/background-crew-mobile.jpg'
import {  NavLink, useNavigate   } from "react-router-dom";
import LinkStyleCrew from './LinkStyleCrew';
import crewImg from './CrewImg';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

function Crew({ name, role, bio , image = crewImg(name), nextPage, previosPage }) {
    
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
                <source media="(min-width: 1024px)" srcSet={bgDesktop} draggable={false} />
                <source media="(min-width: 768px)" srcSet={bgTablet} draggable={false}/>
                <img
                    src={bgMobile}
                    alt="Space with stars"
                    className="fixed inset-0 -z-10 w-full h-full object-cover"
                    draggable={false}
                />
            </picture>
            <Stars starsNum={150}/>
            <Header />

            <div className="flex justify-center" {...swipeHandler}>
                <div className="w-full max-w-280 px-6 lg:px-1 flex flex-col">

                    <div className="w-full mt-3 flex justify-center md:max-lg:mt-10 md:max-lg:justify-start md:max-lg:ml-4 md:justify-start lg:mt-2">
                        <p className="font-barlow-condensed text-[14px] sm:text-[16px] tracking-[15%] text-white md:text-[20px] lg:text-[28px]">
                            <span className="mr-4 font-bold opacity-25">02</span>
                            MEET YOUR CREW
                        </p>
                    </div>

                    <main className="flex-1 flex justify-center pt-2">
                        <div className="w-full flex flex-col items-center gap-8
                                        lg:flex-row lg:items-stretch lg:justify-between lg:gap-18">

                            <div className="flex flex-col items-center text-center
                                            lg:items-start lg:text-left lg:flex-1">

                                <div className="flex flex-col mt-10 items-center lg:items-start lg:my-auto lg:max-w-160">
                                    <motion.h2
                                        key={role}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="font-Bellefair-condensed uppercase text-white/50 text-[16px] md:text-[24px] lg:text-[32px]"
                                    >
                                        {role}
                                    </motion.h2>

                                    <motion.h1
                                        key={name}
                                        initial={{ opacity: 0, y: 25 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.15 }}
                                        className="font-Bellefair uppercase text-white text-[24px] md:text-[40px] lg:text-[56px]"
                                    >
                                        {name}
                                    </motion.h1>
                                    <motion.p
                                        key={bio}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="mt-5 font-barlow text-[15px] leading-[180%] text-[#D0D6F9] md:text-[16px] lg:mt-6 lg:text-[18px]"
                                    >
                                        {bio}
                                    </motion.p>
                                </div>

                                <div className="mt-8 md:mt-10 flex gap-5 select-none lg:mt-0 lg:mb-10" aria-hidden="true">
                                    
                                    <NavLink to="/crew/douglas-hurley">
                                        {({ isActive }) => <LinkStyleCrew active={isActive} />}
                                    </NavLink>
                                    
                                    <NavLink to="/crew/mark-shuttleworth">
                                        {({ isActive }) => <LinkStyleCrew active={isActive} />}
                                    </NavLink>                                    
                                    
                                    <NavLink to="/crew/victor-glover">
                                        {({ isActive }) => <LinkStyleCrew active={isActive} />}
                                    </NavLink>

                                </div>
                                </div>
                                <motion.div
                                    key={name}
                                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="mt-auto flex justify-center lg:self-end lg:justify-end"
                                >
                                    <img
                                        src={image}
                                        alt={`${role} ${name}`}
                                        draggable={false}
                                        className="h-90 w-auto md:h-120 lg:h-132 object-contain select-none
                                                mask-[linear-gradient(to_bottom,black_85%,transparent)]
                                                md:max-lg:mask-none"
                                    />
                                </motion.div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
        </>
    )
}

export default Crew
