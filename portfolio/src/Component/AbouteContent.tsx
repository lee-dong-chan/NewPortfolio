import { IAboute } from "../PageComponents/About/AboutContainer";

interface IProps {
  about: IAboute;
}

const AbouteContent = ({ about }: IProps) => {
  return (
    <div className="text-white font-bold text-[1rem]">
      <p className="py-1 flex items-center">
        <span className="text-pink-500">const</span>
        <span className="px-[4px]">Developer</span>
        <span className="text-pink-500 px-[4px]">=</span>
        <span className="px-[4px]">{"{"}</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center">
        <span className="px-[4px]">name</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px] text-yellow-500">'이동찬'</span>
        <span>,</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center">
        <span className="px-[4px]">date</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px] text-yellow-500">'1996-06-28'</span>
        <span>,</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center">
        <span className="px-[4px]">Adress</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px] text-yellow-500">'남양주시 와부읍 거주'</span>
        <span>,</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center flex-wrap ">
        <span className="px-[4px]">skills</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px]">{"["}</span>
        {about.skills.map((item: string, idx: number) => (
          <span key={idx}>
            <span className="px-[4px] text-yellow-500">{item}</span>
            {item !== "Git/GitHub" && <span>,</span>}
          </span>
        ))}
        <span className="px-[4px]">{"]"}</span>
        <span>,</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center">
        <span className="px-[4px]">sincerity</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px] text-yellow-500">true</span>
        <span>,</span>
      </p>
      <p className="px-[2rem] pt-1 flex items-center">
        <span className="px-[4px]">quickLearner</span>
        <span className="px-[4px]">:</span>
        <span className="px-[4px] text-yellow-500">true</span>
        <span>,</span>
      </p>
      <p>{"};"}</p>
    </div>
  );
};

export default AbouteContent;
