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
    <div className="w-screen h-screen">
      <div className="p-20">
        <div className="flex font-bold">
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
