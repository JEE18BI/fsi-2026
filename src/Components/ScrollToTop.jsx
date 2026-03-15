import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // This tells the browser to go to the very top left corner (0, 0)
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;