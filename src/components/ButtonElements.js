import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
border-radius:60px:
background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
white-space: nowrap;
padding: ${({ big }) => (big ? "14px 42px" : "12px 30px")};
color: #fff;
font-weight: bold;
font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
outline: none;
border: none;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
background; background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);


&:hover{
    transition: all 0.2s ease-in-out;
   
    color: orange;
    
}
`;
