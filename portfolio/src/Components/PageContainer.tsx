import { useEffect, useMemo, useState } from "react";
import Header from "./Header/Header";
import HomeContainer from "./Home/HomeContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import SkillsContainer from "./Skills/SkillsContainer";
import ProjectContainer from "./Project/ProjectContainer";
import ContactContainer from "./Contact/ContactContainer";

const PageContainer = (): JSX.Element => {
  const [title, settitle] = useState<boolean>(false);
  const [tab, settab] = useState<number>(0);

  const Tabs: string[] = useMemo(() => {
    return ["Home", "Profile", "Skills", "Project", "Contact"];
  }, []);

  useEffect(() => {
    const gif = setTimeout(() => {
      settitle(true);
    }, 2000);

    return () => {
      clearTimeout(gif);
    };
  }, []);
  return (
    <div className="w-screen">
      <Header Tabs={Tabs} tab={tab} setTab={settab} title={title} />
      <HomeContainer tab={tab} setTab={settab} />
      <ProfileContainer tab={tab} setTab={settab} />
      <SkillsContainer tab={tab} setTab={settab} />
      <ProjectContainer tab={tab} setTab={settab} />
      <ContactContainer tab={tab} setTab={settab} />
    </div>
  );
};

export default PageContainer;
