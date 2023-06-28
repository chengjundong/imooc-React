import React, {useState} from "react";
import './style.css';
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

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
    const handleItemDelete = (index) => {
        const updatedList = list.filter((_, i) => i !== index);
        setList(updatedList);
    }

    return (
        <>
            {/* input + button */}
            <TodoInput inputValue={inputValue} handleBtnClick={handleBtnClick} handleInputChange={handleInputChange}/>
            {/* return a list of unsorted items, iterate const list */}
            <ul>
                {
                    list.map((item, index) => {
                        // notice, pass function-with-arguments, need to use expression {() => f(a,b)}
                        return <TodoItem key={item} itemValue={item} itemIndex={index}
                                         onDelete={() => handleItemDelete(index)}/>;
                    })
                }
            </ul>
        </>
    );
}

export default TodoList;