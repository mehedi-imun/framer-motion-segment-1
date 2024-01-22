import { motion, useAnimation, useInView } from "framer-motion";
import myWork  from "../../assets//img/muWork.png"
import { useEffect, useRef } from "react";
const MyWork = () => {
    const containerAnimation = {
        hidden:{
            opacity:0,
            x:"100vw"
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:120

            }
        }
    }
    const buttonAnimation = {
        hover:{
            scale:1.1,
            textShadow:"0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(0,0,10)",
                 transition:{
            duration:1,
            repeat:Infinity
        }
        },
   
    }
    const ref = useRef(null)
    const inView = useInView(ref)
    const sectionControl = useAnimation()
    useEffect(()=>{
        if(inView){
            sectionControl.start("visible")
        }
        else{
            sectionControl.start("hidden")
        }

    },[inView])
    return (
        <div ref={ref} >
            <motion.div  variants={containerAnimation} animate={sectionControl} initial="hidden"  className="space-y-3 mb-10 ">
            <img className="w-full" src={myWork} alt="" />
            <h1 className="text-[#4379FB] text-[26px]">Programming Hero</h1>
            <h3 className="text-[#22241B] text-[32px] font-medium">Website Ui Design for Programming Hero</h3>
            <p>This case study looks at the mobile-first redesign of Sick.org’s landing page. The study will focus on how the redesign improved user experience, increased mobile traffic, and how the changes have impacted the overall performance of the site…</p>
            <motion.button variants={buttonAnimation} whileHover="hover"  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium  bg-[#4379FB] rounded ">
            Contact on
          </motion.button>
        </motion.div>
        </div>
    );
};

export default MyWork;