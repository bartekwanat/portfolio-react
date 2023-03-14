import styled from "styled-components";
import photo from '../../../assets/images/Background.svg'
import {NavHeader} from "../../molecules/NavHeader/NavHeader";
import {Hamburger} from "../../atoms/HamburgerMenu/HamburgerMenu";

export const Wrapper = () => {
    return(
        <WrapperStyle>
            <NavHeader/>
            <Hamburger/>

        </WrapperStyle>
    );
}

const WrapperStyle = styled.div`
  &::before {
    display: block;
    position: fixed;
    content: '';
    width: 100vw;
    height: 100vh;
    background-color: #111;
    background-image: url(${photo});
    background-size: 300px;
    opacity: 0.1;
    z-index: -999;
    left: 0;
  }
`