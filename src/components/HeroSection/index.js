import React from "react";
import { useState } from "react";
import Video from "../../videos/video1.mp4";
import { GiEarthAmerica } from "react-icons/gi";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForWard,
  ArrowRight,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          GROUP-CIVIL DDK
          <GiEarthAmerica color="orange" font-size={40} />
        </HeroH1>
        <HeroP>
          OUEST-AFRICA HOLDING
          <GiEarthAmerica color="orange" font-size={20} />
          <br />
          Notre service a pour fonction principale de concevoir des
          infrastructures (routes, bâtiments, ponts, tunnels) et différents
          types d'aménagement. C'est une profession qui mobilise des compétences
          techniques approfondies et un bon sens relationnel!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            COMMENCER {hover ? <ArrowForWard /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
