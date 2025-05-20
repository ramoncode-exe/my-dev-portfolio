import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo-dev.png";
import Menu from "../assets/header-menu.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white p-4 flex items-center bg-[#000814] justify-around relative">
      <motion.img
        whileHover={{ rotate: 5 }}
        src={Logo}
        alt="Logo"
        className="w-32"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      <motion.ul
        className="hidden lg:flex flex-row gap-7"
        initial={{ x: +500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {["home", "projects", "skills", "about"].map((section, idx) => (
          <a href={`#${section}`} key={idx}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="p-2 hover:border border-[#fb560770] hover:bg-[#1c2027] rounded-lg capitalize"
            >
              {section}
            </motion.li>
          </a>
        ))}
      </motion.ul>

      <div className="block lg:hidden z-20">
        <img
          src={Menu}
          alt="Menu"
          className="w-8 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {isOpen && (
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-[#000814] flex flex-col items-center gap-4 p-4 lg:hidden shadow-lg z-10"
        >
          {["home", "projects", "skills", "about"].map((section, idx) => (
            <a href={`#${section}`} key={idx} onClick={() => setIsOpen(false)}>
              <li className="p-2 hover:border border-[#fb560770] hover:bg-[#1c2027] rounded-lg capitalize">
                {section}
              </li>
            </a>
          ))}
        </motion.ul>
      )}
    </header>
  );
}

export default Header;
