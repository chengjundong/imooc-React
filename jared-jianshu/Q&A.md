# Questions I have & Answer I figure out

- [Adjacent JSX elements must be wrapped in an enclosing tag](#adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag)
- [Spread syntax](#how-to-push-element-into-array-by-using-spread-syntax)
- [Bind function](#use-arraymap-to-render-the-bound-onclick-function-is-invoked-immediately)

### Adjacent JSX elements must be wrapped in an enclosing tag.
In JSX syntax, we need provide an enclosing tag as a wrapper.
<details>
    <summary>sample code</summary>

```javascript
// GOOD: return an enclosing tag <div> to wrap everhthing inside
function App() {
    return (
        <div>
            <input id="userName" type="text" />
            <button>click me</button>
            <span id={"showMyName"}></span>
        </div>  
    );
}

// BAD: span is not wrapped by div
function App() {
    return (
        <div>
            <input id="userName" type="text" />
            <button>click me</button>
        </div>
        <span id={"showMyName"}></span>
    );
}
```
</details>

### How to push element into array by using Spread syntax
Refer to [MDN Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax),
it can expand array.
<details>
    <summary>sample code</summary>

    
```javascript
    const [list, setList] = useState(['学日语', '学React']);
    // append new value into list, setList function is bound with const 'list'
    setList(prevList => [...prevList, inputValue])
```
</details>

### use Array.map to render, the bound onClick function is invoked immediately
It is due to incorrect usage of event handler.  
```javascript
// CORRECT: no argument, bind function as event handler
onClick = {functionA}
// INCORRECT: assign one argument, it becomes run function
onClick = {functionA(index)}
// CORRECT: bind function within argument assignment
onClick = {() => functionA(index)}
```

<details>
    <summary>sample code</summary>

```javascript
    // incorrect, when bind event handler to onClick
    // this experssion means, invoke handleItemDelete right now
    {list.map((item, index) => (
        <li key={index} onClick={handleItemDelete(index)}>
            {item}
        </li>
    ))}


    // correct
    // when bind event handler to onClick, this experssion means, event handler will be invoking handleItemDelete 
    {list.map((item, index) => (
        <li key={index} onClick={() => handleItemDelete(index)}>
            {item}
        </li>
    ))}
```
</details>

### import CSS into JS
Under the help of React App Scaffolding, we are allowed to import CSS in JS and apply style
on our elements.

<details>
    <summary>sample code</summary>

```javascript
import './style.css'

{/* JSX code, we need to use "className" instead of "class" of HTML tag */}
<input className="red" />
```
</details>