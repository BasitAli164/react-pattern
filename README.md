# React Pattern

    The following 15 pattern we studied in react....

## 1- Controlled and Uncontrolled Component
            This pattern mostly work with form

    Controlled Component:
        In a react, a controlled component is a form input elements like inputs,select,button,textarea etc whose value controlled by react state rather then dom.
            Here react state refer to useState hook in react and dom refers to the useRef/ref hook
            both hook are work well in controlled component if the usage of both hook are different mostly useState hook use to manage data inside the controlled component as well as useRef/ref use for dealing with dom . for more detail see the State&Ref.jsx file where i write code using both hooks and this code is best example and illestrate both hook exactly how they use in contolled component
            Note:
                Most of the time we work with useState in controlled component but we can use both as well. ☝️
    UnControlled Component:
            In a react, an uncontrolled component is also a form input elements like inputs, select, button ,textarea,etc whose value controlled by useRef/ref means with dom, here we can deal directly with dom element.
            Note:
                Most of the time we avoid to use uncontrolled component for form or we build small form here if we build? otherwise we don't use this.
