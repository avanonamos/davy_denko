import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyles = styled.div`
  text-align: center;

  .servicesItem__icon {
    svg {
      width: 4rem;
      color: white;
    }
  }
  .servicesItem__title {
    font-size: 1rem;
    font-family: "Montserrat SemiBold";
    color: white;
  }
  .para {
    margin-top: 1rem;
    color: white;
    font-size: 20px;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "Web Design",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
