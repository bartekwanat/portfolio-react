import {NavButton} from "../MenuButton/NavButton";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavLinks = () => {
    return (
        <>
            <NavLinksStyle>
                <Link to="/">
                    <NavButton text={'Home'} />
                </Link>
                <Link to="/about">
                    <NavButton text={'About me'} />
                </Link>
                <Link to="/portfolio">
                    <NavButton text={'Portfolio'} />
                </Link>
                <Link to="/contact">
                <NavButton text={'Contact'} />
                </Link>
            </NavLinksStyle>
        </>
    );
};

const NavLinksStyle = styled.nav`
  height: 100%;
  width: 40vw;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  
  &>a {
    text-decoration: none;
  }
    /* <320px */
 
  `