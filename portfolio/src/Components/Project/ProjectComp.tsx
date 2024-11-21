import { useEffect, useRef } from "react";
import { Observer } from "../../lib/Observer";
import { IProject } from "./ProjectContainer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  view: boolean;
  setview: React.Dispatch<React.SetStateAction<boolean>>;
  project: number;
  setproject: React.Dispatch<React.SetStateAction<number>>;
  image: number;
  setimage: React.Dispatch<React.SetStateAction<number>>;
  ProjectData: IProject;
  ProjectName: string[];
  img: string;
  Projectinfo: number;
  setProjectinfo: React.Dispatch<React.SetStateAction<number>>;
  maketext: number;
  setmaketext: React.Dispatch<React.SetStateAction<number>>;
  animate: string;
  setAnimate: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectComp = ({
  tab,
  setTab,
  view,
  setview,
  project,
  setproject,
  image,
  setimage,
  ProjectData,
  ProjectName,
  img,
  setProjectinfo,
  maketext,
  setmaketext,
  animate,
  setAnimate,
}: IProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (view) {
      setTab(4);
      setAnimate("on");
    }
  }, [view, setTab, setAnimate]);

  useEffect(() => {
    setproject(1);
  }, [tab, setproject]);

  useEffect(() => {
    Observer({ state: setview, ref: ref });
  }, [setview, ref]);

  useEffect(() => {
    setimage(0);
    setProjectinfo(1);
    setmaketext(0);
  }, [project, setimage, setProjectinfo, setmaketext, tab]);
  return (
    <div className="w-[100%] h-screen  px-20 pb-10 cursor-pointer">
      <div className="text-[3rem] pb-5  " ref={ref}>
        Project
      </div>
      <div>
        <div className="flex p-3 justify-evenly text-[1.2rem]  bg-gray-300 ">
          {ProjectName.map((item: string, idx: number) => (
            <div
              key={idx}
              className={`${
                project === idx + 1 && "font-bold underline underline-offset-1 "
              }`}
              onClick={() => {
                setproject(idx + 1);
              }}
            >
              {idx + 1}.{item}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key={animate}
        >
          <div className="px-[2rem] pt-[4rem] flex">
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              key={project}
              className="flex flex-col relative items-center w-fit"
            >
              <div className="w-[22rem] h-[17rem] border rounded overflow-hidden">
                <img
                  className="w-[100%] h-[100%] "
                  src={`/imgs/${img}`}
                  alt="projectimg"
                ></img>
              </div>
              <div className=" p-5 flex gap-3 ">
                {ProjectData.img.map(
                  (item: string, idx: number) =>
                    tab === 4 && (
                      <div
                        className={`w-[1rem] h-[1rem] rounded ${
                          image === idx ? "bg-gray-500" : "bg-gray-100"
                        } `}
                        key={idx}
                        onClick={() => {
                          setimage(idx);
                        }}
                      ></div>
                    )
                )}
              </div>
              <Link
                to={ProjectData.link}
                target="_blank"
                className="p-1 border rounded"
              >
                프로젝트 페이지
              </Link>
            </motion.div>

            <div className="px-20">
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  key={project}
                >
                  <div className="text-[1.5rem] font-bold">프로젝트 정보</div>
                  <div className="p-1 flex gap-1 text-[0.9rem]">
                    <div>-</div>
                    <div className="text-[1.1rem]">프로젝트일자:</div>
                    <div>{ProjectData.page1.info.date}</div>
                  </div>
                  <div className="p-1  flex gap-1">
                    <div>- </div>
                    <div className="text-[1.1rem]">프로젝트 인원:</div>
                    <div>{ProjectData.page1.info.menber}</div>
                  </div>
                  <div className="p-1  flex gap-1">
                    <div>-</div>
                    <div className="text-nowrap text-[1.1rem]">설명:</div>
                    <div className="text-pretty">
                      {ProjectData.page1.info.explanation}
                    </div>
                  </div>
                  <div className="w-[30rem] py-5 grid grid-cols-4 gap-1">
                    {ProjectData.page1.skills.map(
                      (item: string, idx: number) => (
                        <div key={idx}>
                          <motion.div
                            initial={{ translateY: 20 }}
                            animate={{ translateY: 0 }}
                            transition={{ delay: idx / 40, duration: 0.5 }}
                            key={project}
                            className="w-[6.5rem] text-center bg-gray-200 rounded"
                          >
                            {item}
                          </motion.div>
                        </div>
                      )
                    )}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="pt-[1rem] h-[40rem]"
                    key={maketext}
                  >
                    <div className="text-[1.5rem] font-bold">주요 기능구현</div>
                    {ProjectData.pagename && (
                      <div className="px-1 py-1 flex gap-3 ">
                        {ProjectData.pagename.map(
                          (item: string, idx: number) => (
                            <div
                              className={`py-1 px-2 rounded-[0.5rem] ${
                                maketext === idx ? "bg-gray-400" : "bg-gray-200"
                              } `}
                              key={idx}
                              onClick={() => {
                                setmaketext(idx);
                              }}
                            >
                              {item}
                            </div>
                          )
                        )}
                      </div>
                    )}
                    <div>
                      {maketext === 0 &&
                        ProjectData.page1.make.text.map(
                          (item: string, idx: number) => (
                            <div key={idx} className="flex text-[0.9rem] ">
                              <span className="px-1">-</span>
                              <div>
                                <div className="p-1">{item}</div>
                                {ProjectData.page1.make.sub &&
                                  ProjectData.page1.make.sub.idx ===
                                    idx + 1 && (
                                    <div className="px-10 text-[0.8rem]">
                                      {ProjectData.page1.make.sub.text.map(
                                        (item: string, idx: number) => (
                                          <div key={idx}>
                                            <span className="px-1">-</span>
                                            {item}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            </div>
                          )
                        )}
                      {maketext === 1 &&
                        ProjectData.page2?.make.text.map(
                          (item: string, idx: number) => (
                            <div key={idx} className="flex text-[0.9rem] ">
                              <span className="px-1">-</span>
                              <div>
                                <div className="p-1">{item}</div>
                                {ProjectData.page2?.make.sub &&
                                  ProjectData.page2?.make.sub.idx ===
                                    idx + 1 && (
                                    <div className="px-10 text-[0.8rem]">
                                      {ProjectData.page2?.make.sub.text.map(
                                        (item: string, idx: number) => (
                                          <div key={idx}>
                                            <span className="px-1">-</span>
                                            {item}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            </div>
                          )
                        )}
                      {maketext === 2 &&
                        ProjectData.page3?.make.text.map(
                          (item: string, idx: number) => (
                            <div key={idx} className="flex text-[0.9rem] ">
                              <span className="px-1">-</span>
                              <div>
                                <div className="p-1">{item}</div>
                                {ProjectData.page3?.make.sub &&
                                  ProjectData.page3?.make.sub.idx ===
                                    idx + 1 && (
                                    <div className="px-10 text-[0.8rem]">
                                      {ProjectData.page3?.make.sub.text.map(
                                        (item: string, idx: number) => (
                                          <div key={idx}>
                                            <span className="px-1">-</span>
                                            {item}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            </div>
                          )
                        )}
                    </div>
                  </motion.div>{" "}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ProjectComp;
