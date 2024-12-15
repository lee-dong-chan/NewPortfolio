import clsx from "clsx";
import { ICareer } from "./CareerContainer";
import { motion } from "framer-motion";

interface IProps {
  Profile: ICareer;
  CareerRef: React.RefObject<HTMLDivElement>;
}

const CareerComp = ({ Profile, CareerRef }: IProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "mx-auto relative max-w-[1440px] px-[2rem]  pt-[4rem] pb-[4rem] cursor-pointer border-t border-indigo-950 z-[30] overflow-hidden ",
        "laptop:max-w-[1200px]"
      )}
    >
      <div
        className="px-[2rem] mx-auto z-0 relative flex max-w-[20rem] items-center justify-center"
        ref={CareerRef}
      >
        <div
          className={clsx(
            "border absolute z-10 w-[20rem] h-[1px] border-purple-950",
            "mobile:hidden"
          )}
        ></div>
        <h1 className="mx-auto relative z-20  px-5 py-2  w-fit rounded-[0.5rem] font-bold text-[1.5rem] text-white bg-purple-950">
          Career
        </h1>
      </div>
      <div
        className={clsx(
          "pt-[4rem] ",
          "desktop:flex desktop:justify-between",
          "laptop:flex laptop:justify-content"
        )}
      >
        <div className="py-[6rem] mx-auto  w-fit flex justify-center items-center ">
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
              className="absolute top-8 rotate-[33deg] skew-x-[-27deg]  left-[-1.2rem]  w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-orange-400 "
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
            <div
              className={clsx(
                "my-5 mx-[2rem] bg-white p-[1px] h-[8rem] rounded bg-gradient-to-r from-indigo-500 from-40% via-pink-500 via-60% to-indigo-500",
                "hover:scale-[1.1] hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out hover:border-[1px] hover:border-purple-500"
              )}
              key={idx}
            >
              <div className="px-[2rem] py-[1rem] w-[100%] h-[100%]  rounded bg-indigo-950">
                <div
                  className={clsx(
                    "pe-5 mx-auto w-fit  text-green-300",
                    "mobile:text-[0.9rem]"
                  )}
                >
                  {item.date}
                </div>

                <div className="py-[1rem] flex items-center">
                  <div className="px-[1rem]">{item.icon}</div>
                  <p
                    className={clsx(
                      "text-white text-[1.2rem]",
                      "mobile:text-[0.8rem]"
                    )}
                  >
                    {item.content}
                  </p>
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
