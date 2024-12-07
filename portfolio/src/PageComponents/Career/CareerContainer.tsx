import { useState } from "react";
import ProfileComp from "./CareerComp";
import { FaUniversity } from "react-icons/fa";
import { PiBuildingOfficeBold } from "react-icons/pi";
export interface ICareer {
  career: { icon: JSX.Element; date: string; content: string }[];
}

const CareerContainer = (): JSX.Element => {
  const Profile: ICareer = {
    career: [
      {
        icon: <FaUniversity size={30} color="purple" />,
        date: "(Feb 2015 - Feb 2020)",
        content: "인덕대학교 기계자동차과 졸업",
      },
      {
        icon: <FaUniversity size={30} color="purple" />,
        date: "(Oct 2020 - Feb 2022)",
        content: "국가평생교육 진흥원 공학사",
      },
      {
        icon: <PiBuildingOfficeBold size={30} color="purple" />,
        date: "(Jan 2022 - Sep 2022)",
        content: "남양주 보건소 근무",
      },
      {
        icon: <FaUniversity size={30} color="purple" />,
        date: "(Feb 2024 - Oct 2024)",
        content:
          "경일 IT아카데미) AWS 클라우드 융합 웹 프레임워크 개발자 양성과정A 수료",
      },
    ],
    // certification: [
    //   {
    //     date: "2019.08",
    //     name: "공조냉동산업기사",
    //     state: "최종합격",
    //     agency: "한국산업인력공단",
    //   },
    //   {
    //     date: "2018.01",
    //     name: "CATIA V5 Associate-Part Design",
    //     state: "최종합격",
    //     agency: "Dassault Systems",
    //   },
    //   {
    //     date: "2017.04",
    //     name: "2종보통운전면허(오토)",
    //     state: "최종합격",
    //     agency: "경찰청(운전면허시험관리단)",
    //   },
    // ],
  };

  return <ProfileComp Profile={Profile} />;
};
export default CareerContainer;
