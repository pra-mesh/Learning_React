# React Packages

## Axios

## TanStack Query

## React Router

Learn About Router?
[React Router Docs](https://reactrouter.com/home)

## Redux

It is used when there is more than 2-5 context in an application we use packages like redux-toolkit/zustand/mobx.
In general redux is core state management library that helps to centralize, change or manage state of global variable with the help of fundamental store, reducers and middleware for managing state in js application.

_Uses_

- Redux is use when there is too many state or passing value from component is complex then Redux is used.
- If data needs to be persists.

_Core Concepts_

1. Store => A centralized container for state
2. Actions => Plain JS objects which describes what data is coming along {data}
3. Reducers => Function that change state based on the actions. (Redux-toolkit provides various reducers which we need to write if not used)
4. Dispatch => A function to send actions to store to fetch or change data.
5. Selectors => A function to read data from the store.

Since Redux is a basic library it requires a lot manual configuration for state updates, action creators and middleware we use package like
redux toolkit that is built on top of react that includes utilities like createSlice, configureStore and built in middleware to simplify
state management even redux suggest redux toolkit to reduce boilerplates and additional configuration.

### redux-toolkit

It is a package built on top of Redux.It includes utilities like createSlice, configureStore, and built-in middleware to simplify state management.
Reduces boilerplate and provides better development experience.
[Redux-Toolkit Docs](https://redux-toolkit.js.org/introduction/getting-started)
installing package : `npm install @reduxjs/toolkit react-redux`

react-redux package is for selectors i.e is select data
@reduxjs/toolkit is for store,actions,reducer or dispatch or manage state of data.

Actions and Reducers are written in slices where as store are written in Store and dispatch and selectors are written in components or pages using react-redux.

In case of api call and custom functions call we use _extraReducers_ in redux-toolkit. All of the asynchronous we use createAsyncThunk.

#### createAsyncThunk

It is a function from Redux Toolkit that simplifies handling asynchronous logic in Redux applications. It allows you to define async actions that automatically generate lifecycle action types (pending, fulfilled, and rejected) based on the provided action type prefix. In general it is middleware
to run multiple action and asynchronous action.

## other redux packages and state management

- zustand
- MOBX
- recoil

_Interview questions_
How can we persist data in react-app?
We can persist a data we use redux toolkit with local storage or global variable of the data.
