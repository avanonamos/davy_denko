import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import styled from "styled-components";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
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

          <div className="p-4 box">
            <span
              style={{
                color: "red",
                fontweight: "bold",
                fontSize: 20,
                background: "white",
              }}
            >
              {error && "  mail/password ne correspondent pas"}
            </span>

            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3" controlId="formBasicEmail">
                <br />

                <input
                  type="email"
                  placeholder="Votre Email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <br />
              <FormGroup className="mb-3" controlId="formBasicPassword">
                <input
                  type="password"
                  placeholder="Votre Mot de Passe..."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>

              <div className="d-grid gap-2">
                <br />

                <Button
                  variant="primary"
                  type="Submit"
                  style={{
                    fontSize: 20,
                    background: "orange",
                    cursor: "pointer",
                  }}
                >
                  Connecter
                </Button>
              </div>
            </Form>
            <hr />
            <div>
              <GoogleButton
                className="g-btn"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>
            <Link to="/phonesignup">
              <div className="d-grid gap-2 mt-3">
                <br />
                <Button
                  variant="success"
                  type="Submit"
                  style={{
                    fontSize: 20,
                    background: "orange",
                    cursor: "pointer",
                  }}
                >
                  Connecter avec Votre Numero
                </Button>
              </div>
            </Link>
          </div>
          <br />
          <div style={{ background: "white" }}>
            Vous Naviez pas de Compte?{" "}
            <Link to="/signup" style={{ background: "orange" }}>
              S'inscrire
            </Link>
          </div>
        </EmailsContent>
      </ServicesLogin>
    </>
  );
};

export default Login;

const ServicesLogin = styled.div`
  background: url("./img/pexels16.jpg");
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
  }
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
