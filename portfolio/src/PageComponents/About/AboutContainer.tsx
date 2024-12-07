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
}

const AboutContainer = (): JSX.Element => {
  const about: IAboute = {
    img: "/imgs/myimg.png",
    name: "이동찬",
    date: "1996-06-28(만28)",
    Tel: "010-2030-4394",
    adress: "남양주시 거주",
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
  };
  return <AbouteComp about={about} />;
};
export default AboutContainer;
