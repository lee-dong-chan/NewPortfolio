import clsx from "clsx";
import { ICareer } from "./CareerContainer";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
interface IProps {
  Profile: ICareer;
}

const CareerComp = ({ Profile }: IProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "mx-auto relative max-w-[1440px]  pt-[4rem] pb-[4rem] cursor-pointer border-t border-indigo-950 ",
        "laptop:max-w-[1200px]"
      )}
    >
      <div className="mx-auto z-0 relative flex w-[20rem] items-center">
        <div className="border absolute z-10 w-[20rem] h-[1px] border-purple-950"></div>
        <h1 className="mx-auto relative z-20  px-5 py-2  w-fit rounded-[0.5rem] font-bold text-[1.5rem] text-white bg-purple-950">
          Career
        </h1>
      </div>
      <div className="pt-[4rem] flex justify-between">
        <div className="w-[40rem] flex justify-center items-center ">
          <div className="relative top-[-3rem] left-[1rem]">
            <motion.div
              className="relative w-[3rem] h-[3rem]  z-10"
              animate={{ translateY: [0, -2.5, -5, -2.5, 0, 5, 2.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img className="scale-[1.5]  " src="/imgs/cup.png"></img>
            </motion.div>
            <div className="absolute top-10 rotate-[33deg] skew-x-[-27deg]  left-[-1.1rem]  w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-orange-400 animate-pulse"></div>
          </div>
          <div className="relative">
            <motion.div
              className="relative w-[10rem] h-[10rem]  z-10"
              animate={{ translateY: [0, -2.5, -5, -2.5, 0, 5, 2.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img className="scale-[1.5]  " src="/imgs/laptop.png"></img>
            </motion.div>
            <div className="absolute rotate-[33deg] skew-x-[-27deg]  top-[6.5rem] left-[-1.1rem]  w-[11rem] h-[6rem] rounded-[1rem] border-[3px] border-orange-400 animate-pulse"></div>
          </div>
        </div>

        <div className="pt-10">
          {Profile.career.map((item, idx: number) => (
            <div
              className={clsx(
                "my-5 bg-white p-[1px] h-[8rem] rounded bg-gradient-to-r from-indigo-500 from-40% via-pink-500 via-60% to-indigo-500",
                "hover:scale-[1.1] hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out hover:border-[1px] hover:border-purple-500"
              )}
              key={idx}
            >
              <div className="px-[2rem] py-[1rem] w-[100%] h-[100%]  rounded bg-indigo-950">
                <div className="pe-5 mx-auto w-fit  text-green-300">
                  {item.date}
                </div>

                <div className="py-[1rem] flex items-center">
                  <div className="px-[1rem]">{item.icon}</div>
                  <p className="text-white text-[1.2rem]">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerComp;
