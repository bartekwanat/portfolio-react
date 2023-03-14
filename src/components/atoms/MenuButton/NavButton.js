
import styled from "styled-components";

export const NavButton = (props) => {
    return(
    <NavButtonStyle>
        {props.text}
    </NavButtonStyle>
    )
}

const NavButtonStyle = styled.div`
  width: 120px;
  height: 2.5rem;
  color: #aaa;
  font-size: 1rem;
  text-align: center;
  padding: 5px;
  transform: translateY(10px);
  
  &:hover {
    color: #2a9d8f;
    &::after {
      content: "";
      display: block;
      text-align: center;
      bottom: 0;
      height: 1px;
      background-color: #aaa;
      
      animation: underline 0.3s both;
      
    }
  }

  @keyframes underline {
    from {
      transform: scaleX(0) translateY(0.5rem);
    }
    to {
      transform: scaleX(0.6) translateY(0.5rem);
    }
  }
`