import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
const  cursorAnimate = {
    blinking:{
        opacity:[0,0,1,1],
        transition:{
            duration:1,
            repeat:Infinity,
            repeatDelay:0,
            ease:"linear",
            times:[0,0.5,0.5,1]
        }
    }

}
const CursorBlinker =()=>{
    return (
        <motion.div 
        variants={cursorAnimate}
        animate="blinking"
        className="inline-block h-6 w-[1px] bg-black ml-1">

        </motion.div>
    )
}
const AnimText = () => {
    const [done,setDone]= useState(false)
  const baseText = "hey! I am Mohon";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
//   console.log(rounded);
  const displayText = useTransform(rounded, (latest) => {
    console.log(latest)
    return baseText.slice(0, latest);
  });
  // console.log(displayText)
  useEffect(() => {
    const control = animate(count, baseText.length, {
      type: "tween",
      delay: 1,
      duration: 1,
      ease: "easeInOut",
      onComplete:()=>{
        setDone(true)
      }
    });
    return control.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <span>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker></CursorBlinker>
    </span>
  );
};
const AnimatedText = () => {
return (
    <motion.div className="text-2xl text-black">
    <AnimText></AnimText>
    
  </motion.div>
)
};

export default AnimatedText;
