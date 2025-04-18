# React Hooks

Hooks are generally used to manage data management using

- State Method
- Lifecycle Method

## Hooks Rule

- Reacts can only be called on React function components.
- You must import Hooks from react.
- Hooks can only be called at top level of a component.
- Hooks cannot be conditional.
- Hooks will not work in React class componetns.

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

## useEffect Hook

It is used to perform side effects in componets. Fore example:

- Fetching Data from API
- Directly updating Dom.
- And using timers in your page.

In simple terms effect is used to handle states of a data during a time period or we want to delay any event for certain time we use effect.
Also a useeffect can used to perform task after certain task completion.

useEffect accepts two arguments with second one being optional:
`useEffect(<fuction>,<dependency>)`

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

If data are continuosly changed usually on API sending different payload or queries in api we use this.

```js
useEffect(() => {
  // Runs only on first render
  //And any time any dependency value changes
}, [prop, state]);
```

_Learn When to use Each Type_

#$# Clean up function

It is generaly used in useEffect hook to clean up side effects before a componenet unmounts or before the next effect runs.
It is useful for:

- Prevent Memory leaks
- Cancel ongoing processes
- Optimize Performance

Clean up function are general Used in

- Canceling Pollling Request for periodically fetching data such as search
- User Navigates Away clean the API call and other timer events.
- WebSocket Connects.
- Event Listeners in Interactive Coomponents.

### States in Hooks

- Loading
- error
- response (result)

## Debounce

Debounce refers to a technique that delays the executioon of a function

## React custom Hooks

Custom Hooks are reusable functions.
When you have component logic that needs to be used by muliple components, we extract that lagic to a custom hook.
Customs hooks start with "use". Example: useFectch.

## useContext Hooks

It is use to manage state globally. It can be used together with the useState Hook to share state between deeply nested components moore easily
than with useState alone and this process is called Props Drilling. Props drilling occurs in deep nesting when value is past children to children
and only at last the value is used so, to solve we useContext

## useRef Hook

It is used to interactind directly with the DOM or child components and managing mutable values that don't need to trigger UI update.
It is used for accessing DOM child instance storing mutable values without re-renders. When we can to access data from
uncontrolled form (value managed by dom itself) we use ref hook. It is also used in focus activity such as (Scroll, video/audio control, big forms).

## useTransition Hooks

It is used to show loading state or slow update then we used this hook to manage certain state. It is used for heavy state update (Api fetch large volume of data) i.e
filter large data, front end compution, loading ui, to show loading state.

### Key Difference between useRef and useState

- Stroing values doesnot require re-renders where as managing component state triggers re-render
- Modifying values doesn't trigger re-renders where as updating state using function does re-render.
- value should be treated as mutable where as should be treated immutable only updating using setter function.
- on both value presists over re-render

### Control vs uncontrolled form

When the user inputs are captured in state then that form is controlled form
where as the uncontrolled form is a form when we use DOM Elements to access the mutated data.
