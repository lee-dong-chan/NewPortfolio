import clsx from "clsx";
import { ICareer } from "./OverviewContainer";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Observer } from "../../lib/Observer";

interface IProps {
  Profile: ICareer;
  CareerRef: React.RefObject<HTMLDivElement>;
}

const OverviewComp = ({ Profile, CareerRef }: IProps): JSX.Element => {
  const [view, setview] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    Observer({ state: setview, ref: ref });
  }, [ref, view]);
  return (
    <div
      className={clsx(
        "mx-auto relative max-w-[1440px] px-[2rem]  pt-[4rem] pb-[4rem] cursor-pointer border-t border-indigo-950 z-[30] overflow-hidden ",
        "laptop:max-w-[1200px]",
        "mobile:px-0"
      )}
    >
      <div
        className={clsx(
          "px-[2rem] mx-auto z-0 relative flex max-w-[20rem] items-center justify-center",
          "mobile:scale-[0.8]"
        )}
        ref={CareerRef}
      >
        <div
          className={clsx(
            "border absolute z-10 w-[20rem] h-[1px] border-purple-950"
          )}
        ></div>
        <h1 className="mx-auto relative z-20  px-5 py-2  w-fit rounded-[0.5rem] font-bold text-[1.5rem] text-white bg-purple-950">
          Overview
        </h1>
      </div>
      <div
        className={clsx(
          "pt-[4rem]",
          "desktop:flex desktop:justify-between",
          "laptop:flex laptop:justify-content",
          "mobile:pt-[2rem]"
        )}
      >
        <div
          className={clsx(
            "py-[4rem] mx-auto  w-fit flex justify-center items-center ",
            "mobile:scale-[0.7] "
          )}
          ref={ref}
        >
          <div className="relative top-[-2rem] left-[1rem]">
            <motion.div
              className="relative w-[3rem] h-[3rem]  z-10"
              animate={{ translateY: [0, 2.5, 5, 2.5, 0, -2.5, -5, -2.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img className="scale-[1.5]" alt="Cup" src="/imgs/cup.png"></img>
            </motion.div>
            <motion.div
              animate={{
                borderRadius: ["20%", "25%", "30%", "40%", "30%", "25%", "20%"],
                opacity: [1, 0.5, 0.2, 0, 5, 1, 0.5, 0.2, 0.5, 1],
              }}
              transition={{
                borderRadius: { duration: 5, repeat: Infinity },
                opacity: { duration: 2, repeat: Infinity },
              }}
              className="absolute top-8 rotate-[33deg] skew-x-[-27deg]  left-[-0.8rem]  w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-orange-400 "
            ></motion.div>
          </div>
          <div className="relative">
            <motion.div
              className="relative w-[10rem] h-[10rem]  z-10"
              animate={{ translateY: [0, -2.5, -5, -2.5, 0, 2.5, 5, 2.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img
                className="scale-[1.5]"
                alt="laptop"
                src="/imgs/laptop.png"
              ></img>
            </motion.div>
            <motion.div
              animate={{
                opacity: [1, 0.5, 0.2, 0, 5, 1, 0.5, 0.2, 0.5, 1],
              }}
              transition={{
                opacity: { duration: 2, repeat: Infinity },
              }}
              className="absolute rotate-[33deg] skew-x-[-27deg]  top-[6.5rem] left-[-1.1rem]  w-[11rem] h-[6rem] rounded-[1rem] border-[3px] border-orange-400 animate-pulse"
            ></motion.div>
          </div>
        </div>

        <div className="pt-10">
          {Profile.career.map((item, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, translateX: 50 }}
              animate={view && { opacity: 1, translateX: 0 }}
              transition={{
                opacity: { delay: 0.1, duration: 1.2 },
                translateX: {
                  duration: 0.7,
                  delay: `0.${4 + idx}`,
                },
              }}
            >
              <div
                className={clsx(
                  "my-5 mx-[2rem] bg-white p-[1px]  h-fit rounded bg-gradient-to-r from-indigo-500 from-40% via-pink-500 via-60% to-indigo-500",
                  "hover:scale-[1.1] hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out hover:border-[1px] hover:border-purple-500"
                )}
              >
                <div
                  className={clsx(
                    "py-[1rem] w-[100%] h-[100%] px-[2rem]   rounded bg-indigo-950",
                    "mobile:px-[4px]"
                  )}
                >
                  <div className="py-[1rem] flex items-center">
                    {
                      <div
                        className={clsx(
                          "w-[5rem] font-bold text-center text-[1.4rem] text-green-300",
                          "mobile:text-[0.8rem]",
                          "tablet:text-[1.2rem]"
                        )}
                      >
                        {item.title}
                      </div>
                    }
                    <div
                      className={clsx(
                        "text-white text-[1.2rem] px-[4rem]",
                        "mobile:px-0 mobile:text-[0.7rem]",
                        "tablet:text-[1rem]"
                      )}
                    >
                      {item.content.map((data: JSX.Element, num: number) => (
                        <ul key={num}>{data}</ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewComp;
