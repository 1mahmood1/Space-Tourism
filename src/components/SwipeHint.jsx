import { useState } from 'react';
import { motion } from 'framer-motion';

function SwipeHint() {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="lg:hidden fixed top-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-lg -translate-x-1/2
                       rounded-2xl border border-white/20 bg-[#0B0D17]/70 p-4 pr-11
                       backdrop-blur-md select-none"
        >
            <p className="font-barlow-condensed text-[13px] tracking-[15%] text-[#D0D6F9] uppercase">
                Small Hint
            </p>

            <p className="mt-1 font-barlow text-[14px] leading-[160%] text-white md:text-[15px]">
                You can swipe or press button to show next
            </p>

            <button
                onClick={() => setShow(false)}
                aria-label="Close hint"
                className="absolute top-3 right-3 flex size-10 cursor-pointer items-center justify-center
                           rounded-full text-white/60 hover:bg-white/10 hover:text-white"
            >
                ✕
            </button>
        </motion.div>
    );
}

export default SwipeHint;