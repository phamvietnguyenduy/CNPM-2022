import styled from "styled-components";
export const Wrapper = styled.div`
  h1 {
    font-size: 20px;
  }
  .right {
    text-align: right;
  }
  @media screen and (max-width: 980px) {
    max-width: 420px;
  }
`;
export const Image = styled.img`
  width: 100%;
  max-width: 420px;
  transition: all 0.3s;
  object-fit: cover;
  animation: animateThumb 0.5s;
  :hover {
    opacity: 0.8;
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
