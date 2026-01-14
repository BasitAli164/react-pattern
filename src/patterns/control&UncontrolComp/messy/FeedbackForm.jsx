import React, { useRef, useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Name Required");
      return;
    }
    if (!email.includes("@")) {
      alert("Email Required");
      return;
    }
    if (!messageRef.current.value) {
      messageRef.current.focus();
      return;
    }
    console.log("Form Submitted:", {
      name,
      email,
      message: messageRef.current.value,
    });
  };

  return (
    <form className="flex flex-col " onSubmit={handleSubmit}>
      <input
        type="text"
        className="border rounded-2xl p-2 my-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className="border rounded-2xl p-2 my-3"
        placeholder="Your message"
      ></textarea>
      <button type="submit" className="bg-purple-500 text-white p-1 rounded w-full">Send FeedBack</button>
    </form>
  );
};

export default FeedbackForm;
