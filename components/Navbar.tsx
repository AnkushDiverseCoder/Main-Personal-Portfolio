import { Logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { GiSchoolBag } from "react-icons/gi";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const ref = useRef<string | any>("");
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  
  return (
    <div className="w-full shadow-navbarShadow h20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Image className="w-14" src={Logo} alt="Logo" />
        </motion.div>
        <div
          className="hidden mdl:inline-flex items-center gap-7
        "
        >
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link
            "
              onClick={handleScroll}
            >
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeIn" }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link
            "
              onClick={handleScroll}
            >
              {" "}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.1, ease: "easeIn" }}
              >
                <span className="text-textGreen">01.</span> About{" "}
              </motion.li>
            </Link>
            <Link
              href="#experience"
              className="flex items-center gap1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link
            "
              onClick={handleScroll}
            >
              {" "}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.2, ease: "easeIn" }}
              >
                <span className="text-textGreen">02.</span> Experience{" "}
              </motion.li>
            </Link>
            <Link
              href="#project"
              className="flex items-center gap1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link
            "
              onClick={handleScroll}
            >
              {" "}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.3, ease: "easeIn" }}
              >
                <span className="text-textGreen">03.</span> Projects{" "}
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link
            "
              onClick={handleScroll}
            >
              {" "}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.4, ease: "easeIn" }}
              >
                <span className="text-textGreen">04.</span> Contact{" "}
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/ankush_resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300
              "
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Small Icon Section*/}
        <div
          onClick={() => setshowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 translate-all ease-in-out duration-300 "></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 translate-all ease-in-out duration-300 "></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 translate-all ease-in-out duration-300 "></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative "
            >
              <MdOutlineClose
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
                onClick={() => setshowMenu(false)}
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    className="flex items-center gap1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link
            "
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    className="flex items-center gap1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link
            "
                    onClick={handleScroll}
                  >
                    {" "}
                    <motion.li
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">01.</span> About{" "}
                    </motion.li>
                  </Link>
                  <Link
                    href="#experience"
                    className="flex items-center gap1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link
            "
                    onClick={handleScroll}
                  >
                    {" "}
                    <motion.li
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">02.</span> Experience{" "}
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    className="flex items-center gap1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link
            "
                    onClick={handleScroll}
                  >
                    {" "}
                    <motion.li
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">03.</span> Projects{" "}
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    className="flex items-center gap1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link
            "
                    onClick={handleScroll}
                  >
                    {" "}
                    <motion.li
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">04.</span> Contact{" "}
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/ankush_resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeIn" }}
                    className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300
              "
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="items-center justify-center w-full py-6 gap-6 ">
                  <a href="" target="_blank">
                    <span className="w-10 h-10 mr-2 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </a>
                  <a href="" target="_blank">
                    <span className="w-10 h-10 mr-2 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </a>
                  <a href="" target="_blank">
                    <span className="w-10 h-10 mr-2 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <GiSchoolBag />
                    </span>
                  </a>
                  <a href="" target="_blank">
                    <span className="w-10 h-10 mr-2 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </a>
                  
                  <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeIn" }}
                  href="mailto:thakurtulja0@gmail.com">
                    <p className="text-sm p-6 ml-2 tracking-wide text-textGreen">
                      reactbd.proton.me
                    </p>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
