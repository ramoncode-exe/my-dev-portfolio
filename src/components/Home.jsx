import { motion } from "framer-motion";
import MyPhoto from "../assets/home-dev.png"

function Home(){
    return(
        <main>
            <div className="p-3 flex justify-evenly items-center max-lg:flex max-lg:flex-wrap max-lg:mb-8">
                <motion.div className="max-lg:mb-6 max-lg:mt-6" initial={{ y:+200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease:"easeIn" }}>
                    <h1 className="text-3xl leading-16 font-bold font-inter"><span className="text-5xl">Hello</span><span className="text-[#fb5607]">.</span><br /><span className="font-normal ml-16">I<span className="text-[#fb5607]">'</span>m Ramon</span><br /> <span className="text-5xl">Front End Developer</span></h1>
                    <div className="mt-3">
                        <motion.button onClick={() => window.open("https://www.linkedin.com/in/ramon-patrick-0a8a47333/")} target="_blank" whileHover={{ scale: 1.1 }} className="bg-[#fb560750] p-2 mr-5 hover:bg-transparent border border-[#fb5607]">Got a project?</motion.button>
                        <motion.button onClick={() => window.open("https://www.linkedin.com/in/ramon-patrick-0a8a47333/")} target="_blank" whileHover={{ scale: 1.1 }} className="border border-[#fb560770] p-2 hover:bg-[#fb5607]">Contact Me</motion.button>
                    </div>
                </motion.div>
                <div>
                    <motion.img initial={{ y:+200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease:"easeIn" }} className="w-150" src={MyPhoto} alt="my photo dev" />
                </div> 
            </div>
            
        </main>
    );
}

export default Home;