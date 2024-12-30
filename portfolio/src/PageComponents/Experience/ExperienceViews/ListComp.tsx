import clsx from "clsx";
import { motion } from "framer-motion";
import { IExperienceData } from "../ExperienceContainer";

interface IProps {
  data: IExperienceData[];
  scrollProgress: number;
  content: number;
}

const ListComp = ({ data, scrollProgress, content }: IProps) => {
  return (
    <div
      className={clsx(
        "w-fit mx-auto pt-[4rem] flex items-center justify-between text-white gap-[5rem]",
        content !== 0 && "hidden"
      )}
    >
      <motion.div
        animate={
          scrollProgress !== 0 && scrollProgress < 18
            ? { opacity: 1 }
            : { opacity: 0, translateX: -20 }
        }
        transition={{ duration: 0.2, width: { duration: 1 } }}
        className="relative w-[15rem] h-[15rem] flex items-center justify-center "
      >
        <img
          src="/imgs/light-bulb.png"
          className="absolute w-[100%] h-[100%] z-20"
        ></img>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 1, 0.5, 0, 0.5, 1, 0.5],
            width: ["8rem", "10rem", "8rem", "10rem", "8rem", "10rem"],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute rounded-full top-[2rem] w-[8rem] h-[10rem] bg-yellow-100 blur z-10"
        ></motion.div>
      </motion.div>
      <div className="pt-10">
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
                "my-[2rem] mx-[2rem] bg-white p-[1px]  h-fit rounded bg-gradient-to-r from-indigo-500 from-40% via-pink-500 via-60% to-indigo-500",
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
                      "text-white text-[1.3rem] px-[2rem]",
                      "mobile:px-0 mobile:text-[0.7rem]",
                      "tablet:text-[1rem]"
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

export default ListComp;
