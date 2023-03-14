import styled from "styled-components";
import {sizes} from "../../../assets/helpers/ViewBreakpoints/ViewBreakpoints";


export const UpperTitle = styled.h3`
  color: #2a9d8f;
  font-size: 1.2rem;
  letter-spacing: 6px;
  
  
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
    font-size: 1.6rem;
  }

 `