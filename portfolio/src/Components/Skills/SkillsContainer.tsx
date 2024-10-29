import { useMemo, useState } from "react";
import SkillsComp from "./SkillsComp";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiCss3,
  SiExpress,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiReactquery,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa";

export interface IICon {
  icon: JSX.Element;
  name: string;
}
interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

const SkillsContainer = ({ tab, setTab }: IProps): JSX.Element => {
  const [view, setview] = useState<boolean>(false);
  const [skill, setskill] = useState<number>(0);
  const icons: IICon[] = useMemo(() => {
    return [
      { icon: <IoLogoJavascript size={50} />, name: "JavaScript" },
      { icon: <SiTypescript size={50} />, name: "TypeScript" },
      { icon: <FaHtml5 size={50} />, name: "HTML" },
      { icon: <SiCss3 size={50} />, name: "CSS" },
      { icon: <SiTailwindcss size={50} />, name: "TailwindCSS" },
      { icon: <FaReact size={50} />, name: "React" },
      { icon: <SiReactquery size={50} />, name: "ReactQuery" },
      { icon: <SiNextdotjs size={50} />, name: "Next.js" },
      { icon: <SiExpress size={50} />, name: "Express.js" },
      { icon: <SiSequelize size={50} />, name: "Sequelize" },
      { icon: <SiMysql size={50} />, name: "Mysql" },
      { icon: <SiNestjs size={50} />, name: "Nest.js" },
      { icon: <FaFigma size={50} />, name: "Figma" },
      { icon: <FaAws size={50} />, name: "AWS(EC2,Route53)" },
      { icon: <FaGithub size={50} />, name: "Git/GitHub" },
    ];
  }, []);

  const content = useMemo(() => {
    switch (skill) {
      case 1:
        return [
          "Promise문법을 이해하고 async await 를 사용하여 비동기 이벤트를 동기적으로 작성할수 있음",
          "프로젝트를 진행하여 hoisting과 closer를 이해하고 사용하엿습니다.",
        ];
      case 2:
        return [
          "TypeScript로 정적타입을 지정하여 React,Next.js 를 사용한 프로젝트를 구현한 경험이 있습니다.",
          "interface를 통한 정적타입 지정으로 컴파일시 에러를 방지하엿습니다.",
          "제네릭 타입을 사용하여 타입을 유연하게 지정한 하엿습니다.",
        ];
      case 3:
        return [
          "HTML를 사용하여 페이지를 구현하는 프로젝트의 경험이 있습니다.",
          "태그를 적절히 사용하여 페이지를 구현할 수 있습니다.",
        ];
      case 4:
        return [
          "여러 프로젝트에서 CSS를 다양하게 활용하여 페이지를 구현한경험이 있습니다.",
          "웹페이지의 디자인 조정, padding 또는 margin을 사용하여 페이지 레이아웃 조정 ,Flex나 grid를 활용하여 반응형 디자인 적용, transition을 사용하여 애니메이션을 구현 등을 할수 있습니다",
        ];
      case 5:
        return [
          "React와 Next를 사용한 프로젝트에서 적용하여 사용한 경험이 있습니다.",
          "HTML에 직접 클래스를 적용하여 스타일요소을 지정하여 빠른 프로젝트 구축을 할수 있습니다.",
          "커스텀 클래스를 지정하여 새로운 스타일요소을 지정할수 있습니다.",
        ];

      case 6:
        return [
          "CSR방식의 SPA 구현 프로젝트 에서 적용하여 사용한 경험이 있습니다.",
          "페이지를 적절히 컨테이너와 컴포넌트로 분할하여 구현하고 Props를 통하여 Component에 값을 전달수있습니다.",
          "React lifeCycle를 고려하고 usecallback,useMemo,state를 통해 페이지의 렌더링을 적절히 조절할수 있습니다.",
        ];

      case 7:
        return [
          "서버 상태관리 라이브러리 ReactQuery를 활용하여 서버에서 받아온 상태의 데이터 패칭 등 의 관리를 할수 있고 useinfinityQuery를 사용하여 무한스크롤을 구현해본 경험이 있습니다.",
        ];

      case 8:
        return [
          "Next.js를 검색 및 공식페이지를 참고하여 자율적으로 학습하여 프로젝트를 진행한 경험이 있습니다",
          "서버 컴포넌트와 클라이언트 컴포넌트를 적절히 분리하여 사용할 수 있습니다.",
          "app라우팅을 사용하여 프로젝트의 페이지를 라우팅할 수 있으며 다이나믹 라우팅,로딩페이지,에러페이지등을 설정할수 있습니다.",
        ];
      case 9:
        return [
          "여러프로젝트에서 Express를 사용하여 백엔드 서버를 구축하엿습니다.",
          "미들웨어를 사용하여 JSON형태의 요청 body를 파싱하거나 인코딩된 데이터를 해석하고 응답의 body로 내보낼 수 있습니다.",
          "세션을 생성하여 로그인을 구현하거나 서버에 데이터를 저장할수 있습니다.",
        ];
      case 10:
        return [
          "Seqelize를 사용하여 JS객체를 관계형 데이터 베이스 테이블에 매핑할 수 있습니다.",
          "객체지향적으로 접근하여 코드의 재사용 및 유지보수를 원할하게 할수 있습니다.",
        ];
      case 11:
        return [
          "데이터베이스를 구축하는경우 주로 Mysql을 사용하엿습니다.",
          "DDL쿼리문을 사용하여 데이터 베이스,계정,테이블을 생성하거나 삭제할 수 있습니다.",
          "DML쿼리문을 사용하여 테이블 내의 컬럼의 데이터를 조회하거나 수정할 수 있습니다.",
          "DCL 쿼리문을 사용하여 Mysql계정의 권한을 설정할수 있습니다.",
        ];
      case 12:
        return [
          "프로젝트에서 Nest.js를 사용하여 백엔드서버를 구현한 경험이 있습니다.",
          "데코레이터를 적절히 사용하여 파라미터를 추출하거나 클래스와 메서드의 동작을 제어할수 있습니다.",
          "모듈형구조를 준수하여 재사용성이나 유지보수가 용이하게 작성할수 있습니다.",
        ];

      case 13:
        return [
          "프로젝트 설계단계에서 사용한 경험이 있습니다.",
          "프로젝트 문서를 참고하여 프로젝트를 시각적으로 구현한 경험이 있습니다.",
          "프로젝트를 기능별로 페이지를 나누어 시각화 하여 팀원간의 역활분배를 원활하게 하엿습니다.",
        ];

      case 14:
        return [
          "내용:AWS의 기능을 사용하여 프로젝트를 배포한 경험이 있습니다.",
          "EC2를 생성하고 Nginx를 통하여 프로젝트를 배포하고 Certbot을 사용하여 https 인증서를 발급할 수 있습니다.",
          "Route53에서 도메인을 등록하고 호스팅영역을 설정하여 도메인을 연결할수 있습니다.",
          "서브도메인을 생성하여 단일 EC2에서 여러개의 프로젝트를 배포한 경험이 있습니다.",
        ];
      case 15:
        return [
          "Git/GitHub을 사용하여 프로젝트를 진행한 경험이 있습니다.",
          "기능에 따른 Git brench를 적절히 나누어 프로젝트를 안전하게 개발하고 문제에 빠르게 대처하엿습니다",
          "gitHub Pullrequest를 사용한 병합을 통하여 팀원들과 유기적으로 프로젝트를 완성한 경험이 있습니다.",
          "gitHubt Actions를 사용하여 CI/CD를 구현한 경험이 있습니다.",
        ];

      default:
        return ["아이콘에 마우스를 올려주세요"];
    }
  }, [skill]);

  return (
    <SkillsComp
      tab={tab}
      setTab={setTab}
      view={view}
      setview={setview}
      icons={icons}
      skill={skill}
      setskill={setskill}
      content={content}
    />
  );
};
export default SkillsContainer;
