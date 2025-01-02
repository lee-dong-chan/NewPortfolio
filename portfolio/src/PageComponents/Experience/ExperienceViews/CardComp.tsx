import { motion } from "framer-motion";
import React from "react";
import { IExperienceData } from "../ExperienceContainer";
import clsx from "clsx";

interface IProps {
  data: IExperienceData;
  content: number;
  scrollProgress: number;
  scrollDirection: boolean;
}

const CardComp = ({
  data,
  scrollProgress,
  content,
  scrollDirection,
}: IProps): JSX.Element => {
  return (
    <>
      {content !== 0 && (
        <motion.div
          initial={{ opacity: 0, translateX: scrollDirection ? -50 : 50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          key={content}
          className={clsx(
            "relative px-[2rem] text-white",
            "mobile:px-[1rem] mobile:pt-[1rem]",
            scrollProgress === 0 && "hidden"
          )}
        >
          <motion.ul className="absolute">
            <motion.h1
              className={clsx(
                "py-[1rem] text-[1.3rem] text-blue-400 font-bold",
                "mobile:py-[0.5rem] mobile:text-[0.8rem]"
              )}
            >
              문제사항
            </motion.h1>
            {data.content.map((item: string, index: number) => (
              <motion.li
                className={clsx(
                  "px-[1rem] ",
                  "laptop:text-[1.1rem] laptop:py-[2px]",
                  "desktop:text-[1.2rem] desktop:py-[2px]",
                  "mobile:px-[0.5rem] mobile:text-[0.6rem] mobile:py-[1px]"
                )}
                key={index}
              >
                {item}
              </motion.li>
            ))}
            {data.detail && (
              <>
                {data.detail?.map((item, index) => (
                  <motion.div key={index}>
                    <motion.h1
                      className={clsx(
                        "py-[0.5rem] text-[1.3rem] text-blue-400 font-bold",
                        "mobile:py-[0.5rem] mobile:text-[0.8rem]"
                      )}
                    >
                      {item.title}
                    </motion.h1>
                    <motion.ul
                      className={clsx(
                        "px-[1rem] ",
                        "laptop:px-[1rem]  laptop:text-[1.1rem] ",
                        "desktop:px-[1rem] desktop:text-[1.2rem] ",
                        "mobile:px-[0.5rem] mobile:text-[0.6rem]"
                      )}
                    >
                      {item.content.map((item, index) => (
                        <motion.li className="py-[2px]" key={index}>
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                    {item.subDetail && (
                      <motion.div>
                        <motion.h1
                          className={clsx(
                            "py-[0.5rem] text-[1.4rem] text-blue-400 font-bold",
                            "mobile:py-[0.5rem] mobile:text-[0.8rem]"
                          )}
                        >
                          {item.subDetail.title}
                        </motion.h1>
                        <motion.ul
                          className={clsx(
                            "px-[1rem] ",
                            "laptop:px-[1rem]  laptop:text-[1.1rem]",
                            "desktop:px-[1rem] desktop:text-[1.2rem] ",
                            "mobile:px-[0.5rem] mobile:text-[0.6rem]"
                          )}
                        >
                          {item.subDetail.content.map((item, index) => (
                            <motion.li className="py-[2px]" key={index}>{`${
                              index + 1
                            }.${item}`}</motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </>
            )}
          </motion.ul>
        </motion.div>
      )}
    </>
  );
};
export default React.memo(CardComp);
