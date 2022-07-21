import { FaBars } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            DDK-GROUP <GiEarthAmerica color="orange" fontSize={25} />{" "}
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/hero">HOME</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="about">ABOUT</NavLinks>
            </NavItem>
            <a
              href="#signup"
              style={{ color: "orange", textDecoration: "none" }}
            >
              SERVICES
            </a>

            <NavItem>
              <NavLinks to="Contact">CONTACT</NavLinks>
            </NavItem>

            <a href="/" style={{ color: "orange", textDecoration: "none" }}>
              DECONNECTER
            </a>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
