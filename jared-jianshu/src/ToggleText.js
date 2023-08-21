import {useState, useRef} from "react";
import './transition.css';
import {CSSTransition} from "react-transition-group";

export default function ToggleText() {

    const [textClass, setTextClass] = useState(false);
    const nodeRef = useRef(null);

    return (
        <>
            <CSSTransition in={textClass} nodeRef={nodeRef} timeout={2000} classNames="toggle-text"
                           onExited={() => console.log("不想和宝宝分开")}
            >
                <div id={"toggleText"} ref={nodeRef}>
                    {"喜欢宝宝！"}
                </div>
            </CSSTransition>
            <button onClick={() => setTextClass(textClass !== true)}>宝宝点我</button>
        </>
    );
}