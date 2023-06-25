import React, {useState} from "react";

function TodoList() {

    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    // change the value of state "inputValue"
    const changeInput = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <div>
                <input value={inputValue} onChange={changeInput} />
                <button>提交</button>
            </div>
            <ul>
                <li>学英语</li>
                <li>学习React</li>
            </ul>
        </>
    );
}

export default TodoList;