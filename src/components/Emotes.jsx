import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Emotes = ({ setIsRaining, duration, mode, setMode, emotes }) => {
  const [width, setWidth] = useState(0);
  console.log(emotes);

  useEffect(() => {
    setWidth(document.getElementById("root").clientWidth);
  }, []);

  const PARENT_VARIANTS = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: emotes.length / Math.pow(duration, 2),
        when: "beforeChildren",
      },
    },
  };

  const CHILDREN_VARIANTS = {
    hidden: {
      bottom: mode === "rain" ? "110%" : "-100%",
    },
    visible: {
      bottom: 0,
      opacity: 1,
      transition: {
        type: mode === "rain" ? "tween" : "spring",
        duration: mode === "rain" ? duration : duration / 2,
        bounce: mode !== "rain" && 0.8,
        ease: mode !== "rain" && "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="pointer-events-none absolute top-0 left-0 z-10 flex h-full w-full items-center"
      variants={PARENT_VARIANTS}
      initial="hidden"
      animate={["visible"]}
      onAnimationComplete={() => {
        setTimeout(() => {
          setIsRaining(false),
            setMode((cur) => (cur === "rain" ? "pop" : "rain"));
        }, 1000);
      }}
      layout
    >
      <motion.div className="h-[100%]" layout>
        {emotes.map((emote, i) => {
          return (
            <>
              <motion.img
                variants={CHILDREN_VARIANTS}
                key={i}
                src={`${emote}`}
                className={`mx-28px absolute h-[28px] w-[28px] text-3xl md:mx-[56px] md:h-[56px] md:w-[56px]`}
                style={{ right: Math.floor(Math.random() * width) }}
                loading="lazy"
                layout
              />
              {/* <motion.span
                variants={CHILDREN_VARIANTS}
                key={i}
                className={`absolute mx-1 text-3xl`}
                style={{ right: Math.floor(Math.random() * width) }}
                layout
              >
                {emote}
              </motion.span> */}
            </>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Emotes;
