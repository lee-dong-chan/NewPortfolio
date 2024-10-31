import { useEffect, useRef } from "react";
import { Observer } from "../../lib/Observer";
import { IICon } from "./SkillsContainer";
import { motion } from "framer-motion";
interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  view: boolean;
  setview: React.Dispatch<React.SetStateAction<boolean>>;
  icons: IICon[];
  skill: number;
  setskill: React.Dispatch<React.SetStateAction<number>>;
  content: string[];
}

const SkillsComp = ({
  tab,
  setTab,
  view,
  setview,
  icons,
  skill,
  setskill,
  content,
}: IProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (view) {
      setTab(3);
    }
  }, [view, setTab]);

  useEffect(() => {
    Observer({ state: setview, ref: ref });
  }, [setview]);
  return (
    <div className="w-screen h-screen  px-20 pb-10  cursor-pointer">
      <div className="text-[3rem] " ref={ref}>
        Skills
      </div>
      <div className="flex w-[100%] ">
        <div className="flex">
          <motion.div
            className="relative pe-[10rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            key={tab}
          >
            <div
              className="grid grid-cols-4 "
              onMouseLeave={() => {
                setskill(0);
              }}
            >
              {icons.map((item: IICon, idx: number) => (
                <div key={idx}>
                  <motion.div
                    initial={{ translateY: -20 }}
                    animate={{ translateY: 0 }}
                    transition={{ delay: idx / 10, duration: 1 }}
                    className={`p-10 flex flex-col items-center ${
                      skill === idx + 1 && "animate-pulse"
                    }`}
                    key={tab}
                    onMouseOver={() => {
                      setskill(idx + 1);
                    }}
                  >
                    {item.icon}
                    <div className="absolute  translate-y-14 text-[0.8rem] ">
                      {item.name}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <div
            className={`ps-10 p-10 w-[40rem] border rounded-[0.5rem] text-[1.2rem]`}
          >
            {content.map((item: string, idx: number) => (
              <div className="p-1" key={idx}>
                <span>-</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillsComp;
