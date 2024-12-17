import AbouteComp from "./AboutComp";

export interface IAboute {
  img: string;
  name: string;
  date: string;
  Tel: string;
  adress: string;
  mail: string;
  Link: { link: string }[];
  skills: string[];
  strength: {
    title: string;
    content: string[];
  }[];
}

interface IProps {
  AboutRef: React.RefObject<HTMLDivElement>;
}

const AboutContainer = ({ AboutRef }: IProps): JSX.Element => {
  const about: IAboute = {
    img: "/imgs/myimg.png",
    name: "이동찬",
    date: "1996-06-28(만28)",
    Tel: "010-2030-4394",
    adress: "남양주시 와부읍 거주",
    mail: "dsongc3082@naver.com",
    Link: [
      { link: "https://github.com/lee-dong-chan/NewPortfolio.git" },
      { link: "https://dong4394.tistory.com/" },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "TailwindCSS",
      "React",
      "ReactQuery",
      "Next.js",
      "Express.js",
      "Sequelize",
      "Mysql",
      "Nest.js",
      "Figma",
      "AWS(EC2,Route53)",
      "Git/GitHub",
    ],
    strength: [
      {
        title: "레이아웃 및 디자인 구성 능력 ",
        content: [
          "여러번의 클론 프로젝트 경험을 통하여 디자인상의 페이지의 레이아웃 및 디자인 요소를 빠르게 인지하여 프로젝트를 계획할수 있습니다.",
        ],
      },
      {
        title: "작업속도 ",
        content: [
          "레이아웃 및 디자인 요소 인지능력을 통하여 프로젝트의 요소를 빠르게 구현하고 배치할수 있습니다 .",
        ],
      },
      {
        title: "성장의지",
        content: [
          "기술 학습블로그 운영 및 토이프로젝트를 통하여 항상 성장하기 위해 노력하고 있습니다.",
          "프론트엔드에 국한되지않고 백엔드기술에 대한 경험을 통해  다방면의 전문성을 기르기위해 노력하고 있습니다.",
        ],
      },
    ],
  };
  return <AbouteComp about={about} AboutRef={AboutRef} />;
};
export default AboutContainer;
