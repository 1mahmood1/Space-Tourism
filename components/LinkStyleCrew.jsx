import { motion } from 'framer-motion'

function LinkStyleCrew({ active }) {
    return (
        <motion.span
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.1 }}
            whileHover={{
                scale: 1.2,
                y: -5,
                transition: { duration: 0.3 }
            }}
            className={`block size-5 rounded-full cursor-pointer ${
                active ? 'bg-white' : 'bg-white/[17.44%]'
            }`}
        >
        </motion.span>
    )
}

export default LinkStyleCrew