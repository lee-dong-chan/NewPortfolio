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
          "mobile:px-[1rem] mobile:pt-[2rem] mobile:flex-col-reverse  mobile:gap-[1rem]"
        )}
      >
        <div>
          <div
            className={clsx(
              "px-[1rem] max-w-[37rem] text-white text-[3rem] font-bold",
              "laptop:text-[2.7rem] max-w-[34rem]",
              "tablet:pt-[2rem] tablet:text-[2.5rem] max-w-[28rem]",
              "mobile:pt-[2rem] mobile:text-[2.3rem] mobile:text-[2rem]"
            )}
          >
            <p>안녕하세요,</p>

            <span>
              저는 <span>문제점을 찾기보다 해결책을 찾는 </span>
              <span className="text-green-400">프론트엔드</span>
              개발자,
            </span>
            <span>
              {<br className="hidden laptop:block" />}
              <span className="text-pink-400">{about.name}</span>입니다.
            </span>
          </div>
          <div className="py-[3rem] px-[1rem] flex gap-5 items-center">
            <Link to={`${about.Link[0].link}`} target="_blank">
              <FaGithub
                className="hover:scale-[1.2]"
                size={30}
                color="hotpink"
              />
            </Link>
            <Link to={`${about.Link[1].link}`} target="_blank">
              <FaBloggerB
                className="hover:scale-[1.2]"
                size={30}
                color="hotpink"
              />
            </Link>
          </div>
        </div>
        <CodeBox
          className={clsx(
            "mx-[1rem] max-w-[40rem] max-h-[30rem]",
            "tablet:mx-auto w-[100%] tablet:max-h-[40rem]",
            "mobile:mx-0  w-[100%] mobile:max-h-[40rem]"
          )}
        >
          <AbouteContent about={about} />
        </CodeBox>
      </div>
      <div
        className={clsx(
          "pt-[2.5rem] flex",

          "tablet:flex-col-reverse gap-[1rem]",
          "mobile:flex-col-reverse gap-[1rem]"
        )}
      >
        <div className={"px-[2rem]"}>
          <h1
            className={clsx(
              "text-[2rem] font-bold text-green-300",
              "mobile:text-[1.5rem]"
            )}
          >
            Who I am?
          </h1>
          <div className="py-[2rem]  max-w-[45rem]  text-white ">
            {about.strength.map(
              (
                item: {
                  title: string;
                  content: string[];
                },
                idx: number
              ) => (
                <ul key={idx}>
                  <h1
                    className={clsx(
                      "py-[1rem] text-[1.5rem] font-bold text-indigo-300 ",
                      "mobile:text-[1.1rem]"
                    )}
                  >
                    {item.title}
                  </h1>
                  {item.content.map((item: string, idx: number) => (
                    <li
                      className={clsx(
                        "px-[1rem] py-[2px] text-[1.1rem]",
                        "mobile:text-[0.8rem]"
                      )}
                      key={idx}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
        <div className={"py-[1rem] flex items-center"}>
          <img
            className={clsx(
              "w-[16rem] h-[18rem] rounded-[1rem]  z-40 ",
              "hover:scale-[1.2] hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out ",
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
