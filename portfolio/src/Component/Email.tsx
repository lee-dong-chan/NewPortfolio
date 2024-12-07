import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = (): JSX.Element => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_wuyi8rt",
          "template_ov2o9yb",
          form.current,
          "Fd1ZUNGnchli8lEG2"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div>
      <h1 className="py-[2rem] text-[1.2rem] text-green-300 font-bold">
        CONTACT WITH ME
      </h1>

      <form
        className="w-[30rem] p-[1rem] border border-gray-800 rounded-[0.5rem]"
        ref={form}
        onSubmit={sendEmail}
      >
        <p className="text-[0.8rem] text-white font-bold">
          연락을 원하시는분은 이쪽에서 내용을 전달해주시면 확인하겠습니다.
        </p>
        <div className="flex flex-col">
          <label className="py-[1rem] text-white font-bold">Your Name:</label>
          <input
            className="px-3 h-[2rem] border border-gray-800 rounded-[0.25rem] bg-indigo-950 text-white"
            type="text"
            name="name"
          />
          <label className="py-[1rem] text-white font-bold">Your Email:</label>
          <input
            className="px-3 h-[2rem] border border-gray-800 rounded-[0.25rem] bg-indigo-950 text-white"
            type="email"
            name="email"
          />
          <label className="py-[1rem] text-white font-bold">Message:</label>
          <textarea
            className=" px-3 h-[7rem] border border-gray-800 rounded-[0.25rem] bg-indigo-950 resize-none overflow-auto text-white"
            name="message"
          />
          <div className="p-[2rem] flex justify-center">
            <input
              className="py-[1rem] px-[1.5rem] rounded-[1rem] text-[0.8rem] text-white bg-purple-500"
              type="submit"
              value="SEND MESSAGE ✉️"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
