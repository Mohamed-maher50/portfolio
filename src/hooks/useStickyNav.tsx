import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const useStickyNav = () => {
  const [isSticky, setSticky] = useState(true);
  const { scrollY } = useScroll();
  useEffect(() => {
    const handleScrollChange = (v: number) => {
      if (scrollY.get() <= 80) return setSticky(true);
      if (scrollY.getPrevious() > v && v > 150) {
        if (!isSticky) setSticky(true);
      } else if (scrollY.getPrevious() < v) {
        setSticky(false);
      }
    };
    scrollY.on("change", handleScrollChange);
  }, [isSticky, scrollY]);
  return {
    isSticky,
    setSticky,
  };
};

export default useStickyNav;
