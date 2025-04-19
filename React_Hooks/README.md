# React Hooks

Hooks are generally used to manage data management using

- State Method
- Lifecycle Method

## Hooks Rule

- Reacts can only be called on React function components.
- You must import Hooks from react.
- Hooks can only be called at top level of a component.
- Hooks cannot be conditional.
- Hooks will not work in React class components.

## Hooks Type

- useState
- useEffect
- useContext
- useRef
- custom Hook
- useCallback
- useMemo
- useTransition
- use() <!--React 19-->

## useState Hook

This hook lets you to add state(data) to functional components.
`const [stateVariable, setStateFunction] = useState(initialValue);`
so every time we set the value of of stateVariable using setStateFunction we schedules a re-render of the component.
The component runs again, using the updated state.

## useEffect Hook

It is used to perform side effects in components. Fore example:

- Fetching Data from API
- Directly updating Dom.
- And using timers in your page.

In simple terms effect is used to handle states of a data during a time period or we want to delay any event for certain time we use effect.
Also a useEffect can used to perform task after certain task completion.

useEffect accepts two arguments with second one being optional:
`useEffect(<function>,<dependency>)`

- Level 0 Basic render
- Level 1 states as dependencies
- Level 2 clean up function
- Level 3 param controlled Pagination

### Level 0 Basic render

### Use Effect render

1. No dependency passed

Usually it is used for timer or changing values and API's

```js
useEffect(() => {
  // Runs on every render
});
```

1. An empty Array:

Usually used for direct dom manipulation at render or constant value;

```js
useEffect(() => {
  // Runs only on first render
}, []);
```

3. Props or state values:

If data are continuously changed usually on API sending different payload or queries in api we use this.

```js
useEffect(() => {
  // Runs only on first render
  //And any time any dependency value changes
}, [prop, state]);
```

_Learn When to use Each Type_

### Clean up function

It is generally used in useEffect hook to clean up side effects before a components unmounts or before the next effect runs.
It is useful for:

- Prevent Memory leaks
- Cancel ongoing processes
- Optimize Performance

Clean up function are general Used in

- Canceling Polling Request for periodically fetching data such as search
- User Navigates Away clean the API call and other timer events.
- WebSocket Connects.
- Event Listeners in Interactive Components.

### States in Hooks

- Loading
- error
- response (result)

## Debounce

Debounce refers to a technique that delays the execution of a function or waiting a little bit before doing something and
resetting that wait ever time the action is repeated. One of the common use of debounce is instead of firing an API call on every keystroke
on a search box, you want to wait until the user stops typing for a moment — then send the search request.

## React custom Hooks

Custom Hooks are reusable functions.
When you have component logic that needs to be used by multiple components, we extract that logic to a custom hook.
Customs hooks start with "use". Example: useFetch.

## useContext Hooks

It is use to manage state globally. It can be used together with the useState Hook to share state between deeply nested components moore easily
than with useState alone and this process is called Props Drilling. Props drilling occurs in deep nesting when value is past children to children
and only at last the value is used so, to solve we useContext

## useRef Hook

It is used to interact directly with the DOM or child components and managing mutable values that don't need to trigger UI update.
It is used for accessing DOM child instance storing mutable values without re-renders. When we can to access data from
uncontrolled form (value managed by dom itself) we use ref hook. It is also used in focus activity such as (Scroll, video/audio control, big forms).

## useTransition Hooks

It is used to show loading state or slow update then we used this hook to manage certain state. It is used for heavy state update (Api fetch large volume of data) i.e
filter large data, front end computation, loading ui, to show loading state.

## useCallback Hooks

It is used to return memorized version of a callback function, which only changes if its dependencies are changed.
It will avoid re-creating functions on every re-render which can improve performances. Generally used for:

- A nested component that fetches a bid data form api or db that doesn't need to be changed on every rerender
- A child component and parent component rerender Independent of each other.
- Filtering data and many more.
- Pagination , scroll of data.
- WebSocket or polling cleanup.

Memo and useCallback hook is used together to stop rerender of child or parent when value one component changes.

Syntax: `useCallback(() => {}, [dependencies])`

## useMemo Hook

It is used to memoizes the result of a computation i.e it only recalculates the value when dependencies change.
It returns a cached value so your component can skip expensive calculations during re-renders/
syntax

```JS
const memoizedValue = useMemo (() => {
  return expensiveCalculation(input)
},[input])
```

Common Use cases:

- Filtering, sorting or mapping lists (Report organizing)
- Derived state (from props/state)
- conditional rendering logic
- Avoiding unnecessary renders

### useCallback vs useMemo

- useCallback is used to memoizes a function where as useMemo for a computed value;
- It returns function instance where as it returns value from calculation
- It used when we need to avoid recreating a function where as it used for avoiding recalculation values.
- It is used with React.Memo, event handlers and debouncing where as used with expensive computation and derived states

## HOC

### Key Difference between useRef and useState

- String values does not require re-renders where as managing component state triggers re-render
- Modifying values doesn't trigger re-renders where as updating state using function does re-render.
- value should be treated as mutable where as should be treated immutable only updating using setter function.
- on both value persist over re-render

### Control vs uncontrolled form

When the user inputs are captured in state then that form is controlled form
where as the uncontrolled form is a form when we use DOM Elements to access the mutated data.

### ✅ React Hooks Cheat Sheet

| **Feature**       | **Hook**        | **Purpose**                                         | **Returns**                                              | **Helps with**                                          | **When to use**                                                               |
| ----------------- | --------------- | --------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------- |
| State             | `useState`      | Manage state in a functional component              | A state variable and a setter function                   | Dynamic data (like input fields, counters, toggles)     | When your component needs to hold and update local state                      |
| Side Effects      | `useEffect`     | Perform side effects (fetch, timers, subscriptions) | Nothing (you return cleanup function optionally)         | Data fetching, DOM updates, subscriptions, etc.         | When you want to do something after render or on prop/state change            |
| References        | `useRef`        | Store a mutable value that doesn’t cause re-renders | A `.current` object reference                            | Accessing DOM nodes or persisting values across renders | When you need to access DOM or track previous values                          |
| Memoization       | `useCallback`   | Memoize a function                                  | Same function instance unless dependencies change        | Performance, especially in memoized child components    | When passing functions to `React.memo` components or inside `useEffect`       |
| Memoization       | `useMemo`       | Memoize a computed value                            | A memoized value                                         | Avoiding re-calculation on every render                 | When expensive calculations depend on inputs and shouldn't rerun every render |
| Context API       | `useContext`    | Consume context values                              | The value from the nearest matching `<Context.Provider>` | Avoiding prop drilling                                  | When accessing global state like theme, auth, language                        |
| Concurrent UI     | `useTransition` | Defer state updates                                 | `[isPending, startTransition]`                           | Making UI remain responsive during slow updates         | When doing large updates like filtering/searching a big list                  |
| Custom Logic      | **Custom Hook** | Reuse logic across components                       | Any state/data/functions you design                      | Sharing and organizing reusable logic                   | When two or more components share the same logic                              |
| Component Wrapper | **HOC**         | Wrap components with enhanced logic                 | A new component with added props/behavior                | Reuse logic like auth, logging, data fetching           | When wrapping components with reusable logic (used more in class components)  |
