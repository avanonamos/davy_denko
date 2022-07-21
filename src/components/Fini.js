import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Fini() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2022 DDK-GROUP. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#about">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#signup" style={{ color: "orange", textDecoration: "none" }}>
            SERVICES
          </a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <a href="/">DECONNECTER</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: orange;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: orange;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
