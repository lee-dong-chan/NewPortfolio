interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  title: boolean;
  Tabs: string[];
}

const Header = ({ tab, setTab, title, Tabs }: IProps): JSX.Element => {
  return (
    <div className="w-[100%] z-[100] sticky top-0 flex justify-between items-center bg-gray-400">
      <div className="relative w-[5rem] h-[4rem]  cursor-pointer ">
        <img
          src="/imgs/LDC4.gif"
          alt="title"
          className={` w-[100%] ${title && "hidden"}`}
        ></img>
        <img
          src="/imgs/title.png"
          alt="title"
          className={`w-[100%] ${!title && "hidden"}`}
        ></img>
      </div>
      <div className="w-[30rem] flex justify-evenly text-white cursor-pointer">
        {Tabs.map((item: string, idx: number) => (
          <div
            key={idx}
            onClick={() => {
              setTab(idx + 1);
              idx === 0 && window.scrollTo({ top: 0, behavior: "smooth" });
              idx === 1 &&
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              idx === 2 &&
                window.scrollTo({
                  top: window.innerHeight + 1200,
                  behavior: "smooth",
                });
              idx === 3 &&
                window.scrollTo({
                  top: window.innerHeight * 2 + 1200,
                  behavior: "smooth",
                });
              idx === 4 &&
                window.scrollTo({
                  top: window.innerHeight * 5,
                  behavior: "smooth",
                });
            }}
            className={`${tab === idx + 1 && "text-black"}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
