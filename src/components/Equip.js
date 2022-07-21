import React from "react";
import styled from "styled-components";
import {
  AiFillEnvironment,
  AiFillAndroid,
  AiFillTool,
  AiOutlineBank,
  AiOutlineDashboard,
  AiOutlineGlobal,
} from "react-icons/ai";
const Equip = () => {
  return (
    <Section id="equip">
      <div className="title">
        <h2>Nos Equipments</h2>
      </div>
      <div className="equipments">
        <div className="equipment">
          <AiFillEnvironment color="orange" fontSize={20} />
          <h4>MODERNE TECHNOLOGIE</h4>
          <div className="info"></div>
          <div className="details">
            <p>
              notre équipe utilise les dernières technologies pour concevoir des
              objets civils de haute qualité
            </p>
            <span>DDK / EQUIPMENTS</span>
          </div>
        </div>

        <div className="equipment">
          <AiFillAndroid color="orange" fontSize={20} />
          <h4>EQUIPMENT PUISSANT</h4>
          <div className="info"></div>
          <div className="details">
            <p>
              nous utilisons moderne et puissant pour créer une infrastructure
              efficace et fiable
            </p>
            <span>DDK / EQUIPMENTS</span>
          </div>
        </div>

        <div className="equipment">
          <AiFillTool color="orange" fontSize={20} />
          <h4>MATERIEL DE QUALITE</h4>
          <div className="info"></div>
          <div className="details">
            <p>
              des matériaux de haute qualité sont la garantie absolue de la
              construction d'installations fiables
            </p>
            <span>DDK / EQUIPMENTS</span>
          </div>
        </div>

        <div className="equipment">
          <AiOutlineBank color="orange" fontSize={20} />
          <h4>PRIX ABORDABLE</h4>
          <div className="info"></div>
          <div className="details">
            <p>
              chez DDK-GROUP nous fournissons tous nos services et solutions à
              des prix tout à fait raisonnables
            </p>
            <span>DDK / EQUIPMENTS</span>
          </div>
        </div>

        <div className="equipment">
          <AiOutlineGlobal color="orange" fontSize={20} />
          <h4>PROFESSIONAL TEAM</h4>
          <div className="info"></div>
          <div className="details">
            <p>
              nous sommes une équipe d'ingénieurs civils expérimentés
              travaillant pour construire un monde meilleu
            </p>
            <span>DDK / EQUIPMENTS</span>
          </div>
        </div>

        <div className="equipment">
          <AiOutlineDashboard color="orange" fontSize={20} />
          <h4>24/7 SUPPORT</h4>
          <div className="info"></div>
          <div className="details">
            <p>
              Tout client de notre société bénéficie d'une assistance complète
              24h/24 et 7j/7 par nos consultants expérimentés
            </p>
            <span>DDK / EQUIPMENTS</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Equip;

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
  .equipments {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
    
   
    .equipment {
      background: linear-gradient(
        90deg,
        rgb(28, 27, 27) 0%,
        rgb(26, 23, 23) 100%
      );
      );
      padding: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 0.5rem;
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
          border-radius: 50%;
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
    .equipments {
      flex-direction: column;
      margin: 0;
      .equipment {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
