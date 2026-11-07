import { motion} from 'framer-motion'


function LinkStyleHeader ({number, name}) {
    return (
        <motion.span
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            whileHover={{
                scale: 1.2,
                y : -5 ,
                transition : {duration : 0.3}
            }}
            className={`h-full flex items-center transition-colors select-none uppercase`}
                >
                <b className="mr-2">{number}</b>
                {name}
        </motion.span>
    )

}

export default LinkStyleHeader

