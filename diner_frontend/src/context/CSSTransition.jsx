import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./transitions.css"; // Your CSS file

const CSSTransition = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        // Add class to body for transition effects
        document.body.classList.add("page-transition");
        return () => {
            document.body.classList.remove("page-transition");
        };
    }, [location]);

    return <div className="page">{children}</div>;
};

export default CSSTransition;
