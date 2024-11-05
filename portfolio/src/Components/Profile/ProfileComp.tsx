import { useEffect, useRef } from "react";
import { Observer } from "../../lib/Observer";
import { FaGithub } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
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
    <div className="w-[100%] h-screen  px-20 pb-10 cursor-pointer ">
      <div className="text-[3rem]   " ref={ref}>
        Profile
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        key={tab}
      >
        <div className="w-[100%] flex gap-[3rem] ">
          <div>
            <div className="w-[20rem] h-[24rem] rounded-[2rem] overflow-hidden">
              <img
                alt="profile"
                src={Profile.img}
                className="h-[100%] w-[100%]"
              ></img>
            </div>
            <div className="p-2 pt-3 flex gap-10">
              {/* <div className="text-[1.5rem] py-3">Link</div> */}
              <Link to={Profile.Link[0].link} target="_blank">
                <FaGithub size={50} />
              </Link>
              <Link to={Profile.Link[1].link} target="_blank">
                <FaBloggerB size={50} />
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            key={tab}
          >
            <div className="text-[1.5rem]">Info</div>
            <div className="flex">
              <div className="font-bold">
                <div className="p-1">Name</div>
                <div className="p-1">Date</div>
                <div className="p-1">Tel</div>
                <div className="p-1">Adress</div>
                <div className="p-1">Mail</div>
              </div>
              <div>
                <div className="p-1 ">{Profile.name}</div>
                <div className="p-1 ">{Profile.date}</div>
                <div className="p-1 ">{Profile.Tel}</div>
                <div className="p-1 ">{Profile.adress}</div>
                <div className="p-1 ">{Profile.mail}</div>
              </div>
            </div>
            <div className="pt-10">
              <div className="text-[1.5rem]">Career</div>
              <div>
                {Profile.career.map((item, idx: number) => (
                  <div className="p-1 flex" key={idx}>
                    <div className="pe-5">{item.date}</div>
                    <div>{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-10">
              <div className="text-[1.5rem]">Certification</div>
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileComp;
