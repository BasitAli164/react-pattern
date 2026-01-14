

// controlled component example
import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form className="flex flex-col " onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        className="border rounded-2xl p-2 my-3"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        value={form.message}
        className="border rounded-2xl p-2 my-3"
        placeholder="Your message"
        onChange={handleChange}
        name="message"
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

export default Form;
