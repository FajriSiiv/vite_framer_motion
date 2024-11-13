import { motion } from "framer-motion";

export const BlurBlock = () => {
  return (
    <div className="absolute h-screen top-0 right-0 left-0 bottom-0 inset-0 blur-[100px] z-10">
      <motion.div
        initial={{ left: "20%" }}
        animate={{ left: "35%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
        className=" size-40  rounded-full bg-emerald-500 z-0 absolute  top-10"
      />
      <motion.div
        initial={{ left: "80%", top: "30%" }}
        animate={{ left: "60%", top: "60%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
        className=" size-72  rounded-full bg-sky-300/50 z-0 absolute"
      />
      <motion.div
        initial={{ bottom: "10%", left: "10%" }}
        animate={{ bottom: "20%", left: "50%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
        className=" size-72  rounded-full bg-emerald-300/50 z-0 absolute  left-1/4"
      />
    </div>
  );
};
