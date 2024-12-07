import { useState } from "react";
import ContactComp from "./ContactComp";
interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}
const ContactContainer = ({ tab, setTab }: IProps): JSX.Element => {
  const [view, setview] = useState<boolean>(false);

  return <ContactComp />;
};
export default ContactContainer;
