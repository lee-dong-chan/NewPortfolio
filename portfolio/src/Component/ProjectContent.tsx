import clsx from "clsx";
import { IProject } from "../PageComponents/Project/ProjectContainer";
import { Link } from "react-router-dom";

interface IProps {
  projectData: IProject;
}

const ProjectContent = ({ projectData }: IProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "px-[1rem] py-[2rem]",
        "mobile:px-[1rem] mobile:py-[1rem] mobile:text-[0.7rem]"
      )}
    >
      <div>
        <span className="px-1 text-pink-500 font-bold">const</span>
        <span className="px-1 text-white font-bold">project</span>
        <span className="px-1 text-pink-500 font-bold">=</span>
        <span className="px-1 text-white font-bold">{"{"}</span>
      </div>
      <div className={clsx("ps-[1rem]", "mobile:ps-[1rem]")}>
        <div className="pt-1">
          <span className="text-white font-bold">link</span>
          <span className="text-white font-bold">:</span>
          <Link
            className="undeline text-blue-400"
            to={projectData.link}
            target="_blank"
          >
            {projectData.link}
          </Link>
          <span className="text-white">,</span>
        </div>
        <div className="pt-1">
          <span className="text-white font-bold">date</span>
          <span className="text-white font-bold">:</span>
          <span className="px-1 text-green-300 font-bold">
            '{projectData.page1.info.date}'
          </span>
          <span className="text-white">,</span>
        </div>
        <div>
          <span className="text-white font-bold">member</span>
          <span className="text-white font-bold">:</span>
          <span className="px-1 text-orange-500 font-bold">
            "{projectData.page1.info.menber}"
          </span>
          <span className="text-white">,</span>
        </div>
        <div className="pt-1">
          <span className="text-white font-bold">tools</span>
          <span className="text-white font-bold">:</span>
          <span className="px-1 text-white font-bold">{"["}</span>
          <div className="flex flex-wrap max-w-[30rem] gap-1">
            {projectData.page1.skills.map((item: string, idx: number) => (
              <span key={idx} className="px-1 text-yellow-500 font-bold">
                {`'${item}'`}
                {idx !== projectData.page1.skills.length - 1 && (
                  <span className="text-white">,</span>
                )}
              </span>
            ))}
          </div>
          <span className="px-1 text-white font-bold">{"] , "}</span>
        </div>
        <div className="pt-1">
          <span className="text-white font-bold">myRole</span>
          <span className="text-white font-bold">:</span>
          <span className="px-1 text-white font-bold">{"{"}</span>
          <ul>
            {projectData.page1.works.map((item: string, idx: number) => (
              <li key={idx} className="ps-2 flex">
                <span className="text-white">{idx + 1}:</span>
                <span className="px-1 text-green-500 font-bold">
                  '{item}'{" "}
                  {projectData.page1.works.length !== idx + 1 ? (
                    <span className="text-white">,</span>
                  ) : (
                    <span className="px-1 text-white font-bold">{"} , "}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-1">
          <span className="text-white font-bold">projectOverview</span>
          <span className="text-white font-bold">:</span>
          <span className="px-1 text-orange-500 font-bold">
            "{projectData.page1.info.explanation}"
          </span>
          <span className="text-white">,</span>
        </div>
        <div className="pt-1">
          <span className="text-white font-bold">explanation</span>
          <span className="text-white font-bold">:</span>
          <span className="px-1 text-white font-bold">{"{"}</span>
          <ul>
            {projectData.page1.make.text.map((item: string, idx: number) => (
              <li key={idx} className="flex">
                <span className="px-2 text-white font-bold">{idx + 1}</span>
                <span className="text-white font-bold">:</span>
                <span className="text-green-300 font-bold">
                  '{item}'
                  {projectData.page1.make.text.length !== idx + 1 && (
                    <span className="text-white font-bold">{","}</span>
                  )}
                </span>
                {projectData.page1.make.text.length === idx + 1 && (
                  <span className="px-1 text-white font-bold">{"},"}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProjectContent;
