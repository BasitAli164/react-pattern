

//! In this component i use both hooks means useState and useRef but the use case is totally different ...I use useState for manage the data and useRef use to deal dom element means in this case i use useRef or ref if the user don't give the data or value in the field then there that input fields automtically apply focus property so this senario we can write messy component 







import React, { useRef, useState } from "react";

const MixtureOfBothHook = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mesgReg = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      nameRef.current.focus();
      return;
    }
    if(!form.email){
        emailRef.current.focus();
        return;
    }
    if(!form.message){
        mesgReg.current.focus();
        return;
    }
    console.log(form);
  };

  return (
    <form className="flex flex-col " onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        className="border rounded-2xl p-2 my-3 focus:outline-4 focus:outline-sky-500"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        ref={nameRef}
      />
      <input
        className="border rounded-2xl p-2 my-3 focus:border-sky-500"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        ref={emailRef}
      />
      <textarea
        value={form.message}
        className="border rounded-2xl p-2 my-3 focus:border-sky-500"
        placeholder="Your message"
        onChange={handleChange}
        name="message"
        ref={mesgReg}
      ></textarea>
      <button
        type="submit"
        className="bg-purple-500 text-white p-1 rounded w-full"
      >
        Send FeedBack
      </button>
    </form>
  );
};

export default MixtureOfBothHook;
