import logo from '../assets/shared/logo.svg'
import humburgerIcon from '../assets/shared/icon-hamburger.svg'
import { useState} from 'react'
import { motion } from 'framer-motion'
import closingImg from '../assets/shared/icon-close.svg'
import LinkStyleHeader from './LinkStyleHeader'
import { Link, NavLink, useMatch } from "react-router-dom";

function Header() {

    const [showSideBar, setShowSideBar] = useState(false)
    const isDestination = useMatch('/destination/*')
    const isCrew = useMatch("/crew/*")
    const isTechnology = useMatch("/technology/*")

    return (
        <>
            <header className="flex items-center p-7 justify-between md:p-0 lg:pt-10 select-none">
                    <Link
                        to="/"
                    >
                        <img src={logo} alt="logo" className="mx-5 lg:mx-14 w-10 lg:w-12 " />
                    </Link>

                    <div className="hidden lg:block flex-1 h-px bg-white/25 ml-16 -mr-8 relative z-10" />

                    <button
                        onClick={() => setShowSideBar(true)}
                        className="md:hidden"
                        aria-label="Open menu"
                    >
                        <img src={humburgerIcon} alt="" className="w-8" />
                    </button>


                <nav className="hidden md:flex md:relative gap-10 px-12 h-24 items-center lg:pl-50
                bg-white/5 backdrop-blur-2xl
                text-white font-barlow tracking-[2px] text-sm ">

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "h-full flex items-center border-b-[3px] border-white" : ""
                        }
                    >
                        <LinkStyleHeader number={`00`} name={`HOME`}/>
                    </NavLink>

                    <NavLink
                            to="/destination/moon"
                            className={`h-full flex items-center border-b-[3px] ${
                                isDestination ? 'border-white' : 'border-transparent'
                            }`}
                        >
                            <LinkStyleHeader number="01" name="DESTINATION" />
                        </NavLink>

                    <NavLink
                        to="/crew/douglas-hurley"
                            className={`h-full flex items-center border-b-[3px] ${
                                isCrew ? 'border-white' : 'border-transparent'
                            }`}
                    >
                        <LinkStyleHeader number={`02`} name={`CREW`}/>
                    </NavLink>
                    <NavLink
                        to="/technology/launch-vehicle"
                            className={`h-full flex items-center border-b-[3px] ${
                                isTechnology ? 'border-white' : 'border-transparent'
                            }`}
                    >
                        <LinkStyleHeader number={`03`} name={`TECHNOLOGY`}/>
                    </NavLink>

                </nav>

            </header>


            <motion.div
                className="fixed inset-y-0 right-0 z-50 w-64 bg-[#0B0D17]/15 backdrop-blur-xl p-8"
                initial={{ x: '100%' }}
                animate={{ x: showSideBar ? 0 : '100%' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
                    <button
                    onClick={() => setShowSideBar(false)}
                    aria-label="Close menu"
                    className="ml-auto block"
                >
                    <img src={closingImg} alt="close image" />
                </button>

                <nav className="mt-16 flex flex-col gap-8 text-white tracking-[2.7px] font-bellefair font-bold text-base">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "h-full flex items-center border-r-2 border-white" : ""
                        }
                    >
                        <LinkStyleHeader number={`00`} name={`HOME`}/>
                    </NavLink>

                    <NavLink
                        to="/destination/moon"
                        className={isDestination ? "h-full flex items-center border-r-2 border-white" : ""
                        }
                    >
                        <LinkStyleHeader number={`01`} name={`DESTINATION`}/>
                    </NavLink>

                    <NavLink
                        to="/crew/douglas-hurley"
                            className={`h-full flex items-center border-r-2 ${
                                isCrew ? 'border-white' : 'border-transparent'
                            }`}
                    >
                        <LinkStyleHeader number={`02`} name={`CREW`}/>
                    </NavLink>


                    <NavLink
                        to="/technology/launch-vehicle"
                            className={`h-full flex items-center border-r-2 ${
                                isTechnology ? 'border-white' : 'border-transparent'
                            }`}
                    >
                        <LinkStyleHeader number={`03`} name={`TECHNOLOGY`}/>
                    </NavLink>

                </nav>
            </motion.div>

        </>

    )
}


export default Header