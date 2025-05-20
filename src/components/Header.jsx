import Logo from '../assets/logo-dev.png'
import { motion } from "framer-motion";
import Menu from '../assets/header-menu.svg';

function Header(){
    return(
        <header className='flex flex-row items-center justify-around p-2 max-lg:items-center'>
            <motion.img whileHover={{ rotate: 5 }} className='w-32' src={Logo} alt="logo" initial={{ x:-200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 3, ease: 'easeOut' }}/>
            <motion.div className='text-[#F1F5F9]' >
                <motion.ul className='hidden lg:flex flex-row gap-7' initial={{ x:+500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} duration={{ duration: 10, ease: 'easeOut' }}>
                    <a href='#home'><motion.li whileHover={{ scale: 1.1 }} className='p-2 hover:border border-[#fb560770] hover:bg-[#1c2027] rounded-lg'>Home</motion.li></a>
                    <a href='#projects'><motion.li whileHover={{ scale: 1.1 }} className='p-2 hover:border border-[#fb560770] hover:bg-[#1c2027] rounded-lg'>Projects</motion.li></a>
                    <a href='#skills'><motion.li whileHover={{ scale: 1.1 }} className='p-2 hover:border border-[#fb560770] hover:bg-[#1c2027] rounded-lg'>Skills</motion.li></a>
                    <a href='#about'><motion.li whileHover={{ scale: 1.1 }} className='p-2 hover:border border-[#fb560770] hover:bg-[#1c2027] rounded-lg'>Contact</motion.li></a>
                </motion.ul>
            </motion.div>
            <motion.div initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className='block lg:hidden'>
                <img className='w-8' src={Menu} alt="Logo menu" />
            </motion.div>
        </header>
    );
}

export default Header;