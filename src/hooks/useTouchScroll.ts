import { useState, useEffect, useRef } from "react";

function useTouchScroll() {
  const [isTouching, setIsTouching] = useState(false);
  const startTouchY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (containerRef.current) {
        setIsTouching(true);
        startTouchY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isTouching && containerRef.current) {
        const deltaY = e.touches[0].clientY - startTouchY.current;
        containerRef.current.scrollTop -= deltaY;
        startTouchY.current = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      setIsTouching(false);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isTouching]);

  return containerRef;
}

export default useTouchScroll;
