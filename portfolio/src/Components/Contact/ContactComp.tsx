import { useEffect, useRef } from "react";
import { Observer } from "../../lib/Observer";
import {
  FaArrowAltCircleUp,
  FaArrowUp,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

interface IProps {
  view: boolean;
  setview: React.Dispatch<React.SetStateAction<boolean>>;
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

const ContactComp = ({ view, setview, tab, setTab }: IProps) => {
  const ref = useRef(null);
  useEffect(() => {
    if (view) {
      setTab(5);
    }
  }, [view]);
  useEffect(() => {
    Observer({ state: setview, ref: ref });
  }, []);
  return (
    <div className="w-[100%] px-20 pb-20">
      <div className="text-[3rem]" ref={ref}>
        Contact
      </div>
      <div className="pt-20 flex justify-between">
        <div>
          <div className="flex items-center gap-5">
            <div>
              <FaPhone size={30} />
            </div>
            <div className="text-[2rem]">010-2030-4394</div>
          </div>
          <div className="pt-10 flex items-center gap-5">
            <div>
              <FaMailBulk size={30} />
            </div>
            <div className="text-[2rem]">dsongc3082@naver.com</div>
          </div>
        </div>
        <div
          className="w-[5rem] h-[5rem] flex items-center justify-center rounded-[5rem]  bg-black animate-bounce"
          onClick={() => {
            setTab(1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <FaArrowUp color="white" size={30} />
        </div>
      </div>
    </div>
  );
};
export default ContactComp;
