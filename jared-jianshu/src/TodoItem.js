import React from "react";

/**
 * Item component in To DO list
 *
 * @param itemIndex
 * @param itemValue
 * @param onDelete
 * @returns an item of list, contains input value and is bound with delete function on `onClick` event
 * @constructor
 */
export default function TodoItem({ itemValue, itemIndex, onDelete }) {
    const handleDelete = () => {
        onDelete(itemIndex);
    };

    // JSX to render component
    return (
        <li key={itemValue} onClick={handleDelete}>
            {itemValue}
        </li>
    );
};