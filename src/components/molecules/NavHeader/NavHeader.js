import styled from "styled-components";
import {Logo} from "../../atoms/Logo/Logo";
import * as PropTypes from "prop-types";
import {NavLinks} from "../../atoms/NavLinks/NavLinks";
import {sizes} from "../../../assets/helpers/ViewBreakpoints/ViewBreakpoints";



function WelcomePageHeaderStyle(props) {
    return null;
}

WelcomePageHeaderStyle.propTypes = {children: PropTypes.node};
export const NavHeader = () => (
    <NavStyle>
        <Logo></Logo>
        <NavLinks></NavLinks>

    </NavStyle>
);



 const NavStyle = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 10vh;
   width: 100vw;
   position: fixed;
   background-color: #111;
   top: 0;
   left: 0;

   /* <768px */
   @media (max-width: ${sizes.tablet}) {
    display: none;
   }

   /* >1064px */
   @media (min-width: 1140px) {
    top: 90vh;
   }
   
   

 `


