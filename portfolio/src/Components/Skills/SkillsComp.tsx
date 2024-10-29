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
    <div className="w-[100%] h-screen  px-20 pb-20">
      <div className="text-[3rem]" ref={ref}>
        Skills
      </div>
      <div className="flex w-[100%] h-[100%] items-center">
        <div className="flex">
          {tab === 3 ? (
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div
                className="grid grid-cols-4 "
                onMouseLeave={() => {
                  setskill(0);
                }}
              >
                {icons.map(
                  (item: IICon, idx: number) =>
                    tab === 3 && (
                      <motion.div
                        initial={{ translateY: -20 }}
                        animate={{ translateY: 0 }}
                        transition={{ delay: idx / 10, duration: 1 }}
                        className={`m-10 flex flex-col items-center ${
                          skill === idx + 1 && "animate-pulse"
                        }`}
                        key={idx}
                        onMouseOver={() => {
                          setskill(idx + 1);
                        }}
                      >
                        {item.icon}
                        <div className="absolute  translate-y-14 text-[0.8rem] ">
                          {item.name}
                        </div>
                      </motion.div>
                    )
                )}
              </div>
            </motion.div>
          ) : (
            <div>
              <div
                className="grid grid-cols-4 "
                onMouseLeave={() => {
                  setskill(0);
                }}
              >
                {icons.map((item: IICon, idx: number) => (
                  <div
                    className="m-10 flex flex-col items-center"
                    key={idx}
                    onMouseOver={() => {
                      setskill(idx + 1);
                    }}
                  >
                    {item.icon}
                    <div className="absolute  translate-y-14 text-[0.8rem] ">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div
            className={`ms-40 p-10 w-[40rem] border rounded-[0.5rem] text-[1.2rem] whitespace-break-spaces`}
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
