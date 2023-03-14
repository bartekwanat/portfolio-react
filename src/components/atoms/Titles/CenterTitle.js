import styled from "styled-components";
import {sizes} from "../../../assets/helpers/ViewBreakpoints/ViewBreakpoints";

export const CenterTitle = styled.h1`
  box-sizing: content-box;
  letter-spacing: 0.3rem;
  color: #999;
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  
    /* <320px */
  @media (max-width: ${sizes.mobile}) {
    
  }

  /* <320px - 768px */
  @media (max-width: ${sizes.tablet}) {
   
  }

  /* 768px -1064px*/
  @media (min-width: ${sizes.tablet}) {
   font-size: 2.5rem;
  }
  /* 1200px - 1400 */
  @media (min-width: ${sizes.largeDesktop}) {
    font-size: 3.5rem;
    
  }
  
`