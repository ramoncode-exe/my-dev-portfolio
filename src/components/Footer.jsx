import { motion } from "framer-motion";
import Logo from "../assets/logo-dev.png"
import { Github, Linkedin, Mail  } from 'lucide-react';

function Footer(){
    return(
        <div className="bg-[#000f24] p-5 items-center text-center">
            <p className="text-sm">Coding with Love, All right reserved for Ramon Prog</p>
            <div className="flex flex-row items-center justify-center gap-3 mt-3">
                <Github className="w-5 h-5 hover:text-[#fb5607]" />
                <Linkedin className="w-5 h-5 hover:text-[#fb5607]" />
                <Mail className="w-5 h-5 hover:text-[#fb5607]" />
            </div>
        </div>
    );
}

export default Footer;