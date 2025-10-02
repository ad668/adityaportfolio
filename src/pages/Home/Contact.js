import React, { useRef, useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_8t1tfnh", // from EmailJS
        "template_n8gotgd", // from EmailJS
        form.current,
        "pxLXNhSklSIRBHTem" // from EmailJS
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send. Try again!");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="w-full py-10 px-5">
      {/* Title */}
      <SectionTitle title="Contact Us" />

      <div className="flex sm:flex-col md:flex-row items-center justify-between mt-8 rounded-xl shadow-xl p-6 bg-tertiary/10 gap-6">
        {/* Left: Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 w-full sm:w-full md:w-[350px]"
        >
          {/* Name Input */}
          <div className="flex items-center bg-tertiary/20 rounded-lg px-3 py-2 shadow-sm">
            <i className="ri-user-line text-tertiary mr-2"></i>
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="bg-transparent w-full outline-none text-tertiary text-sm sm:text-base"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center bg-tertiary/20 rounded-lg px-3 py-2 shadow-sm">
            <i className="ri-mail-line text-tertiary mr-2"></i>
            <input
              type="email"
              name="email_id"
              placeholder="Email"
              required
              className="bg-transparent w-full outline-none text-tertiary text-sm sm:text-base"
            />
          </div>

          {/* Message Input */}
          <div className="flex items-start bg-tertiary/20 rounded-lg px-3 py-2 shadow-sm">
            <i className="ri-message-3-line text-tertiary mt-1 mr-2"></i>
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              required
              className="bg-transparent w-full outline-none resize-none text-tertiary text-sm sm:text-base"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-2 rounded-lg shadow-md hover:bg-secondary hover:opacity-90 transition-all text-sm sm:text-base"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && <p className="text-sm mt-2 text-tertiary">{status}</p>}
        </form>

        {/* Right: Illustration */}
        <div className="h-[300px] sm:h-[250px] md:h-[400px] w-full flex justify-center items-center">
          <dotlottie-player
            src="https://lottie.host/f0d0927d-7dda-4ab4-ae77-bc9a16ecf664/QYvnwiShXy.json"
            background="transparent"
            speed="1"
            autoplay
            className="w-[220px] sm:w-[280px] md:w-[400px] h-auto"
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
