import { motion } from "framer-motion";

function Skills(){
    return(
        <div className="flex flex-row gap-15 p-5 items-center justify-center border border-[#cccccc30] mt-5 mb-5 bg-[#050b1580] p-5 max-lg:flex-wrap">
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-xl text-[#cccccc90] font-bold max-lg:textlg max-md:text-md">HTML</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-xl text-[#cccccc90] font-bold max-lg:text-lg max-md:text-md">CSS</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-xl text-[#cccccc90] font-bold max-lg:text-lg max-md:text-md">JavaScript</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-xl text-[#cccccc90] font-bold max-lg:text-lg max-md:text-md">React</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-xl text-[#cccccc90] font-bold max-lg:text-lg max-md:text-md">UX/UI</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-xl text-[#cccccc90] font-bold max-lg:text-lg max-md:text-md">GitHub</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-xl text-[#cccccc90] font-bold max-lg:text-lg max-md:text-md">Git</motion.p>
            </div>
            <div>
                <motion.p initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="text-xl text-[#cccccc90] font-bold max-lg:text-lg max-md:text-md">Figma</motion.p>
            </div>
        </div>
    );
}

export default Skills;