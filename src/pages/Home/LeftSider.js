import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i class="ri-facebook-circle-line text-gray-400 text-xl"></i>
          </a>
          <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=new" target="_blank" rel="noopener noreferrer">
            <i class="ri-mail-line text-gray-400 text-xl"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i class="ri-instagram-line text-gray-400 text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/aditya-maurya-0497b822b/" target="_blank" rel="noopener noreferrer">
            {" "}
            <i class="ri-linkedin-box-line text-gray-400 text-xl"></i>
          </a>
          <a href="https://github.com/ad668/" target="_blank" rel="noopener noreferrer">
            <i class="ri-github-line text-gray-400 text-xl"></i>
          </a>
        </div>

        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
