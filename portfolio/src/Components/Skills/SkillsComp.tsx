import { useEffect, useRef } from "react";
import { Observer } from "../../lib/Observer";
import { IICon } from "./SkillsContainer";
import { FaArrowDown } from "react-icons/fa";

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
  }, [view]);

  useEffect(() => {
    Observer({ state: setview, ref: ref });
  }, []);
  return (
    <div className="w-[100%] h-screen  px-20 pb-20">
      <div className="text-[3rem]" ref={ref}>
        Skills
      </div>
      <div className="flex w-[100%] h-[100%] items-center">
        <div className="flex">
          <div className="relative">
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
            <div className="absolute flex top-0 right-[-5rem] ">
              <FaArrowDown size={40} className="rotate-45 " />
              <div className="font-bold">Hover Icon</div>
            </div>
          </div>
          <div
            className={`ms-40 p-10 w-[35rem] border rounded-[0.5rem] rext-[1.2rem]`}
          >
            {content.map((item: string, idx: number) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillsComp;
