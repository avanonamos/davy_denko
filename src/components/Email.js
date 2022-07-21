import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import EmailBg from "../images/pexels3.jpg";
function Email() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5d9nx3s",
        "template_q96rul9",
        e.target,
        "9mcX_3-rGtobDFASr"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <Container>
      <EmailContent>
        <h1>Envoyez par Mail: avanonamos@gmail.com</h1>
        <form className="rom" onSubmit={sendEmail}>
          <label>Nom</label>
          <input type="text" name="name" className="form-control" />
          <label>Email</label>
          <input type="email" name="user_email" className="form-control" />
          <label>Message</label>
          <textarea name="message" rows="4" className="form-control"></textarea>
          <input type="submit" value="Envoyer" className="form-control " />
        </form>
      </EmailContent>
    </Container>
  );
}

export default Email;

const Container = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }

  input,
  textarea {
    text-align: center;
    display: flex;
    position: relative;
    font-size: 1rem;
    border-radius: 50px;
  }
  label {
  }

  form {
    z-index: 10;
  }
  label {
    text-align: center;
  }
`;
