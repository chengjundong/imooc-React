import React, {useState} from "react";
import './style.css';

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
            {/* input + button */}
            <div>
                {/* use keyword "htmlFor" instead of "for" of HTML tag */}
                <label htmlFor={'valueInput'}>输入内容</label>
                {/* in React, we need use "className" to replace keyword "class" in normal HTML tag */}
                <input id={'valueInput'} className={'input'} value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleBtnClick}>提交</button>
            </div>
            {/* return a list of unsorted items, iterate const list */}
            <ul>
                {
                    list.map((item, index) => {
                        // notice, onClick event handler, needs to use function, instead of invocation, because we assign parameter at here
                        return <li key={index}
                                   onClick={() => handleItemDelete(this, index)}
                                   dangerouslySetInnerHTML={{__html: item}} ></li>
                    })
                }
            </ul>
        </>
    );
}

export default TodoList;