# React Pattern

    The following 15 pattern we studied in react....

## 1- Container Presenter Component Pattern

## 2- Controlled and Uncontrolled Component

            This pattern mostly work with form

    Controlled Component:
        In a react, a controlled component is a form input elements like inputs,select,button,textarea etc whose value controlled by react state rather then dom.
            Here react state refer to useState hook in react and dom refers to the useRef/ref hook
            both hook are work well in controlled component if the usage of both hook are different mostly useState hook use to manage data inside the controlled component as well as useRef/ref use for dealing with dom . for more detail see the State&Ref.jsx file where i write code using both hooks and this code is best example and illestrate both hook exactly how they use in contolled component
            Note:
                Most of the time we work with useState in controlled component but we can use both as well. ☝️
    UnControlled Component:
            In a react, an uncontrolled component is also a form input elements like inputs, select, button ,textarea,etc whose value controlled by useRef/ref or use vanila JS means with dom, here we can deal directly with dom element.
            Note:
                Most of the time we avoid to use uncontrolled component for form or we build small form here if we build? otherwise we don't use this.


    What i learn from this pattern:
    1.  Explore and understand controlled and uncontrolled form
    2.  Differentiate between useState and useRef hook clearly
    3.  useState use for managing data and useRef for validation like focus()
    4.  use both hooks in a component

## 3- Compond Component Pattern

    It's is a React pattern that allows parents and child components to work together seamlessly while giving developers flexible composition.
    why use it?
        It makes UI libraries like modals,tabs,accordions,menus,etc. easier to build and use

## 4- Render Props Pattern

    It's is a React pattern that use a prop but the prop or the value of props basically expects a function which must be return a JSX.
    Usage: Mostly this pattern usage is to reduce code or means if there are tow component with same logic but the ui is different so in that case this pattern is used like find position of car and bike in a certain search box
    Note:
        Mostly this pattern avoid to use becuase i impact the performmance of application, the alternative of this pattern is the hook which is studied in Pattern-6

## 5- Higher Order Component Pattern (HoC)

    It is a function that takes component and return a new component. In other words, it's like a component factory that add certain new feature or new enhnacement in exiting component and return that enhance component to you/us.
    practical required internet so it do later

    Usecases
    Use case of this pattern is when multiple component share same logics such as handling loading,handling error state,authentication,permission check,login senario,data fetching wrappers

    Pitfalls:
    This pattern is more powerful  but there are few things to watch out befor use this pattern because this pattern mostly see in lagacy code means that people needed reusibility, enhancing component, for these they had few pattern this time one was render props, and this one which is HOC "but today we have a modern replacement of it(Render props and HOC) which is hook"
    One of the major problem of HoC pattern is when we have to nest too many HOC that makes debugging really really hard we also called it composition hell

    Note:
        Mostly this pattern avoid to use becuase if we have to many nest HOC then there we have problem to debug code therefore we avoid to use this pattern with mordern react but in lagacy code we can see or in our early code , the alternative of this pattern is the hook which is studied in Pattern-

## 6- The Custom Hook Pattern

    what is hook?
    A Hook in react is simply a special function that lets you hook into react feature, what are those react features now react provide you the mechanism to handle state, react provide you the mechanism to handle effect,sideEffects,context

    Built-in Hooks:
    useState,useRef,useEffect,useReducer,useContext,etc

    Rules of Hooks:
    1. Only call the hooks at the Top-level
    2. Call hook only from React Functions

    Custom Hooks:
        This is the clean mordern way to reuse statful logic between component but make sure the name of custom hook must be start with "use".
        The goal of the custom hook is to separate out the reusible logic from the component and place it inside the hook so the hook can be reuse for multiple components.

    UseCases:
    we can use this patter with the following idea which are or by using this pattern we can make the following type of custom hooks which are:

        1. useLocalStoarge(): to perform localStoarge opeartion
        2. useDebounce(): search for this
        3. usePrevious():  to see previous values or state
        4. useScrollPosition(): to handle scrolling of page
        5. useOnlineStatus(): to check online status
        6. useClipboard(): to handle that logice where we copy some text and past from aother
        7. useMediaQuery(): to handle device screen
        8. useKeyPress(): to handle key press event if you want to perform a different function on them
        9. useClickOutside(): to handle mouse clik form outside it range like dialog when we click outside the dialog then automatically close the dialog and etc.
        10. useInterval(): search for this
        11. useFetch(): to handle api calls

    PitFall:
        1. Do not over engineer
        2. Avoid unnecessary re-rendering
        3. Handle Cleanup(when you handling any event then must write cleanup logic of that envet in hook)
        4. Manage dependencies array

## 7- Provider-Context Pattern

    The provider pattern is about providing something so what it provides, it provide data, functionality for your/our entire application or part of application , this pattern avoide the props drilling.

    Steps of this pattern:
    1. Create the Context
    2. Create the Provider
    3. Wrap the component Hierarchy with provider
    4. Create Hook(custom) to make the Context available
    5. Use the data from Context whenever needed

## 8- Optimistic UI Pattern

    This is pattern allow us to change our ui immediately when we perform an action ,this pattern don't care about the end point has been success or reject, it change the ui but if the end point has been failed then it again comes on previous value but if it success then this remain the update value

    In this pattern we use react hook like useState, useOptimistic and startTransition , if you want to see an example then go optimisticPattern folder and see LikeButton.jsx code

    UseCase of this pattern:
        we use this pattern where we required imidiatly change the ui.... like any socail media platform, ecommerce website, chat app, instantly required feedback application like voting , polls, etc
