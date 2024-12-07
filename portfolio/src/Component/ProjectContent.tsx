import { IProject } from "../PageComponents/Project/ProjectContainer";

interface IProps {
  projectData: IProject;
}

const ProjectContent = ({ projectData }: IProps): JSX.Element => {
  return (
    <div className="flex">
      {/* <div className="w-[40%]">
        <img
          className="w-[20rem] h-[15rem] "
          src={`/imgs/${projectData.img[0]}`}
        ></img>
      </div> */}
      <div>
        <div>
          <span className="px-1 text-pink-500 font-bold">const</span>
          <span className="px-1 text-white font-bold">project</span>
          <span className="px-1 text-pink-500 font-bold">=</span>
          <span className="px-1 text-white font-bold">{"{"}</span>
        </div>
        <div className="ps-[2rem]">
          <div>
            <span className="text-white font-bold">date</span>
            <span className="text-white font-bold">:</span>
            <span className="px-1 text-green-300 font-bold">
              {projectData.page1.info.date}
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
          <div>
            <span className="text-white font-bold">tools</span>
            <span className="text-white font-bold">:</span>
            <span className="px-1 text-white font-bold">{"["}</span>

            {projectData.page1.skills.map((item: string, idx: number) => (
              <span key={idx} className="px-1 text-yellow-500 font-bold">
                {`'${item}'`}
                {idx !== projectData.page1.skills.length - 1 && (
                  <span className="text-white">,</span>
                )}
              </span>
            ))}
            <span className="px-1 text-white font-bold">{"],"}</span>
          </div>
          <div>
            <span className="text-white font-bold">myRole</span>
            <span className="text-white font-bold">:</span>
            <span className="px-1 text-orange-500 font-bold">
              "FrontEnd and Backend"
            </span>
            <span className="text-white">,</span>
          </div>
          {/* {projectData.page1.make.text.map((item: string, idx: number) => (
            <div>
              <span className="px-2 text-white font-bold">{idx + 1}</span>
              <span className="text-white font-bold">:</span>
              <span className="text-orange-500 font-bold">{item}</span>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default ProjectContent;
