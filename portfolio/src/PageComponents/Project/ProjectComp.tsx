import clsx from "clsx";
import CodeBox from "../../Component/CodeBox";
import { IProject } from "./ProjectContainer";
import ProjectContent from "../../Component/ProjectContent";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
interface IProps {
  project: IProject[];
  ProjectRef: React.RefObject<HTMLDivElement>;
  position: number;
}

const ProjectComp = ({ project, ProjectRef, position }: IProps) => {
  const [tab, settab] = useState<number>(0);
  const [imgNumber, setImgNumber] = useState<number>(0);
  const Ref = {
    ref1: useRef<HTMLDivElement>(null),
    ref2: useRef<HTMLDivElement>(null),
    ref3: useRef<HTMLDivElement>(null),
    ref4: useRef<HTMLDivElement>(null),
    ref5: useRef<HTMLDivElement>(null),
  };
  const Refs = Object.values(Ref);
  const Key = [tab, imgNumber].join("-");
  useEffect(() => {
    if (Ref.ref1.current && Ref.ref1.current?.getBoundingClientRect().top > 90)
      settab(0);
    if (Ref.ref1.current?.getBoundingClientRect().top === 90) {
      settab(1);
    }
    if (Ref.ref2.current?.getBoundingClientRect().top === 90) settab(2);
    if (Ref.ref3.current?.getBoundingClientRect().top === 90) settab(3);
    if (Ref.ref4.current?.getBoundingClientRect().top === 90) settab(4);
    if (
      Ref.ref5.current &&
      Ref.ref5.current?.getBoundingClientRect().top < 90
    ) {
      settab(5);
    }
  }, [position, Ref.ref1, Ref.ref2, Ref.ref3, Ref.ref4, Ref.ref5]);

  useEffect(() => {
    if (imgNumber !== 0) {
      setImgNumber(0);
    }
  }, [tab]);

  return (
    <div
      className={clsx(
        "relative max-w-[1440px] mx-auto cursor-pointer overflow-visible z-[30] ",
        "laptop:max-w-[1200px]"
      )}
    >
      <div className="px-[2rem]  flex items-center  " ref={ProjectRef}>
        <div
          className={clsx(
            "relative border  z-10 max-w-[100%] h-[1px] border-purple-950",
            "mobile:hidden"
          )}
        ></div>
        <h1 className="absolute z-20  px-5 py-2  w-fit rounded-[0.5rem] font-bold text-[1.5rem] text-white bg-purple-950">
          Project
        </h1>
      </div>
      <div className="w-[100%] flex">
        <div
          className={clsx(
            "relative py-[4rem] w-[100%] flex flex-col  gap-[40rem] ",
            "mobile:px-2 mobile:py-[2rem]"
          )}
        >
          {project.map((item: IProject, idx: number) => (
            <div
              key={idx}
              className={clsx(
                "px-[2rem] w-[100%] sticky z-[20] top-10 flex  gap-[4rem]  justify-center ",
                tab !== 0 &&
                  "desktop:px-[2rem] desktop:justify-between desktop:transition   desktop:duration-500 ",
                tab !== 0 &&
                  "laptop:px-[2rem] laptop:justify-between laptop:transition  laptop:duration-500",

                tab === 0 &&
                  "desktop:px-[2rem]  desktop:transition  desktop:duration-500",
                tab === 0 &&
                  "laptop:px-[2rem]  laptop:transition laptop:duration-500 "
              )}
            >
              {tab !== 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    translateX: [-20, 0],
                    opacity: [0, 1],
                    width: ["0rem", "30rem"],
                  }}
                  transition={{
                    translateX: {
                      type: "spring",
                      damping: 5,
                      duration: 0.2,
                      delay: 0.5,
                    },
                    opacity: { duration: 0.5 },
                    width: { delay: 0.5, duration: 0.5 },
                  }}
                  className={clsx(
                    "relative mt-[4rem]  rounded-[1rem]  h-[30rem] ",
                    tab !== 0 && tab !== idx + 1 && "hidden",
                    "tablet:hidden",
                    "mobile:hidden"
                  )}
                >
                  <div className="relative  w-[100%] h-[100%] rounded-[1rem] z-[15] overflow-hidden">
                    <img
                      className={`w-[100%] h-[100%]`}
                      src={`/imgs/${project[idx].img[imgNumber]}`}
                      alt="project"
                    ></img>
                  </div>
                  <motion.div
                    key={Key}
                    animate={{
                      opacity: [1, 0.5, 0],
                      translateX: 20,
                      translateY: -20,
                    }}
                    transition={{ opacity: { duration: 0.5 } }}
                    className="absolute left-[5px] top-[5px]  w-[100%] h-[100%] rounded-[1rem] bg-white opacity-[0.5] z-[10]"
                  ></motion.div>
                  <div className="absolute left-[10px] top-[10px]  w-[100%] h-[100%] rounded-[1rem] bg-white opacity-[0.2] z-[5]"></div>
                  {tab !== 0 && (
                    <motion.ul className="absolute py-[2rem] w-[100%] flex justify-center gap-2 ">
                      {project[idx].img.map((item, idx: number) => (
                        <motion.li
                          key={idx}
                          animate={{ translateY: [10, 0], opacity: [0, 1] }}
                          transition={{
                            translateY: { delay: `1.${idx}` },
                            opacity: { delay: `1.${idx}` },
                          }}
                          className={
                            "relative p-[1px] w-[15px] h-[15px] border-gray-500 rounded bg-purple-700  "
                          }
                          onClick={() => {
                            setImgNumber(idx);
                          }}
                        >
                          <div
                            className={clsx(
                              "w-[100%] h-[100%]  rounded ",
                              imgNumber === idx
                                ? "bg-purple-400"
                                : "bg-indigo-950"
                            )}
                          ></div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              )}

              {tab !== 0 && tab !== idx + 1 && (
                <div
                  className={clsx(
                    "relative max-w-[28rem] max-h-[28rem] z-[-20]",
                    "tablet:hidden tablet:absolute ",
                    "mobile:hidden mobile:absolute "
                  )}
                ></div>
              )}

              <CodeBox
                className={clsx(
                  `max-w-[50rem] h-[50rem]  `,
                  "laptop:max-w-[40rem]",
                  "mobile:top-0 mobile:h-[45rem] mobile:w-[100%]",
                  "tablet:w-[100%]"
                )}
                key={idx}
                title={item.title}
              >
                <div ref={Refs[idx]}></div>
                <ProjectContent projectData={item} />
              </CodeBox>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectComp;
