import React, { useState } from "react";
import style from "../component/../about.module.css";

const Contact = () => {
  const [form, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleinput = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:3000/submit-form', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(form),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Form data submitted successfully:', data);
  //     })
  //     .catch(error => {
  //       console.error('Error submitting form data:', error);
  //     });
  // }

  return (
    <div className={style.contact_main}>
      <div className={style.contact_main_heading}>
        <p>Contact us</p>
      </div>
      <div className={style.contact_main_text}>
        <p>
          You can write to us at{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=damp@civil.iitb.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            damp@civil.iitb.ac.in
          </a>{" "}
          {/* in or use the form below. */}
        </p>
      </div>
      {/* <div className={style.contact_form}>
        <form>
          <div className={style.form_contain_a}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="border-solid border border-black rounded-md"
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleinput}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                className="border-solid border border-black rounded-md"
                type="number"
                id="name"
                name="phone"
                placeholder="+91 - 55555 55555"
                value={form.phone}
                onChange={handleinput}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="border-solid border border-black rounded-md"
                type="email"
                id="email"
                name="email"
                placeholder="asdf@gmail.com"
                value={form.email}
                onChange={handleinput}
                required
              />
            </div>
          </div>
          <div className={style.form_contain_b}>
            <div>
              <label htmlFor="message">Write Message</label>
              <textarea
                className="border-solid border border-black rounded-md"
                id="message"
                name="message"
                placeholder="Write your message"
                value={form.message}
                onChange={handleinput}
                required
              ></textarea>
            </div>
            <button className={style.form_button}>Send Message</button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
