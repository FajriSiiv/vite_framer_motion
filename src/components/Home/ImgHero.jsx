import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useRef } from "react";
import { SectionDiv } from "../Div/SectionDiv";
import HeroDark from "../../assets/hero-dark.jpg";

export const ImgHero = () => {
  const refHeroImg = useRef();
  const { scrollYProgress } = useScroll({
    target: refHeroImg,
    offset: ["start start", "start end"],
  });

  const xAnim = useTransform(scrollYProgress, [0, 1], ["0", "-12"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const x = useMotionTemplate`rotate(${xAnim}deg) skewX(${xAnim}deg) scale(${scale})`;
  return (
    <SectionDiv>
      <div className="max-h-[800px] relative" ref={refHeroImg}>
        <motion.div
          className="absolute 
        "
          style={{
            height: 400,
            width: 400,
          }}
        />
        <motion.img
          src={HeroDark}
          className="object-contain w-full h-full"
          style={{
            transform: x,
            opacity,
          }}
        />
      </div>
    </SectionDiv>
  );
};
