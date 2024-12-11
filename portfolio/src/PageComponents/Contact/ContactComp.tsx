import { FaMailBulk, FaPhone } from "react-icons/fa";
import { MdWhereToVote } from "react-icons/md";
import { ContactMe } from "../../Component/Email";
import clsx from "clsx";

interface IProps {
  ContactRef: React.RefObject<HTMLDivElement>;
}

const ContactComp = ({ ContactRef }: IProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "relative max-w-[1440px] mx-auto cursor-pointer flex justify-center z-[30] ",
        "laptop: max-w-[1200px]"
      )}
    >
      <div
        className={clsx(
          "flex px-[1rem] pb-[5rem] w-[100%] pt-20 items-center justify-center ",
          "tablet:flex-col",
          "mobile:px-0 mobile:flex-col"
        )}
      >
        <div
          className={clsx(
            "px-[2rem] py-[4rem] mx-auto z-0 relative flex max-w-[20rem] items-center",
            "desktop:hidden",
            "laptop:hidden"
          )}
        >
          <h1 className="mx-auto relative z-20  px-5 py-2  w-fit rounded-[0.5rem] font-bold text-[1.5rem] text-white bg-purple-950">
            Contact
          </h1>
        </div>
        <ContactMe className={clsx("w-[30rem]", "mobile:w-[20rem]")} />
        <div
          ref={ContactRef}
          className={clsx(
            "desktop:ps-[5rem]",
            "laptop:ps-[5rem]",
            "tablet:py-[2rem]",
            "mobile:py-[2rem]"
          )}
        >
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
        <div
          className={clsx(
            "absolute px-[2rem] flex items-center rotate-90 right-0 ",
            "tablet:hidden",
            "mobile:hidden"
          )}
        >
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
