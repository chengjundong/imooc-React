import React, {useState, useEffect} from "react";
import './style.css';
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import axios from "axios";

function TodoList() {

    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("https://773ec25f-c135-4250-9bd4-517cb2ad3145.mock.pstmn.io/todoItems")
            .then((resp) => {
                if (resp.data) {
                    setList(resp.data);
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {})

        return () => {
            console.log("component will unmount...")
        };
    }, []);

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

    // JSX to render component
    return (
        <>
            {/* input + button */}
            <MemoizedTodoInput inputValue={inputValue} handleBtnClick={handleBtnClick} handleInputChange={handleInputChange}/>
            {/* return a list of unsorted items, iterate const list */}
            <ul>
                {
                    list.map((item, index) => {
                        // notice, pass function-with-arguments, need to use expression {() => f(a,b)}
                        return <MemoizedTodoItem key={item} itemValue={item} itemIndex={index}
                                         onDelete={() => handleItemDelete(index)}/>;
                    })
                }
            </ul>
        </>
    );
}

export default TodoList;