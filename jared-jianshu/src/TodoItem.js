import React from "react";

/**
 * Item component in To DO list
 *
 * @param props itemIndex, itemValue, handleDelete
 * @returns an item of list, contains input value and is bound with delete function on `onClick` event
 * @constructor
 */
export default function TodoItem(props) {
    function handleDelete() {
        props.onDelete(props.itemIndex)
    }

    // instead of JSX, we could use React API to create virtual DOM (JSX will use it as well)
    return React.createElement('li', {key: props.itemValue, onClick: handleDelete}, props.itemValue);
};