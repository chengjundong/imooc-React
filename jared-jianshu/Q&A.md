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

### Class Component lifecycle functions
Lifecycle functions are a set of functions which will be invoked by React framework automatically.
#### 1.Mounting Phase
- constructor(): This is the constructor function for the component. It's called when the component is created.
- componentWillMount(): Deprecated as of React 16.3. It was called just before the component was inserted into the DOM. Avoid using this.
- render(): This function renders the component's JSX and returns the elements that should be displayed on the screen.
- componentDidMount(): This function is called after the component has been rendered and added to the DOM. It's often used for initial data fetching and setup.
#### 2.Updating Phase
- componentWillReceiveProps(nextProps): Deprecated as of React 16.3. It was called when the component was about to receive new props. Use getDerivedStateFromProps() or update the state directly from componentDidUpdate() instead.
- shouldComponentUpdate(nextProps, nextState): This function determines whether the component should re-render or not based on the changes in props or state.
- componentWillUpdate(nextProps, nextState): Deprecated as of React 16.3. It was called just before the component was re-rendered due to changes in props or state.
- render(): Re-renders the component when necessary.
- componentDidUpdate(prevProps, prevState): This function is called after the component has been updated and re-rendered. It's often used for additional data fetching or DOM updates.
#### 3.Unmounting Phase:
- componentWillUnmount(): This function is called before the component is removed from the DOM. It's commonly used for cleanup tasks like cancelling timers or clearing subscriptions.
#### 4.Error Handling
- componentDidCatch(error, info): This function is used for error boundary handling. It's called when an error is thrown during rendering.

### Function Component lifecycle functions
Compare to class component, function component also has its lifecyle functions implemented by hook.
#### 1.Mounting and Updating
- useEffect(): This hook replaces the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in function components. It allows you to perform side effects (e.g., data fetching, DOM manipulation) after rendering. You can specify dependencies to control when the effect is triggered.
#### 2.State and Props
- useState(): This hook enables functional components to manage state, similar to how this.state is used in class components.
- useMemo(): To replace `shouldComponentUpdate`, this hook is used to memoize the result of a computation, optimizing performance by preventing unnecessary re-computation when dependencies haven't changed.
- useCallback(): This hook memoizes functions, useful when you want to prevent unnecessary function re-creations on each render.
- JSX to replace `render()`, like `return (<><input id={a.value} /></>)`
#### 3.Context
- useContext(): This hook allows functional components to consume context values provided by parent components.
#### 4.Error Handling
- useErrorBoundary(): While there's no direct equivalent hook for error handling, you can use the ErrorBoundary component to catch errors within a specific component tree.

<details>
    <summary>sample code to leverage 'useEffect()' to mimic `componentDidMount()`</summary>

```jsx
import React, { useEffect, useState } from 'react';

function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This code will run after the component renders (componentDidMount)
    fetchData().then(response => {
      setData(response);
    });

    return () => {
      // This cleanup code will run before the component unmounts (componentWillUnmount)
      cleanup();
    };
  }, []); // Empty dependency array means the effect runs only once (on mount)

  return (
    <div>
      {/* Render component content */}
    </div>
  );
}

export default ExampleComponent;

```
</details>