import styled from "styled-components";
import {sizes} from "../../../assets/helpers/ViewBreakpoints/ViewBreakpoints";

export const Logo = () => {
    return(
        <LogoStyle>
            <FirstName>Bartłomiej </FirstName>
            <LastName>Wanat</LastName>
        </LogoStyle>
    );
}

const LogoStyle = styled.div`
  height: 100%;
  width: 200px;
  
  margin: 0 10px 0 5vw;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  
`

export const FirstName = styled.h3`
    font-weight: 400;
    margin-left: 10px;
  color: #aaa;
  
  /* <320px */
  @media (max-width: ${sizes.mobile}) {
    font-size: 1rem;
  }

  /* <320px - 768px */
  @media (max-width: ${sizes.tablet}) {
    font-size: 1rem;
  }
`
export const LastName = styled.h3`
    font-weight: 500;
    margin-left: 10px;
  color: white;

  /* <320px */
  @media (max-width: ${sizes.mobile}) {
    font-size: 1rem;
  }

  /* <320px - 768px */
  @media (max-width: ${sizes.tablet}) {
    font-size: 1rem;
  }
`

