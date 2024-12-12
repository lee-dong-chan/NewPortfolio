import { Link } from "react-router-dom";
import { IAboute } from "./AboutContainer";
import { FaBloggerB, FaGithub } from "react-icons/fa";
import CodeBox from "../../Component/CodeBox";
import AbouteContent from "../../Component/AbouteContent";
import clsx from "clsx";

interface IProps {
  about: IAboute;
  AboutRef: React.RefObject<HTMLDivElement>;
}

const AbouteComp = ({ about, AboutRef }: IProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "mx-auto relative pb-10 cursor-pointer max-w-[1440px] z-[30]",
        "laptop: max-w-[1200px]",
        "tablet: max-w-[1024px]"
      )}
      ref={AboutRef}
    >
      <div
        className={clsx(
          "pt-[4rem] flex",
          "laptop: justify-between",
          "desktop:justify-between",
          "tablet: px-[2rem] tablet:flex-col-reverse  tablet:gap-[1rem]",
          "mobile:px-[1rem] mobile:flex-col-reverse  mobile:gap-[1rem]"
        )}
      >
        <div>
          <div
            className={clsx(
              "px-[1rem] max-w-[37rem] text-white text-[3rem] font-bold",
              "laptop:text-[3rem] max-w-[34rem]",
              "tablet:pt-[2rem] tablet:text-[2.5rem] max-w-[28rem]",
              "mobile:pt-[2rem] mobile:text-[2.3rem]"
            )}
          >
            <p>안녕하세요,</p>
            <span>
              <span>
                저는 <span className="text-green-400">신입프론트엔드</span>
                개발자,
              </span>
              <span>
                <span className="text-pink-400">{about.name}</span>입니다.
              </span>
            </span>
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
        <CodeBox
          className={clsx(
            "mx-[1rem] max-w-[40rem] max-h-[30rem]",
            "tablet:max-w-[100%] tablet:max-h-[40rem]",
            "mobile:mx-0 w-[100%] mobile:max-h-[40rem]"
          )}
        >
          <AbouteContent about={about} />
        </CodeBox>
      </div>
      <div
        className={clsx(
          "pt-[2.5rem] flex",
          // "laptop: justify-between ",
          // "desktop: justify-between ",
          "tablet:flex-col-reverse gap-[1rem]",
          "mobile:flex-col-reverse gap-[1rem]"
        )}
      >
        <div className={"px-[2rem]"}>
          <h1 className="text-[2rem] font-bold text-green-300">Who I am?</h1>
          <div className="py-[2rem] text-[1.1rem] max-w-[45rem]  text-white font-bold">
            <p>
              <span className="pe-1">
                신입 프론트엔드 개발자 이동찬 입니다.
              </span>
              <span className="pe-1">
                저는 새로운 기술을 배워나가기 위해 노력하는 자세와 문제
                해결의지를 가지고 있으며 스스로 학습하는것을 중요하게
                생각합니다.
              </span>
              <span className="pe-1">
                자바스크립트를 기반으로 두고있으며, 타입스크립트 및 리액트를
                사용하여 프로젝트를 만드는것을 선호합니다.
              </span>
              <span className="pe-1">
                한자리에 머물러 있지않고 꾸준하게 나아가는 프론트엔드 개발자가
                되고 싶습니다.
              </span>
            </p>
          </div>
        </div>
        <div className={"py-[1rem] flex"}>
          <img
            className={clsx(
              "w-[16rem] h-[18rem] rounded-[1rem] opacity-[0.9] z-40 ",
              "hover:scale-[1.2] hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out hover:opacity-[1]",
              "tablet:mx-auto",
              "mobile:mx-auto"
            )}
            src={about.img}
            alt="profile"
          ></img>

          <div
            className={clsx(
              "absolute flex items-center rotate-90 block  right-0 bottom-[20%] ",
              "tablet:hidden",
              "mobile:hidden"
            )}
          >
            <p className=" px-5 py-2 rounded-[0.5rem] text-[1.2rem] font-bold text-white bg-purple-950">
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
