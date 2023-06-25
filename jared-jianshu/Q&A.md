# Questions I have & Answer I figure out

- [Adjacent JSX elements must be wrapped in an enclosing tag](#adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag)

## Adjacent JSX elements must be wrapped in an enclosing tag.
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

