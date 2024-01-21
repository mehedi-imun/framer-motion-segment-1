import { motion } from "framer-motion"
const NabBar = () => {
    const navAnimate = {
        hidden:{
            y:-40
        },
        visible:{
            y:-0,
            transition:{
                delay:0.3,
                type:"spring",
                stiffness:120
            }

        }
    }
    const navListAnimated = {
        hover:{
            scale: 1.1,
            originX:0,
            transition:{
                type:"spring",
                stiffness:300
            }
        }
    }
    return (
        <motion.nav 
        variants={navAnimate}
        initial="hidden"
        animate='visible'
        >
            <motion.div
             className="flex justify-center items-center h-12 text-2xl space-x-5 capitalize text-[#22241B]"
             
             >
                <motion.a variants={navListAnimated}
             whileHover="hover" href="#">My work</motion.a>
                <motion.a  variants={navListAnimated}
             whileHover="hover" href="#">about me</motion.a>
                <motion.a variants={navListAnimated}
             whileHover="hover"  href="#">resume</motion.a>
            </motion.div>
        </motion.nav>
    );
};

export default NabBar;