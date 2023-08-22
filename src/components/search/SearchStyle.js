import styled from "styled-components";


const size = {
    mobile: '700px',
    tablet: '1150px',
  }
  

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
  };

export const AreaSearch = styled.div`
    width: 80%;
    height: 100vh;
    background-color: #292929;
    display: flex;
    flex-direction: column;
    text-align: center;
    @media ${device.tablet} { 
        width: 100%;
      }
`;

export const InputSearch = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #0F0F0F;
`;

export const InputText = styled.input`
    background-color: #6B6B6B;
    color: #fff;
    width: 40%;
    height: 45%;
    border: none;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
`;

export const ButtonSearch = styled.button`
    background-color: #B152FF;
    height: 47%;
    color: #eeee;
    font-weight: bold;
    font-size: 12px;
    width: 10vh;
    border: none;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
`;
export const ContentArea = styled.div`
    overflow-y: scroll;
    height: 85%;
    color: #fff;
    width: 65%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: start;
`;

export const TextArea = styled.input`
    color: #fff;
`;