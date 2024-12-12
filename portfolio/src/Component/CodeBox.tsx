import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
interface IProps {
  title?: string;
  className?: string;
  children?: ReactNode;
}

const CodeBox = ({ className, children, title }: PropsWithChildren<IProps>) => {
  return (
    <motion.div
      className={`${clsx(
        className &&
          `${className} p-[1px] rounded-[1rem] bg-gradient-to-r from-indigo-500 from-40% via-pink-500 via-60% to-indigo-500 `,
        !className &&
          `p-[1px] w-[40rem] h-[25rem] rounded-[1rem] bg-gradient-to-r from-indigo-500 from-40% via-pink-500 via-60% to-indigo-500 `
      )} `}
    >
      <div className="w-[100%] h-[100%] rounded-[1rem] overflow-hidden ">
        <div className="relative w-[100%] h-[3rem] p-[1rem] bg-indigo-950 flex items-center">
          <div className="absolute flex gap-3">
            <div className="w-[0.7rem] h-[0.7rem] rounded-[0.7rem] bg-red-500"></div>
            <div className="w-[0.7rem] h-[0.7rem] rounded-[0.7rem] bg-yellow-500"></div>
            <div className="w-[0.7rem] h-[0.7rem] rounded-[0.7rem] bg-green-500"></div>
          </div>
          {title && (
            <div className="w-[100%] flex justify-center">
              <p
                className={clsx(
                  "text-green-300 font-bold text-[1.2rem]",
                  "mobile:text-[1rem]"
                )}
              >
                {title}
              </p>
            </div>
          )}
        </div>
        <div className="mt-[1px] w-[100%] h-[100%] bg-indigo-950">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
export default CodeBox;
