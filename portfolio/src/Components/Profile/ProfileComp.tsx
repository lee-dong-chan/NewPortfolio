import { useEffect, useRef } from "react";
import { Observer } from "../../lib/Observer";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IProfile } from "./ProfileContainer";
import { motion } from "framer-motion";
interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  view: boolean;
  setview: React.Dispatch<React.SetStateAction<boolean>>;
  Profile: IProfile;
}

const ProfileComp = ({
  tab,
  setTab,
  view,
  setview,
  Profile,
}: IProps): JSX.Element => {
  const ref = useRef(null);

  useEffect(() => {
    if (view) {
      setTab(2);
    }
  }, [view, setTab]);

  useEffect(() => {
    Observer({ state: setview, ref: ref });
  }, [setview]);

  return (
    <div className="w-[100%] h-[1300px]  px-20 pb-20 ">
      <div className=" pb-10 text-[3rem] " ref={ref}>
        Profile
      </div>
      {tab === 2 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="w-[60rem] flex justify-between items-center ">
            <div className="w-[23rem] h-[20rem] rounded-[2rem] overflow-hidden">
              <img
                alt="profile"
                src="/imgs/myimg.png"
                className="h-[100%] w-[100%]"
              ></img>
            </div>
            <div className="flex">
              <div className="p-3 border border-black rounded-[1rem] text-[2rem]">
                <div>Name</div>
                <div>Date</div>
                <div>Tel</div>
                <div>Adress</div>
                <div>Mail</div>
              </div>
              <div className="p-5 text-[1.2rem]">
                <div className="px-2 pt-3">{Profile.name}</div>
                <div className="px-2 pt-4">{Profile.date}</div>
                <div className="px-2 pt-4">{Profile.Tel}</div>
                <div className="px-2 pt-5">{Profile.adress}</div>
                <div className="px-2 pt-5">{Profile.mail}</div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <div className="py-10">
              <div className="text-[1.5rem]">Career</div>
              <div>
                {Profile.career.map((item, idx: number) => (
                  <div className="p-1 flex text-[1.2rem]" key={idx}>
                    <div className="pe-5">{item.date}</div>
                    <div>{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-5">
              <div className="my-2 flex  border-2 border-black"></div>
              <div className="text-[1.5rem]">certification</div>
              <div className="my-2 flex  border border-gray-200"></div>
              <div>
                {Profile.certification.map((item, idx: number) => (
                  <div key={idx}>
                    <div className="p-1 flex">
                      <div className={`pe-[5rem]`}>{item.date}</div>
                      <div className={`w-[20rem] pe-[3rem]`}>{item.name}</div>
                      <div className={`w-[10rem] pe-[3rem]`}>{item.state}</div>
                      <div>{item.agency}</div>
                    </div>
                    <div className="my-2 flex  border border-gray-200"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[1.5rem] py-3">Link</div>
              <Link
                to={"https://github.com/lee-dong-chan/NewPortfolio.git"}
                target="_blank"
              >
                <FaGithub size={50} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <div>
          <div className="w-[60rem] flex justify-between items-center ">
            <div className="w-[23rem] h-[20rem] border-black border-2 rounded-[2rem] overflow-hidden">
              <img
                alt="profile"
                src="/imgs/myimg.png"
                className="h-[100%] w-[100%]"
              ></img>
            </div>
            <div className="flex">
              <div className="p-3 border border-black rounded-[1rem] text-[2rem]">
                <div>Name</div>
                <div>Date</div>
                <div>Tel</div>
                <div>Adress</div>
                <div>Mail</div>
              </div>
              <div className="p-5 text-[1.2rem]">
                <div className="px-2 pt-3">{Profile.name}</div>
                <div className="px-2 pt-4">{Profile.date}</div>
                <div className="px-2 pt-4">{Profile.Tel}</div>
                <div className="px-2 pt-5">{Profile.adress}</div>
                <div className="px-2 pt-5">{Profile.mail}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-10">
              <div className="text-[1.5rem]">Career</div>
              <div>
                {Profile.career.map((item, idx: number) => (
                  <div className="p-1 flex text-[1.2rem]" key={idx}>
                    <div className="pe-5">{item.date}</div>
                    <div>{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-5">
              <div className="my-2 flex  border-2 border-black"></div>
              <div className="text-[1.5rem]">certification</div>
              <div className="my-2 flex  border border-gray-200"></div>
              <div>
                {Profile.certification.map((item, idx: number) => (
                  <div key={idx}>
                    <div className="p-1 flex">
                      <div className={`pe-[5rem]`}>{item.date}</div>
                      <div className={`w-[20rem] pe-[3rem]`}>{item.name}</div>
                      <div className={`w-[10rem] pe-[3rem]`}>{item.state}</div>
                      <div>{item.agency}</div>
                    </div>
                    <div className="my-2 flex  border border-gray-200"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[1.5rem] py-3">Link</div>
              <Link
                to={"https://github.com/lee-dong-chan/NewPortfolio.git"}
                target="_blank"
              >
                <FaGithub size={50} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComp;
