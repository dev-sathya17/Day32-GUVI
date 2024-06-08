# GUVI - Day 32

## React Redux Task

### How to run the project on your machine:

1. Pull the repository to your local machine.

```
git pull
```

2. To install all the dependencies:

```
npm install
```

3. Once everything is installed successfully, now it's time to run the server.

```
npm run dev
```

### Dependencies used

1. React Redux

```
npm install react-redux
```

2. Redux toolkit

```
npm install @reduxjs/toolkit
```

### About the Task

> - The project is a depiction of using the `redux` library to manage state in ReactJS.
> - _Redux_ is a state management library that provides a handle and manage state in a centralized way.
> - A UI is given with data to be replicated.
> - We ensure that on change in quantity, the total and price changes accordingly using `redux toolkit`.

### Code Flow and Explanation

> - We initialise the given data into a local array of objects in a seperate file located in the data folder. [Source](./src/data/products.js)
> - This provides us easy reusability and better readability.
> - The provided UI is replicated using CSS only.
> - The UI is completely responsive, achieved using `media queries`.
> - The required components are seperated into a folder named as _components_. [Source](./src/components/)
> - Each product is seperated into a card stacked one below the other.
> - We use the `map()` function to generate multiple components dynamically.
> - We iterate over the data using the map function and pass our `card` component to be rendered dynamically with required props.
> - Now, We integrate `Redux` into our application.
> - First, we create a `slice` named, `totalSlice` using the `createSlice()` method.
> - This method accepts an object, where we add a `name`, define `initial state value` and `reducers`.
> - To set the initial state value of the total with the sum of prices of the products data, we create an arrow function in the file, `totalAmount()` and return the total amount.
> - This total amount is set to the state value initially.
> - In the reducer, we create an action named `change`.
> - Whenever this action is called, a payload of the total amount is accepted. The state value is updated with the payload value which contains the updated total amount.
> - We export the total value, the reducers, the slice and the actions to be re-used at different places.
> - Now, the slice is ready, we create a store.
> - We make a folder, called as _app_, inside which a store is created.
> - In this file, we export and configure a store, using the `configureStore()` function provided by the `redux-toolkit`.
> - This method accepts an object, where we add our reducer from the slice to it.
> - Now that we have created our slice and store, it's time to provide it to our Application.
> - We use the `Provider` component from the `react-redux` library to wrap our `App` component, which encompasses the entire component tree within itself.
> - The Provider component accepts the store we created as its props parameter.
> - Now, we retrieve the state value from the slice wherever we want, using the `useSelector` hook.
> - To dispatch any value to the slice, we use the `useDispatch()` hook, to dispatch our actions to the slice.

### Summary

1. With this mini-application, we understand:
   > - How redux provides a centralized data to the complete component tree.
   > - How to use values from the centralized state.
   > - How to pass a value to the reducer as payload and modify the state accordingly.
2. Integration:
   > - How to integrate an application with a centralized state management library which optimizes the application's performance.
3. General Take Aways:
   > - React Folder Structure.
   > - Responsive UI building using media queries in CSS.
   > - Optimized state management using redux.
