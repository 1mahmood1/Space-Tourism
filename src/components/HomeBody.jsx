import { motion } from "motion/react"
import { Link } from "react-router-dom";

function HomeBody() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-8 font-barlow md:mt-25 lg:flex-row lg:justify-between lg:items-center lg:px-41.25 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="text-center lg:flex-col lg:text-left lg:flex lg:justify-between"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base text-[#D0D6F9] md:text-[28px]"
                    >
                        SO, YOU WANT TO TRAVEL TO
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="text-[80px] text-white md:text-[144px]"
                    >
                        SPACE
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="text-[15px] text-[#D0D6F9] text-center px-10 pt-3 md:text-[16px] md:px-10 max-w-lg lg:p-0 lg:text-left"
                    >
                        Let's face it; if you want to go to space, you might as well genuinely go
                        to outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we'll give you a truly out of this world experience!
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="relative mt-25 size-30 min-[300px]:size-25 min-[300px]:mt-20 md:size-40"
                >
                    <motion.span
                        className="absolute inset-0 rounded-full bg-white/40"
                        animate={{
                            scale: [1, 1.6],
                            opacity: [0.6, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.6,
                            ease: "easeOut"
                        }}
                    />

                    <Link to="/destination/moon">
                        <motion.div
                            className="relative size-full rounded-full bg-white flex items-center justify-center text-[18px] cursor-pointer select-none"
                            animate={{
                                scale: [1, 1.15, 1]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.6,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                scale: 1.1
                            }}
                            whileTap={{
                                scale: 0.8,
                                transition: { duration: 0.15 }
                            }}
                        >
                            Explore
                        </motion.div>
                    </Link>
                </motion.div>

            </div>
        </>
    )
}

export default HomeBody