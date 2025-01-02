import clsx from "clsx";
import { IAboute } from "../PageComponents/About/AboutContainer";

interface IProps {
  about: IAboute;
}

const AbouteContent = ({ about }: IProps) => {
  return (
    <div
      className={clsx(
        "py-[2rem] px-[1rem] text-white font-bold ]",
        "mobile:text-[0.8rem]"
      )}
    >
      <p className="py-1 flex items-center">
        <span className="text-pink-500">const</span>
        <span className="px-[4px]">Developer</span>
        <span className="text-pink-500 px-[4px]">=</span>
        <span className="px-[4px]">{"{"}</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center">
        <span className="px-[4px]">name</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px] text-orange-300">"{about.name}"</span>
        <span>,</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center">
        <span className="px-[4px]">date</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px] text-orange-500">"{about.date}"</span>
        <span>,</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center">
        <span className="px-[4px]">Adress</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px] text-orange-500">"{about.adress}"</span>
        <span>,</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center flex-wrap ">
        <span className="px-[4px]">skills</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px]">{"["}</span>
        <span className="flex flex-wrap gap-1">
          {about.skills.map((item: string, idx: number) => (
            <span key={idx}>
              <span className="px-[4px] text-yellow-500">'{item}'</span>
              {item !== "Git/GitHub" && <span>,</span>}
            </span>
          ))}
        </span>
        <span className="px-[4px]">{"]"}</span>
        <span>,</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center">
        <span className="px-[4px]">sincerity</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px] text-indigo-400">true</span>
        <span>,</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center">
        <span className="px-[4px]">quickLearner</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px] text-indigo-400">true</span>
        <span>,</span>
      </p>
      <p>{"};"}</p>
    </div>
  );
};

export default AbouteContent;
