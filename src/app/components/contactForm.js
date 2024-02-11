"use client";
import emailjs from "@emailjs/browser";
import Toast from "./toast/Toast";
import { useState } from "react";
const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendFailed, setFailed] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    setSending(true);

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        form,
        {
          publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          setSending(false);
          setSent(true);
          setTimeout(() => setSent(false), 3000);
          form.reset();
        },
        (error) => {
          setSending(false);
          setFailed(true);
          setTimeout(() => setFailed(false), 3000);
        }
      );
  };

  return (
    <div className=" px-6 py-4 rounded w-full bg-white border">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block  text-black  text-base font-bold mb-1"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            className="w-full px-3 py-2 bg-gray-100  font-semibold  text-base  text-black border-b-2 border-blue-500 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black  text-base font-bold mb-1"
            htmlFor="email"
          >
            Email: <span className="text-sm text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            className="w-full px-3 py-2   bg-gray-100   font-semibold  text-base  text-black   border-b-2 border-blue-500  rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black  text-base font-bold mb-1"
            htmlFor="description"
          >
            Description: <span className="text-sm text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="message"
            className="w-full px-3 py-2  bg-gray-100  font-semibold  text-base  text-black  border-b-2 border-blue-500  rounded focus:outline-none focus:border-blue-500"
            rows="6"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue ${
            sending ? "bg-gray-500 pointer-events-none" : "bg-blue-500"
          }`}
        >
          {sending ? "Sending" : "Submit"}
        </button>
      </form>
      {sent ? (
        <div
          className={`fixed bottom-4 left-2 rounded bg-green-300  text-black border capitalize px-3 py-2`}
        >
          Message Sent
        </div>
      ) : (
        ""
      )}
      {sendFailed ? (
        <div
          className={`fixed bottom-4 left-2 rounded bg-red-500  text-black  capitalize px-3 py-2`}
        >
          Sending Failed
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ContactForm;
