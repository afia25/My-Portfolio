// Technical Skills
import { AiFillCopyrightCircle } from "react-icons/ai";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiMysql } from "react-icons/di";

// Tools
import pycharmImg from "../assets/pycharm.png";
import eclipseImg from "../assets/eclipse.png";
import { DiGithubBadge } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiIntellij } from "react-icons/di";
import sqliteImg from "../assets/sqlite.png";


//motion
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-10 text-center text-4xl">Skills</h1>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 100}}
        transition={{duration: 1.5}}
        className="my-8 text-center text-2xl">
            Technical Skills
        </motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

            <a href="https://www.geeksforgeeks.org/c-programming-language/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                    <AiFillCopyrightCircle className="text-7xl text-cyan-400" />
            </motion.div></a>

            <a href="https://isocpp.org/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoCPlusPlus className="text-7xl text-blue-300"/>
            </motion.div></a>

            <a href="https://www.oracle.com/java/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-7xl text-red-500"/>
            </motion.div></a>  

            <a href="https://www.python.org/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-yellow-400"/>
            </motion.div></a>

            <a href="https://www.djangoproject.com/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiDjango className="text-7xl text-green-400"/>
            </motion.div></a>

            <a href="https://angular.io/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiAngularSimple className="text-7xl text-red-400"/>
            </motion.div></a>

            <a href="https://getbootstrap.com/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsBootstrap className="text-7xl text-green-400"/>
            </motion.div></a>

            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-7xl text-orange-400"/>
            </motion.div></a>

            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCss3 className="text-7xl text-blue-400"/>
            </motion.div></a>

            <a href="https://www.mysql.com/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-cyan-400"/>
            </motion.div></a>

        </motion.div>

        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-8 text-center text-2xl">
            Familiar Tools
        </motion.h2>

        
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

            <a href="https://www.jetbrains.com/pycharm/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center h-[112px] w-[112px]"> 
                <img 
                src={pycharmImg}
                className="max-w-[68px] max-h-[64px] object-contain" 
                alt="PyCharm"
              />    
            </motion.div></a>

            <a href="https://www.eclipse.org/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center h-[112px] w-[112px]">  
                <img 
                src={eclipseImg}
                className="max-w-[68px] max-h-[64px] object-contain"
                alt="eclipse"
              />    
            </motion.div></a>

            <a href="https://github.com/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiGithubBadge className="text-7xl text-white-500"/>
            </motion.div></a>  

            <a href="https://code.visualstudio.com" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiVisualstudio className="text-7xl text-blue-500"/>
            </motion.div></a>

            <a href="https://www.jetbrains.com/idea/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiIntellij className="text-7xl text-white-400"/>
            </motion.div></a>
            
            <a href="https://sqlite.org/" target="_blank"
                    rel="noopener noreferrer" className="inline-block">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center h-[112px] w-[112px]">  
                <img 
                src={sqliteImg}
                className="max-w-[68px] max-h-[64px] object-contain"
                alt="oracle"
              />    
            </motion.div></a>

        </motion.div>
       
    </div>
    
  );
};

export default Technologies;
