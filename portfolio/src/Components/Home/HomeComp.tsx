import { useEffect, useRef } from "react";
import { Observer } from "../../lib/Observer";

interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  view: boolean;
  setview: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeComp = ({ tab, setTab, view, setview }: IProps): JSX.Element => {
  const ref = useRef(null);

  useEffect(() => {
    if (view) {
      setTab(1);
    }
  }, [view, setTab]);

  useEffect(() => {
    Observer({ state: setview, ref: ref });
  }, [setview]);
  return (
    <div className="w-screen relative h-screen  pb-10 cursor-pointer">
      <img
        className="w-[100%] h-[100%] absolute z-[-20] opacity-[0.2]"
        src="/imgs/back.png"
        alt="back"
      ></img>
      <div className="absolute w-[100%] h-[30rem] bottom-0  bg-gradient-to-t from-white from-20%"></div>
      <div className=" px-20 pt-40 ">
        <div className="flex font-bold ">
          <div className="p-1 bg-gray-200">LeeDongChan</div>
          <div className="w-[8rem] py-1 ps-3 bg-stone-400">Portfolio</div>
        </div>
        <div className="text-[4rem]" ref={ref}>
          Dev.Front
        </div>
      </div>
    </div>
  );
};
export default HomeComp;
