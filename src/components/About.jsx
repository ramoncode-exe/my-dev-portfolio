import { motion, scale } from "framer-motion";
import AboutImg from "../assets/back-dev.png";

function About(){
    return(
        <div className="p-3 flex justify-evenly items-center max-lg:flex max-lg:flex-wrap max-lg:mb-8">
            <div>
                <motion.img initial={{ y:+200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease:"easeIn" }} className="w-150" src={AboutImg} alt="html dev coding" />
            </div>
            <div className="p-3 border border-[#fb560730] rounded-lg max-lg:mt-8 shadow-2xl/15 shadow-[#fb5607]">
                <h2 className="text-3xl font-bold mb-5">About <span className="text-[#fb5607]">Me</span></h2>
                <p className="w-120 text-md mb-5 max-lg:w-100 max-sm:w-70">I’m a front-end developer focused on building modern, responsive, and conversion-driven interfaces. <span className="text-[#fb5607]">Skilled in HTML, CSS, JavaScript, React, Tailwind, and Bootstrap.</span> I deliver clean, scalable, and user-friendly solutions that blend design and performance.</p>
                <motion.button whileHover={{ scale: 1.1 }} className="bg-[#fb560750] p-2 mr-5 hover:bg-transparent border border-[#fb5607]">Contact Me</motion.button>
                    <div className="flex flex-row items-center justify-center gap-8 text-center p-3 mt-5 mb-5 max-lg:flex max-lg:flex-wrap max-lg:mt-3 max-lg:mb-3">
                        <motion.div whileHover={{ scale: 1.1, rotate: 10 }} initial={{ y: +300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2.5, ease: "easeIn" }} className="p-4 border border-[#fb560730] rounded-lg bg-[#fb560720]">
                            <p className="text-4xl font-bold max-lg:text-3xl">20 <span className="text-[#fb5607]">+</span></p>
                            <p className="text-md">Completed Projects</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, rotate: 10 }} initial={{ y: +300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2.5, ease: "easeIn" }} className="p-4 border border-[#fb560730] rounded-lg bg-[#fb560720]">
                            <p className="text-4xl font-bold max-lg:text-3xl">95 <span className="text-[#fb5607]">%</span></p>
                            <p className="text-md">Client Satisfaction</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, rotate: 10 }} initial={{ y: +300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2.5, ease: "easeIn" }} className="p-4 border border-[#fb560730] rounded-lg bg-[#fb560720]">
                            <p className="text-4xl font-bold max-lg:text-3xl">2 <span className="text-[#fb5607]">+</span></p>
                            <p className="text-md">Years of Experience</p>
                        </motion.div>
                    </div>
            </div>
        </div>
        
    );
}

export default About;