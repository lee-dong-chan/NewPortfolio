import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IExperienceData } from "../ExperienceContainer";
import clsx from "clsx";

interface IProps {
  data: IExperienceData[];
  content: number;
  scrollProgress: number;
}

const CardComp = ({ data, scrollProgress, content }: IProps): JSX.Element => {
  return (
    <>
      {content !== 0 && (
        <motion.div
          className={clsx(
            "px-[2rem] pt-[4rem] text-white",
            (scrollProgress === 100 && "hidden") ||
              (scrollProgress === 0 && "hidden")
          )}
        >
          <div>
            <motion.ul>
              <motion.h1 className="py-[1rem] text-[1.4rem] text-blue-400 font-bold">
                문제사항
              </motion.h1>
              {data[content - 1].content.map((item: string, index: number) => (
                <motion.li
                  className={clsx(
                    "px-[1rem]   text-white",
                    "laptop:text-[1.2rem] laptop:py-[5px]"
                  )}
                  key={index}
                >
                  {item}
                </motion.li>
              ))}
              {data[content - 1].detail && (
                <>
                  {data[content - 1].detail?.map((item, index) => (
                    <motion.div key={index}>
                      <motion.h1 className="py-[1rem] text-[1.4rem] text-blue-400 font-bold">
                        {item.title}
                      </motion.h1>
                      <motion.ul
                        className={clsx(
                          "px-[1rem]",
                          "laptop:px-[1rem]  laptop:text-[1.1rem]"
                        )}
                      >
                        {item.content.map((item, index) => (
                          <motion.li key={index}>{item}</motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  ))}
                </>
              )}
            </motion.ul>
          </div>
        </motion.div>
      )}
    </>
  );
};
export default React.memo(CardComp);
