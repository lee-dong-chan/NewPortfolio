import React, { ChangeEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import clsx from "clsx";

interface IProps {
  className: string;
}

export const ContactMe = ({ className }: IProps): JSX.Element => {
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
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
            setMessage("sucess");
            setName("");
            setEmail("");
            setText("");
          },
          (error) => {
            setMessage("fale");
          }
        );
    }
  };

  return (
    <div className={className}>
      <h1 className="w-[100%] py-[2rem] text-[1.2rem] text-green-300 font-bold">
        CONTACT WITH ME
      </h1>

      <form
        className="p-[1rem] border border-gray-800 rounded-[0.5rem] bg-indigo-950"
        ref={form}
        onSubmit={sendEmail}
      >
        <p className="pt-[1rem] text-[0.8rem] text-white font-bold">
          연락을 원하시는분은 이쪽에서 내용을 전달해주시면 확인하겠습니다.
        </p>
        <div className="flex flex-col">
          <label className="py-[1rem] text-white font-bold">Your Name:</label>
          <input
            className="p-3 h-[2rem] border border-gray-600 rounded-[0.25rem] bg-indigo-950 text-white"
            type="text"
            name="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
            value={name}
            onFocus={() => {
              setMessage("");
            }}
          />
          <label className="py-[1rem] text-white font-bold">Your Email:</label>
          <input
            className="p-3 h-[2rem] border border-gray-600 rounded-[0.25rem] bg-indigo-950 text-white"
            type="email"
            name="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            value={email}
            onFocus={() => {
              setMessage("");
            }}
          />
          <label className="py-[1rem] text-white font-bold">Message:</label>
          <textarea
            className=" p-3 h-[7rem] border border-gray-600  rounded-[0.25rem] bg-indigo-950 resize-none overflow-auto text-white "
            name="message"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setText(e.target.value);
            }}
            value={text}
            onFocus={() => {
              setMessage("");
            }}
          />
          <div className="relative py-[3rem] flex flex-col justify-center items-center">
            {message !== "" && (
              <div className="absolute top-3 text-white">
                {message ? "전송완료되었습니다." : "전송이 실패하엿습니다."}
              </div>
            )}
            <input
              className={clsx(
                "py-[1rem] px-[1.5rem] rounded-[1rem] text-[0.8rem] text-white bg-purple-500",
                "hover:scale-[1.2] hover:transiton hover:delay-150 hover:duration-300 hover:ease-in-out"
              )}
              type="submit"
              value="SEND MESSAGE ✉️"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
