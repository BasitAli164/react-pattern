import React from "react";
import Counter from "./patterns/control&UncontrolComp/Counter";
import AutoFoucsInput from "./patterns/control&UncontrolComp/AutoFoucsInput";
import CounterRef from "./patterns/control&UncontrolComp/CounterRef";
import FeedbackForm from "./patterns/control&UncontrolComp/messy/FeedbackForm";
import Form from "./patterns/control&UncontrolComp/Form";


const App = () => {
  return <div className="p-20 flex gap-20">
    {/* <Counter/>
    <AutoFoucsInput/> */}
    {/* <CounterRef/> */}
    {/* <FeedbackForm/> */}
    <Form/>
  </div>;
};

export default App;
