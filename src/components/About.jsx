import { motion } from "framer-motion";
import AboutImg from "../assets/back-dev.png";

function About(){
    return(
        <div className="p-3 flex justify-evenly items-center max-lg:flex max-lg:flex-wrap max-lg:mb-8">
            <div>
                <motion.img initial={{ y:+200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease:"easeIn" }} className="w-150" src={AboutImg} alt="html dev coding" />
            </div>
            <div className="p-3 border border-[#fb560730] rounded-lg max-lg:mt-8">
                <h2 className="text-3xl font-bold mb-5">About <span className="text-[#fb5607]">Me</span></h2>
                <p className="w-120 text-md mb-5 max-lg:w-100 max-sm:w-70">I’m a front-end developer focused on building modern, responsive, and conversion-driven interfaces. <span className="text-[#fb5607]">Skilled in HTML, CSS, JavaScript, React, Tailwind, and Bootstrap.</span> I deliver clean, scalable, and user-friendly solutions that blend design and performance.</p>
                <button className="bg-[#fb560750] p-2 mr-5 hover:bg-transparent border border-[#fb5607]">Contact Me</button>
            </div>
        </div>
        
    );
}

export default About;