import React from "react";

function TodoInput({inputValue, handleInputChange, handleBtnClick}) {
    return (
        <>
            <div>
                {/* use keyword "htmlFor" instead of "for" of HTML tag */}
                <label htmlFor={'valueInput'}>输入内容</label>
                {/* in React, we need use "className" to replace keyword "class" in normal HTML tag */}
                <input id={'valueInput'} className={'input'} value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleBtnClick}>提交</button>
            </div>
        </>
    );
}

export default TodoInput;