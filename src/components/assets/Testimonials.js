import React from "react";
import styled from "styled-components";
import avatarImage1 from "../../images/amos.jpg";
import avatarImage2 from "../../images/amos2.png";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Our Teams</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Mon role permet de faire la gestion des réserves et l'évolution de
            la trésorerie.
          </p>
          <div className="info">
            <img src={avatarImage1} alt="" />
            <div className="details">
              <h4>Amos HOUEHOU</h4>
              <span>DDK / TECHNICIEN-INFORMATIQUE</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Mon role permet de faire la gestion des réserves et l'évolution de
            la trésorerie.
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Davy HOUEHOU</h4>
              <span>DDK / TECHNICIEN-GENIE-CIVIL</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Mon role permet de faire la gestion des réserves et l'évolution de
            la trésorerie.
          </p>
          <div className="info">
            <img src={avatarImage1} alt="" />
            <div className="details">
              <h4>HOUEHOU ROMEO</h4>
              <span>DDK / TECHNICIEN-AGRONOME</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  h2,
  P,
  h4,
  span {
    color: orange;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background: linear-gradient(
        90deg,
        rgb(28, 27, 27) 0%,
        rgb(26, 23, 23) 100%
      );
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
