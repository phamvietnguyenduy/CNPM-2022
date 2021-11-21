import styled from "styled-components";
export const Wrapper = styled.div`
  background: url(${({ image }) => image});

  background-size: 100%, cover;
  background-position: center;
  height: 500px;
  position: relative;
  animation: animationHeroImage 1s;
  @keyframes animationHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: 200px;
`;
