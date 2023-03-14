import styled from "styled-components";
import {sizes} from "../../../assets/helpers/ViewBreakpoints/ViewBreakpoints";
import {UpperTitle} from "../../atoms/Titles/UpperTitle";
import {BottomTitle} from "../../atoms/Titles/BottomTitle";
import {CenterTitle} from "../../atoms/Titles/CenterTitle";

export const WelcomePageTextContainer = () => {
    return(
        <WelcomePageTextContainerStyle>
            <UpperTitle>Check my website!</UpperTitle>
            <CenterTitle>I'M BARTEK</CenterTitle>
            <BottomTitle>WEB DEVELOPER & SOFTWARE ENGINEER</BottomTitle>
        </WelcomePageTextContainerStyle>
    );
}


const WelcomePageTextContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 150px;
  position: absolute;
  top: 10vh;
  z-index: 2;
  /* <320px */
  @media (max-width: ${sizes.mobile}) {
  }

  /* <320px - 768px */
  @media (max-width: ${sizes.tablet}) {
  }

  /* 768px -1064px*/
  @media (min-width: 1000px){
    left: 60vw;
    top: 30vh;
    width: 350px;
  }
  

  /* 1200px - 1400 */
  @media (min-width: ${sizes.largeDesktop}) {
    width: 450px;
    top: 25vh;
  }

  /* > 1400 */
  @media (min-width: ${sizes.veryLargeDesktop}) {
  }
  `