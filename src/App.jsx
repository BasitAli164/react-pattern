import React from "react";
import Counter from "./patterns/control&UncontrolComp/Counter";
import AutoFoucsInput from "./patterns/control&UncontrolComp/AutoFoucsInput";
import CounterRef from "./patterns/control&UncontrolComp/CounterRef";
import FeedbackForm from "./patterns/control&UncontrolComp/messy/FeedbackForm";
import Form from "./patterns/control&UncontrolComp/Form";
import MixtureOfBothHook from "./patterns/control&UncontrolComp/State&Ref";

const App = () => {
  return (
    <div className="p-20 flex gap-20">
      {/* Controlled & Uncontrolled Pattern Start From Here */}
      {/* <Counter />
      <AutoFoucsInput />
      <CounterRef />
      <FeedbackForm />
      <Form />
      <MixtureOfBothHook /> */}
      {/* Controlled & Uncontrolled Pattern End From Here */}
    </div>
  );
};

export default App;
