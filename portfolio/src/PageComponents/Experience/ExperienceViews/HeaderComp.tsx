import clsx from "clsx";
import { motion } from "framer-motion";
import { IExperienceData } from "../ExperienceContainer";
import React from "react";

interface IProps {
  scrollProgress: number;
  data: IExperienceData[];
  content: 0 | 1 | 2 | 3 | 4;
}

const HeaderComp = ({ scrollProgress, data, content }: IProps): JSX.Element => {
  const handeltitle = () => {
    if (content === 0) {
      return "1.개선사항";
    } else {
      return data[content - 1].title;
    }
  };

  return (
    <div className={clsx(scrollProgress === 0 && "hidden")}>
      <div className="flex items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.2 }}
          className="h-[2px] bg-gradient-to-r from-purple-500 via-red-500 to-indigo-700"
        ></motion.div>
        <div className="relative">
          <div className="absolute w-[10px] h-[10px] bg-white rounded-full animate-ping"></div>
          <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
        </div>
      </div>
      <div
        className={clsx(
          "pt-[2rem] flex text-white text-[2rem] font-bold",
          "mobile:text-[1.2rem]"
        )}
      >
        <motion.h1 animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
          {handeltitle()}
        </motion.h1>
      </div>
    </div>
  );
};
export default React.memo(HeaderComp);
