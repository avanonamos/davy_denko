import React from "react";
import { GiEarthAmerica } from "react-icons/gi";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <GiEarthAmerica color="orange" fontSize={40} />
      <Icon onClick={toggle}>
        <CloseIcon />{" "}
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="/" onClick={toggle}>
            HOME{" "}
          </SideBarLink>

          <SideBarLink to="/" onClick={toggle}>
            ABOUT
          </SideBarLink>

          <SideBarLink to="/" onClick={toggle}>
            SERVICES
          </SideBarLink>

          <SideBarLink to="/" onClick={toggle}>
            CONTACT
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">CONNECTER</SidebarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
