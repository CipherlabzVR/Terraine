import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts the pathname property from the current location object
  const { pathname } = useLocation();

  // This effect runs every time the pathname changes
  useEffect(() => {
    // Scrolls the window to the top left corner of the document
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname, so it re-runs on navigation

  return null; // This component does not render anything to the DOM
};

export default ScrollToTop;