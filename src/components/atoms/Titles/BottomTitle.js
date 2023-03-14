import styled from "styled-components";
import {sizes} from "../../../assets/helpers/ViewBreakpoints/ViewBreakpoints";

export const BottomTitle = styled.h2`
  color: #ddd;
  font-size: 1rem;
  font-weight: 200;
  padding: 0;
  
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
   font-size: 1.5rem;
    text-align: center;
  }

 
`
