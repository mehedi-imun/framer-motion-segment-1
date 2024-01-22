import { wrap } from "@motionone/utils";
import {
    motion,
    useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  imageLink: string;
  baseValue: number;
}

function ParallaxImage({ imageLink, baseValue }: ParallaxImageProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(0, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseValue * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div>
         <motion.div className="flex flex-nowrap" style={{ x }}>
        <img src={imageLink} alt="" />
        <img src={imageLink} alt="" />
        <img src={imageLink} alt="" />
        <img src={imageLink} alt="" />
        <img src={imageLink} alt="" />
        <img src={imageLink} alt="" />
      </motion.div>
    </div>
  )
}

const Slider = () => {
  return (
    <div className="">
      <ParallaxImage
        imageLink="https://i.ibb.co/71wMsB7/Group-30.png"
        baseValue={-5}
      ></ParallaxImage>
      <ParallaxImage
        imageLink="https://i.ibb.co/71wMsB7/Group-30.png"
        baseValue={5}
      ></ParallaxImage>
   
    
    </div>
  );
};

export default Slider;
