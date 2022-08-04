import styled from "styled-components/macro";

const FooterStyle = styled.footer`
.footer {
  position: absolute;
  height: 18px;
  top: 2072px;

  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */
  color: #545C71;

}
`;
const DivStyle = styled.div`

  ${({width,left}) => {
    return `
      width: ${width}px;
      left: ${left}px; 
  `;
  }};
`;
export const Footer = () => {
  return (
    <FooterStyle>      
        <DivStyle className="footer" width={281} left={277}>Copyright 2022 Devera, All right reserved</DivStyle>
        <DivStyle className="footer" width={95} left={1179}>Privacy Policy</DivStyle>
        <DivStyle className="footer" width={129} left={1320} >Terms & Conditions</DivStyle>
    </FooterStyle>    
  );
}