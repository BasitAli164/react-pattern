import React from "react";
import Counter from "./patterns/control&UncontrolComp/Counter";
import AutoFoucsInput from "./patterns/control&UncontrolComp/AutoFoucsInput";
import CounterRef from "./patterns/control&UncontrolComp/CounterRef";
import FeedbackForm from "./patterns/control&UncontrolComp/messy/FeedbackForm";


const App = () => {
  return <div className="p-20 flex gap-20">
    {/* <Counter/>
    <AutoFoucsInput/> */}
    {/* <CounterRef/> */}
    <FeedbackForm/>
  </div>;
};

export default App;
