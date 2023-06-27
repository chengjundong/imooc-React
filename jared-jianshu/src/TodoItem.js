import React from "react";

export default function TodoItem({itemValue, itemIndex, onDelete}) {
    function handleDelete() {
        onDelete(itemIndex)
    }

    return (
        <>
            <li key={itemIndex} onClick={handleDelete}>
                {itemValue}
            </li>
        </>
    );
};