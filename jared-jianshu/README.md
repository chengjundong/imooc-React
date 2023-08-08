## Learn《React零基础入门到实战，完成企业级项目简书网站开发》 in Imooc
About notes, see [Q&A](./Q&A.md).

## Basic
### Props & State & Render
__Props__ represents the configuration / data passed from parent component to child component. It is immutable in child component.
Parent component can change its value.  
__State__ represents the internal data of a component, it is mutable.  
- read state: use `useState` hook
- change state: use `setState` hook

__Render__
- State changed --> Render invoked
- Parent component rendered --> Children components render invoked

To summarize, props are used to pass data from parent to child components and are immutable, while state is used to manage internal data within a component and can be changed by the component itself.

### Virtual DOM
Virtual DOM is a JS object to describe HTML DOM. We can compare two Virtual DOM and find the difference of their represented HTML DOM.

1. Component State + JSX template ==> Virtual DOM (JS object) to describe DOM __VD1__, like `['div', {id: 'abc'}, ['span', {}, 'Hello World']]`
2. Virtual DOM ==> real DOM, like `<div id='abc'><span>Hello World</span></div>`
3. Component State changed (Hello World -> Bye Bye) + JSX template ==> new Virtual DOM __VD2__ `['div', {id: 'abc'}, ['span', {}, 'Bye Bye']]`
4. Compare __VD1__ and __VD2__ to find the difference, found at the inner HTML value of span
5. Use DOM API to update real DOM, `<div id='abc'><span>Bye Bye</span></div>`

It saves effort of creating a new DOM, replacing the existing DOM and comparing between real DOM.  
It can help React to develop Native app. In IOS/Android, we can convert virtualDOM to native component.

## Development
### How to debug
1. start React app
2. create a Javascript Debug configuration in Webstorm
3. start Javascript Debug configuration & add breakpoint

## Links
- [React 18.2.0](https://react.dev/)
- [Imooc course link](https://coding.imooc.com/learn/list/229.html)
