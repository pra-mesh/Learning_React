# useEffect Hook

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

## Level 0 Basic render

## Use Effect render

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

## Clean up function

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

Debounce refers to a technique that delays the executioon of a function

## React custom Hooks

Custom Hooks are reusable functions.
When you have component logic that needs to be used by muliple components, we extract that lagic to a custom hook.
Customs hooks start with "use". Example: useFectch.
