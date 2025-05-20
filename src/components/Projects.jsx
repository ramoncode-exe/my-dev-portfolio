import { motion } from "framer-motion";
import LogoAzure from "../assets/azure-project.png";
import ToDoLoGo from "../assets/todo-project.png";
import YourCoffeLogo from "../assets/yourcoffe-project.png";

function Projects(){
    return(
        <div className="mt-8 mb-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-5">My <span className="text-[#fb5607]">Projects</span></h1>
            </div>
            <div className="flex flex-row items-center justify-center max-lg:flex-wrap gap-8 mt-10">
            <motion.div initial={{ y: +300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 4, ease: "easeIn" }} className="border p-3 border-[#cccccc20] w-100 max-md:w-85 shadow-2xl/15 shadow-[#FFF] rounded-lg">
                    <div className="flex items-center justify-center">
                        <img className="w-60 mt-2 mb-2" src={ToDoLoGo} alt="todo logo" />   
                    </div>
                    <div>
                        <h1 className="mt-3 text-2xl font-bold">ToDo Lists</h1>
                        <div className="mt-3">
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">HTML</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">CSS</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">Figma</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">UX/UI</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">JavaScript</span>                 
                        </div>
                        <p className="w-80 text-md mb-5 max-lg:w-100 max-sm:w-70 mt-3">A simple project created entirely with html, css and javascript for a personal client who wanted a customized ToDo List.</p>
                        <motion.button onClick={() => window.open("https://github.com/ramoncode-exe/ToDo---HTML-CSS-and-JS")} target="_blank" whileHover={{ scale: 1.1 }} className="bg-[#fb560750] p-2 mr-5 hover:bg-transparent border border-[#fb5607]">View GitHub</motion.button>
                        <motion.button onClick={() => window.open("https://to-do-html-css-and-js.vercel.app/")} target="_blank" whileHover={{ scale: 1.1 }} className="border border-[#fb560770] p-2 hover:bg-[#fb5607]">View Project</motion.button>
                    </div>
            </motion.div>
            <motion.div initial={{ y: +300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 4, ease: "easeIn" }} className="border p-3 border-[#cccccc20] w-100 max-md:w-85 shadow-2xl/15 shadow-[#FFF] rounded-lg">
                    <div className="flex items-center justify-center">
                        <img className="w-60 mt-2 mb-2" src={YourCoffeLogo} alt="Coffe logo" />   
                    </div>
                    <div>
                        <h1 className="mt-3 text-2xl font-bold">Your Coffe</h1>
                        <div className="mt-3">
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">HTML</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">CSS</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">Figma</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">UX/UI</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">React</span>                 
                        </div>
                        <p className="w-80 text-md mb-5 max-lg:w-100 max-sm:w-70 mt-3">YourCoffe, a company that works with customers who love good coffee, quality and good service.</p>
                        <motion.button onClick={() => window.open("https://github.com/ramoncode-exe/ToDo---HTML-CSS-and-JS")} target="_blank" whileHover={{ scale: 1.1 }} className="bg-[#fb560750] p-2 mr-5 hover:bg-transparent border border-[#fb5607]">View GitHub</motion.button>
                        <motion.button onClick={() => window.open("https://to-do-html-css-and-js.vercel.app/")} target="_blank" whileHover={{ scale: 1.1 }} className="border border-[#fb560770] p-2 hover:bg-[#fb5607]">View Project</motion.button>
                    </div>
            </motion.div>
            <motion.div initial={{ y: +300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 4, ease: "easeIn" }} className="border p-3 border-[#cccccc20] w-100 max-md:w-85 shadow-2xl/15 shadow-[#FFF] rounded-lg">
                    <div className="flex items-center justify-center">
                        <img className="w-60 mt-2 mb-2" src={LogoAzure} alt="azure logo" />
                    </div>
                    <div>
                        <h1 className="mt-3 text-2xl font-bold">Azure</h1>
                        <div className="mt-3">
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">HTML</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">CSS</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">Figma</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">UX/UI</span>
                            <span className="mr-2 bg-[#cccccc20] p-1.5 rounded-xl max-md:text-sm">JavaScript</span>
                        </div>
                        <p className="w-80 text-md mb-5 max-lg:w-100 max-sm:w-70 mt-3">Azure was a project aimed at attracting high-end clients for unmissable trips to the Maldives.</p>
                        <motion.button onClick={() => window.open("https://github.com/ramoncode-exe/Azure")} target="_blank" whileHover={{ scale: 1.1 }} className="bg-[#fb560750] p-2 mr-5 hover:bg-transparent border border-[#fb5607]">View GitHub</motion.button>
                        <motion.button onClick={() => window.open("https://azure-seven.vercel.app/")} target="_blank" whileHover={{ scale: 1.1 }} className="border border-[#fb560770] p-2 hover:bg-[#fb5607]">View Project</motion.button>
                    </div>
                </motion.div> 
            </div>
           
        </div>
    );
}

export default Projects;