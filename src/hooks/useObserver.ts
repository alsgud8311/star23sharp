import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { RefObject, useEffect } from "react";

type UseObserver<T> = {
  target: RefObject<HTMLDivElement>;
  rootMargin?: string;
  threshold?: number;
  onIntersect: ([entry]: IntersectionObserverEntry[]) =>
    | false
    | Promise<InfiniteQueryObserverResult<T, Error>>;
};

export default function useObserver<T>({
  target,
  rootMargin = "0px",
  threshold = 1.0,
  onIntersect,
}: UseObserver<T>) {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root: null,
        rootMargin,
        threshold,
      });

      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, rootMargin, threshold, onIntersect]);
}
