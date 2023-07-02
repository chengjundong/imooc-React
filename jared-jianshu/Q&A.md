# Questions I have & Answer I figure out

- [Adjacent JSX elements must be wrapped in an enclosing tag](#adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag)
- [Spread syntax](#how-to-push-element-into-array-by-using-spread-syntax)
- [Bind function](#use-arraymap-to-render-the-bound-onclick-function-is-invoked-immediately)
- [import CSS into JS](#import-css-into-js)
- [Communication between components in React only](#communication-between-components-in-react-only)
- [Why directly operating DOM in JS costs so much?](#why-directly-operating-dom-in-js-costs-so-much)
- [Diff algorithm in virtualDOM](#diff-algorithm-in-virtualdom-comparison)

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

### Communication between components in React only
1. import component A into component B, so B is parent of A
2. B could pass variable objects, function objects to A
3. A could read variable objects, invoke function, but A CAN NOT change them. Pass-in objects are read-only (one-way data flow)
4. A could invoke a function of B to change variable of B 

__React is a view framework, it is not very easy to handle data (pass/change) in it. So, we will need other data framework to help.__

### Why directly operating DOM in JS costs so much?
Operating on the DOM (Document Object Model) directly in JavaScript can be resource-intensive and slow, especially when dealing with complex and dynamic web applications. Here are a few reasons why manipulating the DOM directly can be costly:

1. __Performance:__ The DOM is a tree-like representation of the HTML structure of a web page. When you modify the DOM, the browser has to recalculate the layout, repaint the affected elements, and trigger reflows. These operations can be computationally expensive, especially when making frequent or extensive changes to the DOM.
2. __Repaints and Reflows:__ Manipulating the DOM can trigger repaints and reflows, which involve recalculating the positions and styles of elements on the page. Repaints and reflows are expensive operations and can lead to visual artifacts or a perceived slowdown in the user interface.
3. __Limited Batch Operations:__ When you directly manipulate the DOM in JavaScript, each modification is typically performed individually, requiring multiple updates to the underlying DOM structure. This can be inefficient compared to performing batch operations where multiple changes are made together.

### Diff algorithm in virtualDOM comparison
1. compare two virtualDOM tree per level
2. once diff found in level X, comparison done, won't go to next level like level X+1
3. use new.levelX (along with all child nodes) to replace old.levelX

We can give a value to component.key, so we can index them and accelerate comparison efficiency.  
That is why we don't suggest to use index as value of key, index is not fixed and can be changed after re-render.
