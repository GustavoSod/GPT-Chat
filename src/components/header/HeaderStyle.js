import styled from "styled-components";


const size = {
    mobile: '700px',
    tablet: '1150px',
  }
  

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
  };

export const AreaHeader = styled.div`
    width: 20%;
    height: 100vh;
    background-color: #0F0F0F;
    display: flex;
    flex-direction: column;
    text-align: center;
    @media ${device.tablet} { 
        display: none;
      }
`;

export const TextHeader = styled.div`
    color: #fff;
`;