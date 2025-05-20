import { motion } from "framer-motion";
import Logo from "../assets/logo-dev.png"
import { Github, Linkedin, Mail  } from 'lucide-react';

function Footer(){
    return(
        <div className="bg-[#000f2490] p-5 items-center text-center">
            <p className="text-sm">Coding with Love, All right reserved for Ramon Prog</p>
            <div className="flex flex-row items-center justify-center gap-3 mt-3">
                <a href="https://github.com/ramoncode-exe" target="_blank"><Github className="w-5 h-5 hover:text-[#fb5607]" /></a>
                <a href="https://www.linkedin.com/in/ramon-patrick-0a8a47333/" target="_blank"><Linkedin className="w-5 h-5 hover:text-[#fb5607]" /></a>
                <a href="https://mail.google.com/mail/u/1/#inbox" target="_blank"><Mail className="w-5 h-5 hover:text-[#fb5607]" /></a>
            </div>
        </div>
    );
}

export default Footer;