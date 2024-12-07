import { FaMailBulk, FaPhone } from "react-icons/fa";
import { MdWhereToVote } from "react-icons/md";
import { ContactMe } from "../../Component/Email";
import clsx from "clsx";

interface IProps {}

const ContactComp = ({}: IProps) => {
  return (
    <div
      className={clsx(
        "relative mx-auto pt-20 max-w-[1440px] h-[50rem]  cursor-pointer",
        "laptop:max-w-[1200px]"
      )}
    >
      <div className="w-fit mx-auto pt-20 flex items-center">
        <ContactMe />
        <div className="ps-[15rem]">
          <div className="p-5 flex items-center gap-5">
            <div className="border p-[0.4rem] rounded-[1rem] bg-purple-300">
              <FaMailBulk size={20} />
            </div>
            <div className="text-white text-[1.2rem] font-bold">
              dsongc3082@naver.com
            </div>
          </div>
          <div className="p-5 flex items-center gap-5">
            <div className="border p-[0.4rem] rounded-[1rem] bg-purple-300">
              <FaPhone size={20} />
            </div>
            <div className="text-white text-[1.2rem]  font-bold">
              010-2030-4394
            </div>
          </div>
          <div className="p-5 flex items-center gap-5">
            <div className="border p-[0.4rem] rounded-[1rem] bg-purple-300">
              <MdWhereToVote size={20} />
            </div>
            <div className="text-white text-[1.2rem]  font-bold">
              경기도 남양주시 와부읍 거주
            </div>
          </div>
        </div>
        <div className="px-[2rem] flex items-center rotate-90 translate-y-[-5rem] ">
          <p className="px-5 py-2 rounded-[0.5rem] text-[1.2rem] font-bold text-white bg-purple-950">
            CONTACT
          </p>
          <div className="h-[1px] w-[4rem]  border border-purple-950"></div>
        </div>
      </div>
    </div>
  );
};
export default ContactComp;
