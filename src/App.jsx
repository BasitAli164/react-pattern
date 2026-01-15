import React, { useState } from "react";
import Counter from "./patterns/control&UncontrolComp/Counter";
import AutoFoucsInput from "./patterns/control&UncontrolComp/AutoFoucsInput";
import CounterRef from "./patterns/control&UncontrolComp/CounterRef";
import FeedbackForm from "./patterns/control&UncontrolComp/messy/FeedbackForm";
import Form from "./patterns/control&UncontrolComp/Form";
import MixtureOfBothHook from "./patterns/control&UncontrolComp/State&Ref";
import Model from "./patterns/compondComponentPattern/messy/model";
import "./App.css";
import Modal from "./patterns/compondComponentPattern/modal";
const App = () => {

  const [isOpen,setIsOpen]=useState(false);
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

      {/* Compound component pattern start from here */}
      {/* Messy code */}
      {/* <Model
      title="Delete Account"
      body="Are you sure you want to delete your account?"
      primaryAction={<button>Delete</button>}
      secondaryAction={<button>Cancel</button>}
      
      /> */}
      {/* With pattern */}
      <button onClick={()=>setIsOpen(true)} className="bg-amber-400 px-4 py-2 rounded-lg mt-10 font-bold">Open Modal </button>
      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
        <Modal.Header>
          <h1>Welcome!</h1>
        </Modal.Header>
        <Modal.Body>
          <p>This is a modal built with the compound component pattern</p>
        </Modal.Body>
        <Modal.Footer>
          <button>Close</button>
          <button>Do Action</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
