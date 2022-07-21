import { React, useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { GiEarthAmerica } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const Image = styled("img")({
    width: 200,
    margin: "auto",
    display: "flex",
    padding: "50px 0 0",
  });
  return (
    <>
      <ServicesSignup id="signup">
        <EmailsContent>
          <h1>S'inscrire...</h1>
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
              {error && " remplissez les deux champs SVP"}
            </span>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3" controlId="formBasicEmail">
                <Image src="./img/15.png" alt="aa" />
                <br />
                <input
                  type="email"
                  placeholder="Votre Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <br />
              <FormGroup className="mb-3" controlId="formBasicPassword">
                <input
                  type="password"
                  placeholder="Votre Mot de Passe"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <br />
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="Submit"
                  style={{ fontSize: 20, background: "orange" }}
                >
                  S'inscrire
                </Button>
              </div>
            </Form>
          </div>
          <div style={{ background: "white" }}>
            Vous Naviez pas de Compte?
            <Link to="/" style={{ background: "orange" }}>
              Connecter
            </Link>
          </div>
        </EmailsContent>
      </ServicesSignup>
    </>
  );
};

export default Signup;

const ServicesSignup = styled.div`
  background: url("./img/pexels4.jpg");
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
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
    color: orange;
    background: white;
    font-weight: bold;
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
