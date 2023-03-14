import {Wrapper} from "../../templates/Wrapper/Wrapper";
import styled from "styled-components";
import {WelcomePageTextContainer} from "../../molecules/WelcomePageText/WelcomePageTextContainer";
import {MyPhoto} from "../../atoms/MyPhoto/MyPhoto";
import {sizes} from "../../../assets/helpers/ViewBreakpoints/ViewBreakpoints";


export const WelcomePage = () => {
    return(
        <WelcomePageStyle>
            <WelcomePageTextContainer/>
            <MyPhoto/>
            <Wrapper/>
        </WelcomePageStyle>

    );
}

const WelcomePageStyle = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  
    /* <320px */
  @media (max-width: ${sizes.mobile}) {
    
  }

  /* <320px - 768px */
  @media (max-width: ${sizes.tablet}) {
  
  }

  /* 768px -1064px*/
  @media (min-width: ${sizes.tablet}) and (max-width: ${sizes.desktop}) {
    
  }
  
  /* 1064px - 1199px */
  @media (min-width: ${sizes.desktop}) {
    
  }

  /* 1200px - 1400 */
  @media (min-width: ${sizes.largeDesktop}) {
   
  }

  /* > 1400 */
  @media (min-width: ${sizes.veryLargeDesktop}) {
   
  }
`