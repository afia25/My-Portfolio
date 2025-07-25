import aboutImg from "../assets/about2.jpg";
import { ABOUT_TEXT } from "../constants";
import { ABOUT_TEXT2 } from "../constants";
import { ABOUT_TEXT3 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}} 
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="About Image" />
                </div>
            </motion.div>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}} 
            className="my-20 w-full lg:w-1/2">
                <h1 className="text-5xl text-cyan-400">“</h1>
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl">{ABOUT_TEXT}</p>
                </div>
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl">{ABOUT_TEXT2}</p>
                </div>
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl">{ABOUT_TEXT3}</p>
                </div>
                <h1 className="py-6 text-5xl text-cyan-400">”</h1>
            </motion.div>
        </div>
    </div>
  );
};

export default About;