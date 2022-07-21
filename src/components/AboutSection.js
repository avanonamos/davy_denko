import React from "react";
import styled from "styled-components";

import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/about-sec-img.png";

const AboutSectionStyles = styled.div`
  padding: 6rem 0;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    color: white;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 1rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle subheading="DDK-GROUP" heading="About Us" />
          <PText>
            Organisation professionnelle, association professionnelle,
            association professionnelle d'ingénierie
          </PText>
          <div className="aboutSection__buttons">
            <a
              href="#equip"
              style={{
                color: "orange",
                textDecoration: "none",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Lire Plus
            </a>
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
