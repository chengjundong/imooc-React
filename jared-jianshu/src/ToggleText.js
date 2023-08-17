import {useState} from "react";
import './style.css';

export default function ToggleText() {

    const show = 1;
    const hide = 0;
    const [textClass, setTextClass] = useState(hide);

    return (
        <>
            <div id={"toggleText"} className={textClass === show ? "show" : "hide"}>喜欢宝宝！</div>
            <button onClick={() => {
                setTextClass(textClass === show ? hide : show);
            }}>宝宝点我</button>
        </>
    );
}