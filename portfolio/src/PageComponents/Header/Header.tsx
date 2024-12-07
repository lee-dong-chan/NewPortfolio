interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  Tabs: string[];
}

const Header = ({ setTab, Tabs }: IProps): JSX.Element => {
  return (
    <div className="mx-auto w-[1440px]  py-[1rem] relative z-[100]  h-[5rem] top-0 flex justify-between items-center">
      <div className="relative cursor-pointer text-[2.5rem] text-green-400 font-bold">
        Lee Dong Chan
      </div>
      <div className="w-[30rem] flex justify-evenly text-white font-bold">
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
                  top: window.innerHeight * 2,
                  behavior: "smooth",
                });
              idx === 3 &&
                window.scrollTo({
                  top: window.innerHeight * 3,
                  behavior: "smooth",
                });
              idx === 4 &&
                window.scrollTo({
                  top: window.innerHeight * 4,
                  behavior: "smooth",
                });
            }}
            className={`cursor-pointer`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
