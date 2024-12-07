import { useMemo, useState } from "react";
import SkillsComp from "./SkillsComp";

export interface IICon {
  icon: string;
  name: string;
}

const SkillsContainer = (): JSX.Element => {
  const [animate, setAnimate] = useState<string>("");
  const [view, setview] = useState<boolean>(false);
  const [skill, setskill] = useState<number>(0);
  const icons: IICon[] = useMemo(() => {
    return [
      { icon: "/imgs/javscript.svg", name: "JavaScript" },
      { icon: "/imgs/typescript.svg", name: "TypeScript" },
      { icon: "/imgs/html.svg", name: "HTML" },
      { icon: "/imgs/css.svg", name: "CSS" },
      { icon: "/imgs/tailwindcss.svg", name: "TailwindCSS" },
      { icon: "/imgs/react.svg", name: "React" },
      { icon: "/imgs/reactquery.svg", name: "ReactQuery" },
      { icon: "/imgs/next.svg", name: "Next.js" },
      { icon: "/imgs/express.svg", name: "Express.js" },
      { icon: "/imgs/sequelize.svg", name: "Sequelize" },
      { icon: "/imgs/mysql.svg", name: "Mysql" },
      { icon: "/imgs/nest.svg", name: "Nest.js" },
      { icon: "/imgs/aws.svg", name: "AWS" },
      { icon: "/imgs/git.svg", name: "Git/GitHub" },

      { icon: "/imgs/javscript.svg", name: "JavaScript" },
      { icon: "/imgs/typescript.svg", name: "TypeScript" },
      { icon: "/imgs/html.svg", name: "HTML" },
      { icon: "/imgs/css.svg", name: "CSS" },
      { icon: "/imgs/tailwindcss.svg", name: "TailwindCSS" },
      { icon: "/imgs/react.svg", name: "React" },
      { icon: "/imgs/reactquery.svg", name: "ReactQuery" },
      { icon: "/imgs/next.svg", name: "Next.js" },
      { icon: "/imgs/express.svg", name: "Express.js" },
      { icon: "/imgs/sequelize.svg", name: "Sequelize" },
      { icon: "/imgs/mysql.svg", name: "Mysql" },
      { icon: "/imgs/nest.svg", name: "Nest.js" },
      { icon: "/imgs/aws.svg", name: "AWS" },
      { icon: "/imgs/git.svg", name: "Git/GitHub" },
      //
      { icon: "/imgs/javscript.svg", name: "JavaScript" },
      { icon: "/imgs/typescript.svg", name: "TypeScript" },
      { icon: "/imgs/html.svg", name: "HTML" },
      { icon: "/imgs/css.svg", name: "CSS" },
      { icon: "/imgs/tailwindcss.svg", name: "TailwindCSS" },
      { icon: "/imgs/react.svg", name: "React" },
      { icon: "/imgs/reactquery.svg", name: "ReactQuery" },
      { icon: "/imgs/next.svg", name: "Next.js" },
      { icon: "/imgs/express.svg", name: "Express.js" },
      { icon: "/imgs/sequelize.svg", name: "Sequelize" },
      { icon: "/imgs/mysql.svg", name: "Mysql" },
      { icon: "/imgs/nest.svg", name: "Nest.js" },
      { icon: "/imgs/aws.svg", name: "AWS" },
      { icon: "/imgs/git.svg", name: "Git/GitHub" },
      //
      { icon: "/imgs/javscript.svg", name: "JavaScript" },
      { icon: "/imgs/typescript.svg", name: "TypeScript" },
      { icon: "/imgs/html.svg", name: "HTML" },
      { icon: "/imgs/css.svg", name: "CSS" },
      { icon: "/imgs/tailwindcss.svg", name: "TailwindCSS" },
      { icon: "/imgs/react.svg", name: "React" },
      { icon: "/imgs/reactquery.svg", name: "ReactQuery" },
      { icon: "/imgs/next.svg", name: "Next.js" },
      { icon: "/imgs/express.svg", name: "Express.js" },
      { icon: "/imgs/sequelize.svg", name: "Sequelize" },
      { icon: "/imgs/mysql.svg", name: "Mysql" },
      { icon: "/imgs/nest.svg", name: "Nest.js" },
      { icon: "/imgs/aws.svg", name: "AWS" },
      { icon: "/imgs/git.svg", name: "Git/GitHub" },
    ];
  }, []);

  return <SkillsComp icons={icons} />;
};
export default SkillsContainer;