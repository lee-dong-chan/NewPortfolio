import { Link } from "react-router-dom";
import { IAboute } from "./AboutContainer";
import { FaBloggerB, FaGithub } from "react-icons/fa";
import CodeBox from "../../Component/CodeBox";
import AbouteContent from "../../Component/AbouteContent";
import clsx from "clsx";

interface IProps {
  about: IAboute;
}

const AbouteComp = ({ about }: IProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "mx-auto relative pb-10 cursor-pointer w-[1440px]",
        "laptop:w-[1200px]"
      )}
    >
      <div className="pt-[4rem] flex justify-between">
        <div>
          <div className="text-white text-[3rem] font-bold">
            <p>안녕하세요,</p>
            <p>
              저는 <span className="text-green-400">신입프론트엔드</span>
              개발자,
            </p>
            <p>
              <span className="text-pink-400">{about.name}</span>입니다.
            </p>
          </div>
          <div className="py-[3rem] flex gap-5 items-center">
            <Link to={`${about.Link[0].link}`} target="_blank">
              <FaGithub
                className="hover:scale-[1.2]"
                size={40}
                color="hotpink"
              />
            </Link>
            <Link to={`${about.Link[1].link}`} target="_blank">
              <FaBloggerB
                className="hover:scale-[1.2]"
                size={40}
                color="hotpink"
              />
            </Link>
          </div>
        </div>
        <CodeBox className="w-[40rem] h-[25rem]">
          <AbouteContent about={about} />
        </CodeBox>
      </div>
      <div className="flex pt-[2.5rem] justify-between">
        <div>
          <h1 className="text-[2rem] font-bold text-green-300">Who I am?</h1>
          <div className="text-white">
            <p>소개글</p>
          </div>
        </div>
        <div className="pt-[2rem] flex">
          <img
            className={clsx(
              "w-[20rem] h-[22rem] rounded-[1rem] grayscale",
              "hover:scale-[1.2] hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out hover:grayscale-0  "
            )}
            src={about.img}
            alt="profile"
          ></img>

          <div className="flex items-center rotate-90 ">
            <p className="px-5 py-2 rounded-[0.5rem] text-[1.2rem] font-bold text-white bg-purple-950">
              ABOUT ME
            </p>
            <div className="h-[1px] w-[4rem] border border-purple-950"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AbouteComp;
