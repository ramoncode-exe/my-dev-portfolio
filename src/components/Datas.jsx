import { motion } from "framer-motion";

function Datas(){
    return(
        <div className="flex flex-row items-center justify-center gap-15 text-center p-3 mt-16 mb-16 max-lg:flex max-lg:flex-wrap max-lg:mt-8 max-lg:mb-8">
            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} initial={{ y: +300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2.5, ease: "easeIn" }} className="p-4 border border-[#fb560730] rounded-lg bg-[#fb560720]">
                <p className="text-4xl font-bold">20 <span className="text-[#fb5607]">+</span></p>
                <p className="text-md">Completed Projects</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} initial={{ y: +300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2.5, ease: "easeIn" }} className="p-4 border border-[#fb560730] rounded-lg bg-[#fb560720]">
                <p className="text-4xl font-bold">95 <span className="text-[#fb5607]">%</span></p>
                <p className="text-md">Client Satisfaction</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} initial={{ y: +300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2.5, ease: "easeIn" }} className="p-4 border border-[#fb560730] rounded-lg bg-[#fb560720]">
                <p className="text-4xl font-bold">2 <span className="text-[#fb5607]">+</span></p>
                <p className="text-md">Years of Experience</p>
            </motion.div>
        </div>
    );
}

export default Datas;