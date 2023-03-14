import photo from '../../../assets/images/MyPhoto.png'
import styled from "styled-components";
import {sizes} from "../../../assets/helpers/ViewBreakpoints/ViewBreakpoints";

export const MyPhoto = () => {
    return(
        <MyPhotoStyle src={photo}></MyPhotoStyle>
    );
}

const MyPhotoStyle = styled.img`
  position: absolute;
  bottom: 0;
  height: 60vh;
  opacity: 0.8;
  z-index: 1;

  /* <320px */
  @media (max-width: ${sizes.mobile}) {
   
  }

  /* <320px - 768px */
  @media (max-width: ${sizes.tablet}) {
    
  }

  /* >768px */
  @media (min-width: ${sizes.tablet})  {
  left: 20vw;
    height: 65vh;
  }

  /* 1200px - 1400 */
  @media (min-width: ${sizes.largeDesktop}) {
    left: 17vw;
    height: 70vh;
  }
  `