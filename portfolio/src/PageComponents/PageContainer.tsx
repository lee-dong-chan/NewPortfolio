import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./Header/Header";

import SkillsContainer from "./Skills/SkillsContainer";
import ProjectContainer from "./Project/ProjectContainer";

import AboutContainer from "./About/AboutContainer";
import ContactContainer from "./Contact/ContactContainer";
import { FaArrowUp } from "react-icons/fa";
import clsx from "clsx";
import { motion } from "framer-motion";
import OverviewContainer from "./Summation/OverviewContainer";
import ExperienceContainer from "./Experience/ExperienceContainer";
export interface IRefs {
  Aboute: React.RefObject<HTMLDivElement>;
  Overview: React.RefObject<HTMLDivElement>;
  Skills: React.RefObject<HTMLDivElement>;
  Project: React.RefObject<HTMLDivElement>;
  Contact: React.RefObject<HTMLDivElement>;
  Experience: React.RefObject<HTMLDivElement>;
}
const Tabs: string[] = [
  "About",
  "Career",
  "Skills",
  "Project",
  "Experience",
  "Contact",
];

const PageContainer = (): JSX.Element => {
  const [, settab] = useState<number>(0);
  const [position, setposition] = useState<number>(0);
  const Refs: IRefs = {
    Aboute: useRef<HTMLDivElement>(null),
    Overview: useRef<HTMLDivElement>(null),
    Skills: useRef<HTMLDivElement>(null),
    Project: useRef<HTMLDivElement>(null),
    Contact: useRef<HTMLDivElement>(null),
    Experience: useRef<HTMLDivElement>(null),
  };

  const CheckScreen = useCallback(() => {
    setposition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", CheckScreen);
    return () => {
      window.removeEventListener("scroll", CheckScreen);
    };
  }, [CheckScreen]);

  return (
    <div className="relative w-[100%] h-fit bg-gradient-to-r from-indigo-950 from-10% via-indigo-700 via-50% to-indigo-950 to-90%">
      <div
        className={`absolute w-[100%] h-[100%] bg-black opacity-[0.7] z-[15] `}
      ></div>
      <img
        className="absolute w-[100%] h-[100%]  z-[-10]  opacity-[0.2] z-[10]"
        src="/imgs/back.png"
        alt="back"
      ></img>
      <motion.img
        animate={{ opacity: [0, 0.1, 0.2, 0.1, 0] }}
        transition={{ opacity: { duration: 10, repeat: Infinity } }}
        className="fixed w-screen h-[100%] z-[5] opacity-[0.2]"
        src="/imgs/back2.png"
        alt="back"
      ></motion.img>

      {position > 300 && (
        <div
          className={clsx(
            "fixed  p-[1px]  w-[3rem] h-[3rem] rounded-[3rem] z-[100]  right-10 bottom-10  bg-gradient-to-r from-indigo-500 from-40% via-pink-500 via-60% to-indigo-500 animate-pulse",
            "hover:scale-[1.2] hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out"
          )}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-[100%] h-[100%] flex items-center justify-center rounded-[3rem] bg-indigo-950">
            <FaArrowUp color="white" />
          </div>
        </div>
      )}
      <Header Tabs={Tabs} setTab={settab} Refs={Refs} />
      <AboutContainer AboutRef={Refs.Aboute} />
      <OverviewContainer OverviewRef={Refs.Overview} />
      <SkillsContainer SkillsRef={Refs.Skills} />
      <ProjectContainer ProjectRef={Refs.Project} position={position} />
      <ExperienceContainer ExperienceRef={Refs.Experience} />
      <ContactContainer ContactRef={Refs.Contact} />
    </div>
  );
};

export default PageContainer;
