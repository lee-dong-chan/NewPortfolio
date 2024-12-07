import { useMemo, useState } from "react";
import Header from "./Header/Header";

import SkillsContainer from "./Skills/SkillsContainer";
import ProjectContainer from "./Project/ProjectContainer";

import AboutContainer from "./About/AboutContainer";
import ContactContainer from "./Contact/ContactContainer";
import CareerContainer from "./Career/CareerContainer";

const PageContainer = (): JSX.Element => {
  const [tab, settab] = useState<number>(0);

  const Tabs: string[] = useMemo(() => {
    return ["About", "Career", "Certificate", "Skills", "Project", "Contact"];
  }, []);

  return (
    <div className="w-screen bg-gradient-to-r from-indigo-950 from-10% via-indigo-700 via-50% to-indigo-950 to-90%">
      <div className="fixed w-[100%] h-[100%] bg-black opacity-[0.5]"></div>
      <Header Tabs={Tabs} tab={tab} setTab={settab} />
      <AboutContainer />
      <CareerContainer />
      <SkillsContainer />
      <ProjectContainer tab={tab} setTab={settab} />
      <ContactContainer tab={tab} setTab={settab} />
    </div>
  );
};

export default PageContainer;
