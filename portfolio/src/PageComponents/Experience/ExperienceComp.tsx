import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import ListComp from "./ExperienceViews/ListComp";
import { useScroll } from "framer-motion";
import CardComp from "./ExperienceViews/CardComp";
import HeaderComp from "./ExperienceViews/HeaderComp";
import { IExperienceData } from "./ExperienceContainer";
interface IProps {
  ExperienceRef: React.RefObject<HTMLDivElement>;
  data: IExperienceData[];
}

const ExperienceComp = ({ ExperienceRef, data }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<boolean>(true);
  const [content, setContent] = useState<0 | 1 | 2 | 3 | 4>(0);
  const prevScrollY = useRef(0);
  useEffect(() => {
    const ControleScroll = () => {
      if (!ref.current) return;

      const currentScrollY = scrollY.get();
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection(false);
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection(true);
      }
      prevScrollY.current = currentScrollY;

      const element = ref.current;
      const elementRect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(
        1,
        elementRect.top / (windowHeight - elementRect.height)
      );
      if (0 <= progress) {
        setScrollProgress(Math.round(progress * 100));
      } else {
        setScrollProgress(0);
      }
    };

    return scrollY.on("change", ControleScroll);
  }, [scrollY]);

  useEffect(() => {
    if (scrollProgress > 20 && scrollProgress < 40) {
      setContent(1);
    } else if (scrollProgress > 40 && scrollProgress < 60) {
      setContent(2);
    } else if (scrollProgress > 60 && scrollProgress < 80) {
      setContent(3);
    } else if (scrollProgress > 80 && scrollProgress < 100) {
      setContent(4);
    } else if (scrollProgress < 20) {
      setContent(0);
    }
  }, [scrollProgress]);

  return (
    <div
      ref={ref}
      className={clsx(
        "mx-auto relative max-w-[1440px] h-[500rem] px-[2rem]  pt-[4rem] pb-[4rem]  cursor-pointer border-t border-indigo-950 z-[30] ",
        scrollProgress === 0 && "overflow-hidden"
      )}
    >
      <div className="px-[2rem] mx-auto z-0 relative flex max-w-[20rem] items-center justify-center">
        <div
          className={clsx(
            "border absolute z-10 w-[20rem] h-[1px] border-purple-950"
          )}
        ></div>
        <h1
          className={clsx(
            "mx-auto relative z-20  px-5 py-2  w-fit rounded-[0.5rem] font-bold text-[1.5rem] text-white bg-purple-950",
            "mobile:scale-[0.8]"
          )}
          ref={ExperienceRef}
        >
          Experience
        </h1>
      </div>
      <div className="sticky top-10">
        {
          <HeaderComp
            scrollProgress={scrollProgress}
            data={data}
            content={content}
          />
        }
        {
          <ListComp
            data={data}
            scrollProgress={scrollProgress}
            content={content}
          />
        }
        {
          <CardComp
            data={data[content - 1]}
            scrollProgress={scrollProgress}
            content={content}
            scrollDirection={scrollDirection}
          />
        }
      </div>
    </div>
  );
};
export default ExperienceComp;
