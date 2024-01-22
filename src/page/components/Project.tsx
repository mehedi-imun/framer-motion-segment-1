import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Project = ({
  img,
  title,
  subtitle,
  description,
  btn,
  reverse,
}: {
  img: string;
  title: string;
  subtitle: string;
  description: string;
  btn: React.ReactNode;
  reverse?: boolean;
}) => {
  const imageAnimation = {
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
      scale:[1,1.2,1.3,1,1],
      rotate:[0,0,270,270,0],
      transition:{
        delay:0.3,
        duration:1.5

      }
    }
  }
  const ref = useRef(null)
  const inVew= useInView(ref);
  const control= useAnimation()

  useEffect(()=>{
    if(inVew){
      control.start("visible")
    }else{
      control.start("hidden")
    }

  },[inVew])
  return (
    <div>
      <div>
        <div
          className={`flex items-center justify-between  ${
            reverse ? "flex-row-reverse" : "flex-row"
          } }`}
        >
          <div className="max-w-md ml-8">
            <h3 className="text-2xl font-semibold  mb-2 text-blue-500">
              {subtitle}
            </h3>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="mt-1 mb-4 text-base">{description}</p>
            {btn}
          </div>
          <div ref={ref} className="flex items-center justify-end">
  
            <motion.img variants={imageAnimation} animate={control} initial="hidden"  className="w-[480px]" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
