import { Dispatch, MutableRefObject, SetStateAction } from "react";

interface IObserver {
  state: Dispatch<SetStateAction<boolean>>;
  ref: MutableRefObject<null>;
}

export const Observer = ({ state, ref }: IObserver) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        state(true);
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
