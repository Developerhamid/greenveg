import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Reason, setReason] = useState("");

  const SubmitData = (e) => {
    e.preventDefault();
    alert(
      `We will connect to you very soon \n ${Name}\n ${Email}\n ${Mobile}\n ${Reason}`
    );
    setName("");
    setEmail("");
    setMobile("");
    setReason("");
  };

  return (
    <>
      <div className="service-container">
        <h2>Contact us</h2>
        <hr className="title-line" />
        <div className="inner-contact-container">
          <form onSubmit={SubmitData}>
            <label>
              Name
              <input
                type="text"
                required
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Mobile
              <input
                type="number"
                required
                value={Mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </label>
            <label>
              Why you want to reach us?
              <textarea
                cols="40"
                rows="5"
                value={Reason}
                onChange={(e) => setReason(e.target.value)}
              ></textarea>
            </label>
            <div className="button-box">
              <button type="submit" className="btn-services">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
