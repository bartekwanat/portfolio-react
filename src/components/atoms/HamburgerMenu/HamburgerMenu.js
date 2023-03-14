import { useState } from "react";
import styled from "styled-components";
import { faBars as hamburger, faXmark as close } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavButton } from "../MenuButton/NavButton";
import {sizes} from "../../../assets/helpers/ViewBreakpoints/ViewBreakpoints";
import {Link} from "react-router-dom";

export const Hamburger = () => {
    const [open, setOpen] = useState(false);

    const onClickHandler = () => {
        setOpen(!open);
    };

    return (
        <HamburgerIcon>
            <FontAwesomeIcon onClick={onClickHandler} icon={open? close : hamburger} />
            <HamburgerMenu open={open} />
        </HamburgerIcon>
    );
};

export const HamburgerMenu = ({ open }) => {
    return (
        <HamburgerNavLinks open={open}>
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
        </HamburgerNavLinks>
    );
};

const HamburgerIcon = styled.div`
  position: fixed;
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2.2rem;
  color: darkgray;
  right: 6vw;
  z-index: 999;

  
  &> :hover {
    color: #2a9d8f;
    transition: 0.1s;
  }
  
/* >768px */
  @media (min-width: ${sizes.tablet}) {
    display: none;
  }
`;

const HamburgerNavLinks = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(${({ open }) => (open ? "0" : "-100vh")});
  height: 100vh;
  width: 100vw;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
  transition: transform 0.3s ease-in-out;

  &>* {
    text-decoration: none;
  }
`;

