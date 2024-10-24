import { useMemo, useState } from "react";
import ProfileComp from "./ProfileComp";

export interface IProfile {
  img: string;
  name: string;
  date: string;
  Tel: string;
  adress: string;
  mail: string;
  career: { date: string; content: string }[];
  certification: {
    date: string;
    name: string;
    state: string;
    agency: string;
  }[];
  Link: { link: string }[];
}

interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

const ProfileContainer = ({ tab, setTab }: IProps): JSX.Element => {
  const [view, setview] = useState<boolean>(false);
  const Profile: IProfile = useMemo(() => {
    return {
      img: "",
      name: "이동찬",
      date: "1996-06-28(만28)",
      Tel: "010-2030-4394",
      adress: "남양주시 거주",
      mail: "dsongc3082@naver.com",
      career: [
        { date: "2015.02 - 2020.02", content: "인덕대학교 기계자동차과 졸업" },
        { date: "2020.10 - 2022.02", content: "국가평생교육 진흥원 공학사" },
        { date: "2022.01 - 2022.09", content: "남양주 보건소 근무" },
        {
          date: "2024.02 - 2022.02",
          content:
            "경일 IT아카데미 디지털컨버전스) AWS 클라우드 융합 웹 프레임워크 개발자 양성과정A 수료",
        },
      ],
      certification: [
        {
          date: "2019.08",
          name: "공조냉동산업기사",
          state: "최종합격",
          agency: "한국산업인력공단",
        },
        {
          date: "2018.01",
          name: "CATIA V5 Associate-Part Design",
          state: "최종합격",
          agency: "Dassault Systems",
        },
        {
          date: "2017.04",
          name: "2종보통운전면허(오토)",
          state: "최종합격",
          agency: "경찰청(운전면허시험관리단)",
        },
      ],
      Link: [{ link: "" }],
    };
  }, []);
  return (
    <ProfileComp
      tab={tab}
      setTab={setTab}
      view={view}
      setview={setview}
      Profile={Profile}
    />
  );
};
export default ProfileContainer;
