import clsx from "clsx";
import { IRefs } from "../PageContainer";

interface IProps {
  setTab: React.Dispatch<React.SetStateAction<number>>;
  Tabs: string[];
  Refs: IRefs;
}

const Header = ({ setTab, Tabs, Refs }: IProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "mx-auto px-[2rem] max-w-[1440px]  py-[1rem] relative z-[100]  h-[5rem] top-0 flex justify-between items-center ovefflow-hidden",
        "laptop:max-w-[1200px]",
        "tablet:w-screen tablet:px-[1rem]",
        "mobile:w-[100%]  mobile:px-[1rem]"
      )}
    >
      <div
        className={clsx(
          "relative cursor-pointer text-[2.5rem] text-green-400 font-bold",
          "tablet:text-[2rem]"
        )}
      >
        Lee Dong Chan
      </div>
      <div className="flex text-white font-bold gap-[2rem]">
        {Tabs.map((item: string, idx: number) => (
          <div
            key={idx}
            onClick={() => {
              setTab(idx + 1);

              idx === 0 && window.scrollTo({ top: 0, behavior: "smooth" });

              idx === 1 &&
                Refs &&
                Refs.Overview &&
                Refs.Overview.current &&
                window.scrollTo({
                  top:
                    Refs.Overview.current?.getBoundingClientRect().top -
                    20 +
                    window.scrollY,
                  behavior: "smooth",
                });
              idx === 2 &&
                Refs &&
                Refs.Skills &&
                Refs.Skills.current &&
                window.scrollTo({
                  top:
                    Refs.Skills.current?.getBoundingClientRect().top -
                    20 +
                    window.scrollY,
                  behavior: "smooth",
                });
              idx === 3 &&
                Refs &&
                Refs.Project &&
                Refs.Project.current &&
                window.scrollTo({
                  top:
                    Refs.Project.current?.getBoundingClientRect().top -
                    20 +
                    window.scrollY,
                  behavior: "smooth",
                });
              idx === 4 &&
                Refs &&
                Refs.Contact &&
                Refs.Contact.current &&
                window.scrollTo({
                  top:
                    Refs.Contact.current?.getBoundingClientRect().top +
                    window.scrollY,
                  behavior: "smooth",
                });
            }}
            className={clsx(`cursor-pointer`, "tablet:hidden", "mobile:hidden")}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
