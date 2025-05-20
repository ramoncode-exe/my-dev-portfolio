import { motion } from "framer-motion";

function Skills(){
    return(
        <div className="flex flex-row gap-15 bg-[#] items-center justify-center border border-[#cccccc30] mt-5 mb-5 bg-[#000f2480] p-5 max-lg:flex-wrap">
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-2xl text-[#cccccc90] font-bold">HTML</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-2xl text-[#cccccc90] font-bold">CSS</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-2xl text-[#cccccc90] font-bold">JavaScript</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-2xl text-[#cccccc90] font-bold">React</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-2xl text-[#cccccc90] font-bold">UX/UI</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-2xl text-[#cccccc90] font-bold">GitHub</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-2xl text-[#cccccc90] font-bold">Git</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-2xl text-[#cccccc90] font-bold">Figma</motion.p>
            </div>
        </div>
    );
}

export default Skills;