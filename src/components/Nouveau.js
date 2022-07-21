import React from "react";
import styled from "styled-components";
import { FcDebt } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";

const Nouveau = () => {
  return (
    <div>
      <NouveauContainer>
        <TopLine>Nouveau</TopLine>
        <Description>CE QUE NOUS OFFRONS</Description>
        <ContentWrapper>
          <ColumnOne>
            <Nouv>
              <FcDebt />
              <h3>Ingenierie de la Valeur</h3>
              <p>
                l'ingénierie de la valeur est utilisée pour résoudre les
                problèmes et éliminer les coûts indésirables GROUP-CIVIL DDK:
                Entreprise de BTP et Génie Civil à COTONOU, experte en
                Construction
              </p>
            </Nouv>

            <Nouv>
              <FcGlobe />
              <h3>géosapatial technologie</h3>
              <p>
                nous utilisons la technologie des données géospatiales pour
                fournir le meilleur géosapatial nous assurons aussi la
                planification et la rédaction des exigences CVC
              </p>
            </Nouv>
          </ColumnOne>

          <ColumnTwo></ColumnTwo>
        </ContentWrapper>
      </NouveauContainer>
    </div>
  );
};

export default Nouveau;

const NouveauContainer = styled.div`
width: 100%
background: #fcfcfc
color: #000;
padding: 5rem calc((100vw - 1300px)/2);
height: 100%;
`;

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`;
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1/5rem, 5vw, 2rem);
  font-weight: bold;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Nouv = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b;
  }
`;
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
