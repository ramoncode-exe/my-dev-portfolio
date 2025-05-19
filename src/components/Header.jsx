import Logo from '../assets/logo-dev.png'
import { motion } from "framer-motion";

function Header(){
    return(
        <header className='flex flex-row items-center justify-around p-2 max-lg:items-center'>
            <motion.img whileHover={{ rotate: 5 }} className='w-32' src={Logo} alt="logo" initial={{ x:-200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} duration={{ duration: 6, ease: 'easeOut' }}/>
            <motion.div className='text-[#F1F5F9]' >
                <motion.ul className='flex flex-row gap-7 max-lg:hidden' initial={{ x:+500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} duration={{ duration: 10, ease: 'easeOut' }}>
                    <motion.li whileHover={{ scale: 1.1 }} className='p-2 hover:border border-[#fb5607] hover:bg-[#1c2027]'>Home</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className='p-2 hover:border border-[#fb5607] hover:bg-[#1c2027]'>Projects</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className='p-2 hover:border border-[#fb5607] hover:bg-[#1c2027]'>Skills</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className='p-2 hover:border border-[#fb5607] hover:bg-[#1c2027]'>Contact</motion.li>
                </motion.ul>
            </motion.div>
        </header>
    );
}

export default Header;