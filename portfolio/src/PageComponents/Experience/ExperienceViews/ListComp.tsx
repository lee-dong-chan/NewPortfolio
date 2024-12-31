import clsx from "clsx";
import { motion } from "framer-motion";
import { IExperienceData } from "../ExperienceContainer";
import React from "react";

interface IProps {
  data: IExperienceData[];
  scrollProgress: number;
  content: 0 | 1 | 2 | 3 | 4;
}

const ListComp = ({ data, scrollProgress, content }: IProps) => {
  return (
    <div
      className={clsx(
        content !== 0 &&
          "desktop:hidden laptop:hidden mobile:hidden tablet:hidden",
        "w-fit mx-auto text-white gap-[5rem]",
        "desktop:pt-[4rem] desktop:flex desktop:items-center desktop:justify-between",
        "laptop:flex laptop:items-center laptop:justify-between"
      )}
    >
      <motion.div
        animate={
          scrollProgress !== 0 && scrollProgress < 18
            ? { opacity: 1 }
            : { opacity: 0, translateX: -20 }
        }
        transition={{ duration: 0.2, width: { duration: 1 } }}
        className={clsx(
          "relative w-[13rem] h-[13rem] flex items-center justify-center ",
          "mobile:hidden",
          "tablet:mx-auto"
        )}
      >
        <img
          src="/imgs/light-bulb.png"
          alt="light-bulb"
          className={clsx("absolute w-[100%] h-[100%] z-20 ")}
        ></img>
        <motion.div
          className={clsx(
            "absolute top-[2rem] w-[20rem] flex justify-evenly z-30 "
          )}
        >
          <motion.div
            initial={{ rotate: 90 }}
            animate={{
              translateX: [0, 5, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className={clsx(
              "relative top-[30px] left-[15px] rotate-[90deg] w-[10px] h-[25px] bg-orange-500 rounded-[5px]"
            )}
          ></motion.div>
          <motion.div
            initial={{ rotate: -45 }}
            animate={{
              translateX: [5, 0, 5],
              translateY: [0, -5, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className={clsx(
              "relative top-[-30px] left-[-20px] rotate-[-45deg]  w-[10px] h-[25px] bg-orange-500 rounded-[5px]"
            )}
          ></motion.div>
          <motion.div
            animate={{ translateY: [-5, 0, -5], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className={clsx(
              "relative top-[-60px] w-[10px] h-[25px] bg-orange-500 rounded-[5px]"
            )}
          ></motion.div>
          <motion.div
            initial={{ rotate: 45 }}
            animate={{
              translateX: [-5, 0, -5],
              translateY: [0, -5, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className={clsx(
              "relative w-[10px] top-[-30px] right-[-20px] rotate-[45deg] h-[25px] bg-orange-500 rounded-[5px]"
            )}
          ></motion.div>
          <motion.div
            initial={{ rotate: 90 }}
            animate={{
              translateX: [0, -5, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative top-[30px] right-[15px] rotate-[90deg] w-[10px] h-[25px] bg-orange-500 rounded-[5px]"
          ></motion.div>
        </motion.div>
        <div className="absolute top-[1rem] left-[3rem] w-[7rem] h-[8rem] rounded-full bg-gradient-to-r from-indigo-700 from-40% via-pink-500 via-60% to-indigo-500 animate-pulse"></div>
      </motion.div>
      <div className={clsx("pt-10", "mobile:pt-[0rem]")}>
        {data.map((item, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, translateX: 50 }}
            animate={
              scrollProgress !== 0 && scrollProgress < 18
                ? { opacity: 1, translateX: 0 }
                : {
                    opacity: 0,
                    translateX: 50,
                  }
            }
            transition={{
              opacity: {
                delay: 0.1,
                duration: 0.7,
              },
              translateX: {
                duration: 0.7,
                delay: `0.${4 + idx}`,
              },
            }}
          >
            <div
              className={clsx(
                "my-[2rem]  bg-white p-[1px]  h-fit rounded bg-gradient-to-r from-indigo-500 from-40% via-pink-500 via-60% to-indigo-500",
                "hover:scale-[1.1] hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out hover:border-[1px] hover:border-purple-500"
              )}
            >
              <div
                className={clsx(
                  "py-[1rem] w-[100%] h-[100%] px-[2rem]   rounded bg-indigo-950",
                  "mobile:px-[4px]"
                )}
              >
                <div className="py-[1.5rem] flex items-center">
                  <div
                    className={clsx(
                      "text-white text-[1.5rem] px-[2rem] font-bold",
                      "mobile:px-[0.5rem] mobile:text-[0.7rem]",
                      "tablet:px-[1rem] tablet:text-[1rem]"
                    )}
                  >
                    <ul>{item.title}</ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ListComp);
