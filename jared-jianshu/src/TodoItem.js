import React from "react";

export default function TodoItem({itemValue, itemIndex, onDelete}) {
    return (
        <>
            <li key={itemIndex} onClick={() => onDelete(itemIndex)}>
                {itemValue}
            </li>
        </>
    );
};