import { Dispatch, MutableRefObject, SetStateAction } from "react";

interface IObserver {
  state: Dispatch<SetStateAction<boolean>>;
  persent: Dispatch<SetStateAction<number>>;
  ref: MutableRefObject<null>;
}

export const Observer = ({ state, ref, persent }: IObserver) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        state(true);
        persent(0);
      } else {
        state(false);
      }
    },
    { threshold: 1 }
  );

  const current = ref.current;
  if (current) {
    observer.observe(current);
  }
  return () => {
    if (current) {
      observer.unobserve(current);
    }
  };
};
