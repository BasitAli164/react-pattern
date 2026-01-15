import React from "react";
import Counter from "./patterns/control&UncontrolComp/Counter";
import AutoFoucsInput from "./patterns/control&UncontrolComp/AutoFoucsInput";
import CounterRef from "./patterns/control&UncontrolComp/CounterRef";
import FeedbackForm from "./patterns/control&UncontrolComp/messy/FeedbackForm";
import Form from "./patterns/control&UncontrolComp/Form";
import MixtureOfBothHook from "./patterns/control&UncontrolComp/State&Ref";
import Model from "./patterns/compondComponentPattern/messy/model";
import './App.css'
const App = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Controlled & Uncontrolled Pattern Start From Here */}
      {/* <Counter />
      <AutoFoucsInput />
      <CounterRef />
      <FeedbackForm />
      <Form />
      <MixtureOfBothHook /> */}
      {/* Controlled & Uncontrolled Pattern End From Here */}



      <Model
      title="Delete Account"
      body="Are you sure you want to delete your account?"
      primaryAction={<button>Delete</button>}
      secondaryAction={<button>Cancel</button>}
      
      />
    </div>
  );
};

export default App;
