import ContactComp from "./ContactComp";

interface IProps {
  ContactRef: React.RefObject<HTMLDivElement>;
}

const ContactContainer = ({ ContactRef }: IProps): JSX.Element => {
  return <ContactComp ContactRef={ContactRef} />;
};
export default ContactContainer;
