import React from "react";
import SectionTitle from "../../component/SectionTitle";

function Contact() {
  const user = {
    Name: " Aditya Maurya ",
    Gender: " Male ",
    Email: " adityamorya560@gmail.com ",
    Moblie: " +91 93241 07269 ",
    Country: " India ",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary text-sm">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 className="ml-10 text-sm">
              <span className="text-tertiary text-sm">{key} : </span>
              <span className="text-tertiary text-sm">{user[key]}</span>
            </h1>
          ))}
          <h1 className="text-tertiary text-sm">{"}"}</h1>
        </div>
        <div className="h-[400px]">
            <dotlottie-player
            src="https://lottie.host/f0d0927d-7dda-4ab4-ae77-bc9a16ecf664/QYvnwiShXy.json"
            background="transparent"
            speed="1"
            autoplay
            ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
