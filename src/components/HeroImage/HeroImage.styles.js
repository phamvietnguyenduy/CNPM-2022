import styled from "styled-components";
export const Wrapper = styled.div`
  background: url(${({ image }) => image});
  background-size: 100%;
  &:before{background: ${({ bg }) => bg}}
  width:100%;
  background-size: 100% 100%, cover;
  background-position: center;
  height: 700px;
  position: absolute;
`;
export const Contain = styled.div`
background: ${({ bg }) => bg};
&:before{background: ${({ bg }) => bg}}
`;
export const Content = styled.div`
  max-width: 1000px;
`;

