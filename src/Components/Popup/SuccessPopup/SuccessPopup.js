import React from "react";
import "./Success.css";
const SuccessPopup = () => {
  return (
    <div>
         <div class="custom-modal">
        <div class="succes succes-animation icon-top"><i class="bi bi-check" style={{fontSize:"48px"}}></i></div>
        <div class="succes border-bottom"></div>
        <div class="content">
            <p class="type">Email sent</p>
            <p class="message-type">Successfully Booked</p>
        </div>
    </div>

      </div>
  );
};

export default SuccessPopup;
