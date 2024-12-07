import clsx from "clsx";
import CodeBox from "../../Component/CodeBox";
import { IProject } from "./ProjectContainer";
import ProjectContent from "../../Component/ProjectContent";

interface IProps {
  project: IProject[];
}

const ProjectComp = ({ project }: IProps) => {
  return (
    <div
      className={clsx(
        "relative max-w-[1440px] mx-auto cursor-pointer",
        "laptop:max-w-[1200px]"
      )}
    >
      <div className="flex items-center">
        <div className="border absolute z-10 w-[100%] h-[1px] border-purple-950"></div>
        <h1 className="relative z-20  px-5 py-2  w-fit rounded-[0.5rem] font-bold text-[1.5rem] text-white bg-purple-950">
          Project
        </h1>
      </div>
      <div className="pt-[4rem] flex flex-col items-center gap-[4rem]">
        {project.map((item: IProject, idx: number) => (
          <CodeBox
            key={idx}
            className={clsx(`sticky w-[60rem] h-[50rem] top-0`)}
            title={item.title}
          >
            <ProjectContent projectData={item} />
          </CodeBox>
        ))}
      </div>
    </div>
  );
};
export default ProjectComp;
