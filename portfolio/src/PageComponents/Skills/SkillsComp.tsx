import clsx from "clsx";
import { IICon } from "./SkillsContainer";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SlideObserver } from "../../lib/SlideObserver";

interface IProps {
  icons: IICon[];
  SkillsRef: React.RefObject<HTMLDivElement>;
}

const SkillsComp = ({ icons, SkillsRef }: IProps) => {
  const [slide, setSlideEnd] = useState<boolean>(false);
  const [persent, setPersent] = useState<number>(0);
  const [hover, sethover] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    SlideObserver({ state: setSlideEnd, ref: ref, persent: setPersent });
  }, [slide]);
  return (
    <div
      className={clsx(
        "mx-auto relative pt-[4rem] max-w-[1440px] cursor-pointer border-t border-indigo-950 z-[30] overflow-hidden",
        "laptop:max-w-[1200px]"
      )}
    >
      <div
        className={clsx(
          "mx-auto z-0 relative flex w-[20rem] items-center",
          "mobile:scale-[0.8]"
        )}
        ref={SkillsRef}
      >
        <div
          className={clsx(
            "border absolute z-10 w-[20rem] h-[1px] border-purple-950",
            "mobile:hidden"
          )}
        ></div>
        <h1 className="mx-auto relative z-20  px-5 py-2  w-fit rounded-[0.5rem] font-bold text-[1.5rem] text-white bg-purple-950">
          Skills
        </h1>
      </div>
      <div
        className={clsx(
          "max-w-[1440px] mx-[2rem]  py-[8rem] overflow-hidden",
          " mobile:mx-[1rem] mobile:mx-[1rem] mobile:py-[4rem]"
        )}
      >
        <motion.div
          key={slide ? "on" : "off"}
          className="w-fit  gap-10 flex "
          animate={
            hover
              ? { translateX: `${persent}%` }
              : { translateX: [`${persent}%`, "-100%"] }
          }
          transition={{
            type: "tween",
            ease: "linear",
            duration: (100 + persent) / 1.67,
          }}
          onUpdate={(latest) => {
            if (hover) {
              if (typeof latest.translateX == "string") {
                setPersent(Number(latest.translateX.replace("%", "")));
              }
            }
          }}
          onMouseOver={() => {
            sethover(true);
          }}
          onMouseLeave={() => {
            sethover(false);
          }}
        >
          {icons.map((item: IICon, idx: number) => (
            <div
              className={clsx(
                "w-[10rem] h-[10rem] p-[1px] rounded-[0.5rem]  bg-gradient-to-r from-indigo-500 from-40% via-pink-500 via-60% to-indigo-500",
                "hover:border-[1px] hover:border-purple-500   hover:scale-[1.1] hover:transition hover:delay-150 hover:duration-400 hover:ease-in-out",
                "mobile:w-[5rem] mobile:h-[5rem]"
              )}
              key={idx}
            >
              <div
                className={clsx(
                  "flex flex-col items-center justify-center  p-[1rem] w-[100%] h-[100%] rounded-[0.5rem] bg-indigo-950",
                  "mobile:p-[0.5rem]"
                )}
              >
                <div
                  className={clsx(
                    "w-[5rem] h-[5rem]",
                    "mobile:w-[2.5rem] mobile:h-[2.5rem]"
                  )}
                >
                  <img
                    className="w-[100%] h-[100%]"
                    src={item.icon}
                    alt={`icons${idx}`}
                  ></img>
                </div>
                <p
                  className={clsx(
                    "py-[1rem] text-white text-[1.3rem]",
                    "mobile:py-[0.2rem] mobile:text-[0.8rem]"
                  )}
                >
                  {item.name}
                </p>
              </div>
            </div>
          ))}
          <div ref={ref}></div>
        </motion.div>
      </div>
    </div>
  );
};
export default SkillsComp;
