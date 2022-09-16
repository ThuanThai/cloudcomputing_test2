import { useEffect, useRef, useState } from "react";

export default function useHover() {
    const [state, setState] = useState(false);
    const nodeRef = useRef();

    useEffect(() => {
        const dom = nodeRef.current;
        const handleMouseOver = () => {
            setState(true);
        };
        const handleMouseOut = () => {
            setState(false);
        };
        if (dom) {
            dom.addEventListener("mouseover", handleMouseOver);
            dom.addEventListener("mouseout", handleMouseOut);
        }
        return () => {
            dom.removeEventListener("mouseover", handleMouseOver);
            dom.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);
    return {
        state,
        nodeRef,
    };
}
