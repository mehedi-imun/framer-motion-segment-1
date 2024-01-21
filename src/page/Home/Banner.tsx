import bannerImg from "../../assets/img/bannerImg.png";
import { motion } from "framer-motion";
const Banner = () => {
    const containerAnimation = {
        hidden:{
            opacity:0,
            x:"-100vw"
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
  return (
    <motion.div 
    variants={containerAnimation}
    initial="hidden"
    animate="visible"
    className="flex justify-around items-center h-screen ">
      <div >
        <h2 className="text-[40px]">
          Hi im <span className="text-[#4379FB]"> Mohon!</span>
        </h2>
        <p className="text-[50px] font-bold text-[#4379FB]">
          Product designer{" "}
        </p>
        <p className="text-[40px]">From Bangladesh</p>
        <div className="flex  items-center space-x-6 mt-4">
          <motion.button variants={buttonAnimation} whileHover="hover"  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium  bg-[#4379FB] rounded ">
            Contact on
          </motion.button>
          <span>OR</span>
          <motion.button variants={buttonAnimation} whileHover="hover"  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded border border-gray-200 ">
            shedule
          </motion.button>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={bannerImg} alt="" />
      </div>
    </motion.div>
  );
};

export default Banner;
