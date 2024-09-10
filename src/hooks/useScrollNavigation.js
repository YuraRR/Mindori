// src/hooks/useScrollNavigation.js
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const useScrollNavigation = () => {
  const navigate = useNavigate();

  const goToPageAndScroll = async (path, selector) => {
    await navigate(path);

    setTimeout(() => {
      scroller.scrollTo(selector, {
        duration: 1000,
        smooth: true,
        offset: -320,
        spy: true,
      });
    }, 500);
  };

  return { goToPageAndScroll };
};

export default useScrollNavigation;
