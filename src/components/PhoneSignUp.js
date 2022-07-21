import { React, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Button, Form } from "react-bootstrap";

import styled from "styled-components";

import { useUserAuth } from "../context/UserAuthContext";
import { GiEarthAmerica } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

const PhoneSignUp = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const { setUpRecaptcha } = useUserAuth();
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const navigate = useNavigate();
  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("SVP Entrez un numero Valide!");
    try {
      const response = await setUpRecaptcha(number);
      console.log(response);
      setConfirmObj(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };
  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === "" || otp === null) return;
    try {
      setError("");
      await confirmObj.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <ServicesLogin>
        <EmailsContent>
          <h1>Se Connecter...</h1>
          <p>
            GROUP-CIVIL DDK <GiEarthAmerica color="orange" fontSize={25} />
          </p>
          <div className="p-4 box">
            <span
              style={{
                color: "red",
                fontweight: "bold",
                fontSize: 20,
                background: "white",
              }}
            >
              {error && "  OTP INVALIDE"}
            </span>

            <Form
              onSubmit={getOtp}
              style={{ display: !flag ? "block" : "none" }}
            >
              <FormGroup className="mb-3" controlId="formBasicPhoneNumber">
                <PhoneInput
                  defaultCountry="PH"
                  value={number}
                  onChange={setNumber}
                  placeholder="Entrez Votre Numero"
                />
                <div id="recaptcha-container" />
              </FormGroup>
              <br />
              <br />

              <div
                className="button-right"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to="/">
                  <Button
                    variant="secondary"
                    style={{
                      background: "gray",
                      color: "white",
                      fontSize: 20,
                      cursor: "pointer",
                    }}
                  >
                    Annuler
                  </Button>{" "}
                  &nbsp;
                </Link>
                <Button
                  variant="primary"
                  type="Submit"
                  style={{
                    background: "orange",
                    color: "white",
                    fontSize: 20,
                    cursor: "pointer",
                  }}
                >
                  Envoyer OTP
                </Button>
              </div>
            </Form>
            <br />
            <br />
            <Form
              onSubmit={verifyOtp}
              style={{ display: flag ? "block" : "none" }}
            >
              <FormGroup
                className="mb-3"
                controlId="formBasicotp"
                style={{ paddingLeft: 50 }}
              >
                <Form.Control
                  type="text"
                  placeholder="Entrez Votre OTP"
                  onChange={(e) => setOtp(e.target.value)}
                />
              </FormGroup>
              <br />
              <br />
              <div
                className="button-right"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to="/">
                  <Button
                    variant="secondary"
                    style={{
                      background: "gray",
                      color: "white",
                      fontSize: 20,
                      cursor: "pointer",
                    }}
                  >
                    Annuler
                  </Button>{" "}
                  &nbsp;
                </Link>
                <Button
                  variant="primary"
                  type="Submit"
                  style={{
                    background: "orange",
                    color: "white",
                    fontSize: 20,
                    cursor: "pointer",
                  }}
                >
                  Verification de L'OTP
                </Button>
              </div>
            </Form>
          </div>
        </EmailsContent>
      </ServicesLogin>
    </>
  );
};

export default PhoneSignUp;

const ServicesLogin = styled.div`
  background: url("./img/pexels20.jpg");
  background-position: center;
  background-size: cover;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

const EmailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    background: orange;
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
    font-weight: bold;
    color: orange;
    background: white;
   
  form {
    z-index: 10;
  }

  @keyframes titre {
    0% {
      opacity: 0;
      transform: translateX(180px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  animation: titre ease-in-out 1.5s;
`;

const FormGroup = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 250px;
    height: 40px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
    font-weight: bold;
    background: linear-gradient(
      90deg,
      rgb(28, 27, 27) 0%,
      rgb(26, 23, 23) 100%
    );
    &:hover {
      background: orange;
      transition: 0.3s ease-in-out;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1 rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`;
