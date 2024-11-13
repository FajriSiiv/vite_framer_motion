import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import TitleSection from "../TitleSection";
import { SectionDiv } from "../Div/SectionDiv";
import { CgFramer } from "react-icons/cg";
import { PiArrowBendUpRightBold, PiShoppingBagOpenFill } from "react-icons/pi";
import { FaArrowTrendUp, FaCheck } from "react-icons/fa6";
import { MdCodeOff } from "react-icons/md";
import { RiDiscountPercentLine, RiNavigationFill } from "react-icons/ri";
import { BiLogoShopify, BiSolidCustomize } from "react-icons/bi";
import { IoIosCard } from "react-icons/io";
import { BsBox2Fill } from "react-icons/bs";
import Button from "../Button";

export const MeetSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [0, 30]);
  const yS = useTransform(scrollYProgress, [0.5, 1], [0, 30]);

  const ySmooth = useSpring(y, { stiffness: 300, damping: 50 });
  const ySmoothS = useSpring(yS, { stiffness: 300, damping: 50 });

  const CardFramer = ({ textHighlight, textAfterHighlight, text, icon }) => {
    return (
      <div className="flex flex-col text-white/50 text-base ">
        <p className=" flex gap-x-1 items-center capitalize">
          {icon}
          <span className="text-white ">{textHighlight}</span>
          {textAfterHighlight}
        </p>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <SectionDiv className="bg-green-900/5 mt-20">
      <div className="py-14 text-white" ref={ref}>
        <TitleSection
          titleHeading="meet shopiframe"
          titleDesc=" Framer Flexiility, Shopify Strength"
        />

        <motion.div
          style={{ y: ySmooth }}
          className="flex flex-col gap-y-10 mt-20"
        >
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-5 justify-start">
              <div className=" relative">
                <div className="p-3 border border-neutral-900 bg-neutral-950 rounded-full z-10 relative">
                  <CgFramer className="text-[#00b6fc] " size={50} />
                </div>
                <div className="absolute left-5 top-5 size-10 bg-[#00b6fc] blur-2xl" />
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="text-lg leading-none">Design and publish in</h3>
                <h3 className="text-4xl font-bold leading-none">Framer</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-3 gap-12 mt-16 lg:grid-cols-2">
              <CardFramer
                icon={<PiArrowBendUpRightBold size={18} />}
                text="prototyping capabilities"
                textAfterHighlight="flawless"
                textHighlight="prototyping"
              />
              <CardFramer
                icon={<FaArrowTrendUp size={18} />}
                textHighlight="SEO Friendly"
                textAfterHighlight="better"
                text="online accessibility"
              />
              <CardFramer
                icon={<FaCheck size={18} />}
                textHighlight="Hight Speed Website"
                textAfterHighlight="lightning"
                text="-fast performance"
              />
              <CardFramer
                icon={<MdCodeOff size={18} />}
                textHighlight="no-code"
                textAfterHighlight="goodbye"
                text="to coding headaches"
              />
              <CardFramer
                icon={<RiNavigationFill size={18} />}
                textHighlight="easy to use"
                textAfterHighlight="simplified"
                text="design process"
              />
              <CardFramer
                icon={<BiSolidCustomize size={18} />}
                textHighlight="very customizable"
                textAfterHighlight="unleash"
                text="your creativity"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: ySmoothS }}
          className="flex flex-col gap-y-10 mt-20"
        >
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-5 justify-start">
              <div className=" relative">
                <div className="p-3 border border-neutral-900 bg-neutral-950 rounded-full z-10 relative">
                  <BiLogoShopify className="text-[#8db849] " size={50} />
                </div>
                <div className="absolute left-5 top-5 size-10 bg-[#8db849] blur-2xl" />
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="text-lg leading-none">Manage in</h3>
                <h3 className="text-4xl font-bold leading-none">Shopify</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-3 gap-12 mt-16 lg:grid-cols-2">
              <CardFramer
                icon={<PiShoppingBagOpenFill size={18} />}
                textHighlight="inventory management."
                textAfterHighlight="effortless"
                text="inventory control and tracking"
              />
              <CardFramer
                icon={<IoIosCard size={18} />}
                textHighlight="paymen gateways."
                textAfterHighlight="secure,"
                text="seamless transactions"
              />
              <CardFramer
                icon={<FaArrowTrendUp size={18} />}
                textHighlight="analytics & insights."
                textAfterHighlight="data"
                text="-driven business insights."
              />
              <CardFramer
                icon={<RiDiscountPercentLine size={18} />}
                textHighlight="customers & discounts."
                textAfterHighlight="endgage"
                text="customers with discounts."
              />
              <CardFramer
                icon={<BsBox2Fill size={18} />}
                textHighlight="orders & fulfilment."
                textAfterHighlight="streamlined."
                text="order management and fulfillment."
              />
              <CardFramer
                icon={<PiShoppingBagOpenFill size={18} />}
                textHighlight="inventory management."
                textAfterHighlight="effortless"
                text="inventory control and tracking"
              />
            </div>
          </div>
        </motion.div>

        <div className="w-full rounded-lg p-3 flex justify-between items-center mt-20 bg-slate-950 border border-slate-800">
          <div className="flex justify-center items-center gap-x-2">
            <CgFramer size={50} />
            <p>Start building your website in minutes now with Framer.</p>
          </div>
          <Button text="Try Framer" />
        </div>
      </div>
    </SectionDiv>
  );
};
