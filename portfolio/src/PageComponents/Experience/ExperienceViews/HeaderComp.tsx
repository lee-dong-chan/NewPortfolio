import clsx from "clsx";
import { motion } from "framer-motion";
import { IExperienceData } from "../ExperienceContainer";

interface IProps {
  scrollProgress: number;
  data: IExperienceData[];
  content: number;
}

const HeaderComp = ({ scrollProgress, data, content }: IProps): JSX.Element => {
  return (
    <div
      className={clsx(
        (scrollProgress === 100 && "hidden") ||
          (scrollProgress === 0 && "hidden")
      )}
    >
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
      <div className="pt-[2rem] flex text-white text-[2rem] font-bold">
        {content === 0 && (
          <motion.h1
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            1.개선사항
          </motion.h1>
        )}
        {content === 1 && (
          <motion.h1
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            {data[0].title}
          </motion.h1>
        )}
        {content === 2 && (
          <motion.h1
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            {data[1].title}
          </motion.h1>
        )}
        {content === 3 && (
          <motion.h1
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            {data[2].title}
          </motion.h1>
        )}
        {content === 4 && (
          <motion.h1
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            {data[3].title}
          </motion.h1>
        )}
      </div>
    </div>
  );
};
export default HeaderComp;
