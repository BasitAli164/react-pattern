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
import Card from "./patterns/compondComponentPattern/Card";
import ThemeSwitcher from "./patterns/customHookPattern/ThemeSwitcher";
import useTheme from "./patterns/ContextProviderPattern/hook/useTheme";
import useBrand from "./patterns/ContextProviderPattern/hook/useBrand";
import LikeButton from "./patterns/optimisticPattern/LikeButton";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const brand = useBrand();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  if (password.length > 10 && password.length < 15) {
    console.log("Password is mediu");
  }

 

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div>
        {/* Controlled & Uncontrolled Pattern Start From Here */}
        {/* <Counter />
        <AutoFoucsInput />
        <CounterRef />
        <FeedbackForm />
        <Form />
        <MixtureOfBothHook /> */}
        {/* Controlled & Uncontrolled Pattern End From Here */}
      </div>

      <div>
        {/* Compound component pattern start from here */}
        {/* Messy code */}
        {/* <Model
        title="Delete Account"
        body="Are you sure you want to delete your account?"
        primaryAction={<button>Delete</button>}
        secondaryAction={<button>Cancel</button>}
        
        /> */}
        {/* With pattern */}
        {/* <button onClick={()=>setIsOpen(true)} className="bg-amber-400 px-4 py-2 rounded-lg mt-10 font-bold">Open Modal </button>
        <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
          <Modal.Header>
            <h1>Welcome!</h1>
          </Modal.Header>
          <Modal.Body>
            <p>This is a modal built with the compound component pattern</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={()=>setIsOpen(false)}>Close</button>
            <button onClick={()=>alert("Action Performed!")}>Do Action</button>
          </Modal.Footer>
        </Modal>


        <Card >
          <Card.Header>
            <h1>Card Header</h1>
          </Card.Header>
          <Card.Body>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam eum quod totam, vel officiis laboriosam reiciendis? Ducimus rem impedit eius magnam cumque aspernatur, repellat tempora porro cum officiis voluptatum vero?</p>
          </Card.Body>
          <Card.Footer>
            <button className="bg-amber-400">Add to Card</button>
          </Card.Footer>
        </Card> */}
        {/* Compound component Pattern End Here */}
      </div>

      <div>
        {/* Custom hook Pattern Start From Here */}
        {/* <ThemeSwitcher /> */}
        {/* Custom hook Pattern End From Here */}
      </div>

      <div>
        {/* Provider Pattern Start From Here */}
        {/* <div
          className={`border w-96 h-96 rounded-lg p-2 text-center ${theme ? "bg-gray-100" : "bg-gray-800"}`}
        >
        
          <button
            className={`px-7 py-2 rounded-md font-medium text-xl cursor-pointer  ${theme ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"}`}
            onClick={() => toggleTheme(!theme)}
          >
            Click
          </button>
          <div>
            {brand && (
              <p className="text-2xl text-orange-800">
                Brand Name:{brand?.name}
              </p>
            )}
          </div>

        </div> */}
        {/* Provider Pattern End From Here */}
      </div>

      <div>
        {/* Optimistic UI Pattern Start From Here */}

        <LikeButton postId={3} />
        {/* Optimistic UI Pattern End From Here */}
      </div>

      <div className={`bg-gray-500 p-6 rounded-2xl mt-10 changeBg`} >
        <input
          className="border focus:outline-amber-500 w-96 p-2 rounded-xl focus:border-none text-xl text-slate-50"
          type={`${showPassword ? "text" : "password"}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <button
          className="mx-5 px-5 py-3 border bg-slate-200 rounded-xl"
          onClick={() => setShowPassword(!showPassword)}
        >
          Show
        </button>

        {
          password.length>10 && <p>Weldone</p>
        }
      </div>
    </div>
  );
};

export default App;
