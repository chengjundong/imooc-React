import React, {useState} from "react";

function TodoList() {

    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState(['学日语', '学React']);

    // change the value of state "inputValue"
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // add input.value into list
    const handleBtnClick = () => {
        if (inputValue) {
            // if inputValue exists, add it into item list, then clear the input
            setList(prevList => [...prevList, inputValue]);
            setInputValue('');
        }
    }

    // delete item from list
    const handleItemDelete = (e, index) => {
        const updatedList = list.filter((_, i) => i !== index);
        setList(updatedList);
    }

    return (
        <>
            <div>
                <input value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} onClick={() => handleItemDelete(this, index)}>{item}</li>
                    })
                }
            </ul>
        </>
    );
}

export default TodoList;