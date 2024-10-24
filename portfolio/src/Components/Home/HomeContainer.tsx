import { useState } from "react";
import HomeComp from "./HomeComp";

interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

const HomeContainer = ({ setTab, tab }: IProps): JSX.Element => {
  const [view, setview] = useState<boolean>(false);
  return <HomeComp setTab={setTab} tab={tab} view={view} setview={setview} />;
};
export default HomeContainer;
