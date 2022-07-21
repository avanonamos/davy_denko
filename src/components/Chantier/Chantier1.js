import React from "react";
import styled from "styled-components";
import { GiEarthAmerica } from "react-icons/gi";
import { ChantierData } from "../Chantier/ChantierData";

const Chantier1 = ({ img, alt }) => {
  return (
    <StatsContainer>
      <Heading>
        Les missions principales des ingenieurs à DDK-GROUP
        <GiEarthAmerica color="orange" /> sont les suivantes{" "}
      </Heading>
      <Wrapper>
        {" "}
        {ChantierData.map((item, index) => {
          return (
            <StatsBox key={index}>
              <Title> {item.title} </Title>
              <Imgwrap>
                <Img src={img} alt={alt} />
              </Imgwrap>
            </StatsBox>
          );
        })}{" "}
      </Wrapper>
    </StatsContainer>
  );
};

export default Chantier1;

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;

  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`;
const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`;

export const Imgwrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
