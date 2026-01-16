# React Pattern

    The following 15 pattern we studied in react....

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

