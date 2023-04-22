import React from 'react'
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import styled from "styled-components";
// import vector from '../images/vector1.jpg'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j5v4sze",
        "template_935qo1i",
        form.current,
        "uI7mPuVqtuyZfp30g"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className='contact-form-div'>
        <h1>Contact Me Here</h1>
        <StyledContactForm>
          <div>Can Message me here 📧</div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="to_name" />
            <label>Email</label>
            <input type="email" name="from_name" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>
      </div>
    </>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  width: 600px;
  margin-top: 2%;
  font-size: 30px;
  padding: 75px;
  margin-bottom: 2em;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    text-decoration: underline;
    box-shadow: rgba(0, 0, 0, 0.5);
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #67e8f9;
      color: white;
      border: none;
      text-transform: uppercase;
      font-family: Inconsolata;
      font-size: large;
    }
  }
`;