import { CgWebsite } from "react-icons/cg";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileCode } from "react-icons/pi";
import { CiBoxList } from "react-icons/ci";
import clsx from "clsx";
import OverviewComp from "./OverviewComp";
export interface ICareer {
  career: { icon: JSX.Element; title: string; content: JSX.Element[] }[];
}

interface IProps {
  OverviewRef: React.RefObject<HTMLDivElement>;
}

const OverviewContainer = ({ OverviewRef }: IProps): JSX.Element => {
  const textGradiant = clsx(
    "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-300 to-indigo-500 font-bold"
  );
  const Profile: ICareer = {
    career: [
      {
        icon: <IoLogoJavascript size={30} color="purple" />,
        title: "Language",
        content: [
          <li className={textGradiant}>JavaScript</li>,
          <li className={textGradiant}>TypeScript</li>,
        ],
      },
      {
        icon: <CgWebsite size={30} color="purple" />,
        title: "FrontEnd",
        content: [
          <li>
            <span className={textGradiant}>Next.js</span>,
            <span className={textGradiant}>React</span> 사용 선호
          </li>,
          <li>
            상태관리 <span className={textGradiant}>ReactQuery</span> 사용 선호
          </li>,
          <li>전역상태 사용 경험있음</li>,
          <li>
            <span className={textGradiant}>TailwindCss</span> 사용가능
          </li>,
          <li>반응형 페이지 구현 경험</li>,
        ],
      },
      {
        icon: <PiFileCode size={30} color="purple" />,
        title: "BackEnd",
        content: [
          <li>
            <span className={textGradiant}>RestAPI</span> 및
            <span className={textGradiant}>ERD</span> 작성가능
          </li>,
          <li>
            <span className={textGradiant}>Mysql</span> 데이터 베이스를 구축가능
          </li>,
          <li>
            백엔드 서버 구축 가능 <span className={textGradiant}>Nest</span>,
            <span className={textGradiant}>Express</span>
          </li>,
        ],
      },
      {
        icon: <CiBoxList size={30} color="purple" />,
        title: "Etc",
        content: [
          <li>
            <span className={textGradiant}>Git/GitHub</span>를 통한 협업가능
          </li>,
          <li>
            <span className={textGradiant}>GitHub Actions</span>를 통한 CI/CD
            파이프라인 구축 경험
          </li>,
          <li>
            <span className={textGradiant}>AWS EC2</span>,
            <span className={textGradiant}>NgineX</span>를 통한 프로젝트 배포
            가능
          </li>,
          <li>
            <span className={textGradiant}>AWS Route53</span>을 사용하여
            서브도메인 사용가능
          </li>,
          <li>
            <span className={textGradiant}>Figma</span>를 사용하여 프로젝트 계획
            수립가능
          </li>,
        ],
      },
    ],
  };

  return <OverviewComp Profile={Profile} CareerRef={OverviewRef} />;
};
export default OverviewContainer;
