import styled from 'styled-components'

export const StyledFooterContainer = styled.div`
position: relative;
width: 100%;
height: 418px;
display: flex;
flex-direction: column;
background-color: #1C1C1E;
.footer-content {
    height: 366px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 164px 102px 168px;
}
`

export const StyledFooterSocial = styled.div`
display: flex;
flex-direction: column;
.footer-social-list-icon {
    display: flex;
    flex-direction: row;
}
.footer-social-icon {
margin: 30px 10px 0 5px;
}
`

export const StyledFooterDirectional = styled.div`
margin-top: 15px;

p {
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 160%;
/* or 22px */

color: #FFFFFF;

&:hover {
    cursor: pointer;
}
}
`

export const StyledFooterInformation = styled.div`
p { 
    font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 372%;
/* or 52px */


color: #FFFFFF;

&:hover {
    cursor: pointer;
}
}
`

export const StyledFooterContact = styled.div`
width: 255px;
height: 98px;
display: flex;
flex-direction: column;
justify-content: center;

p {
    color: #FFFFFF;
    font-Weight:normal;
    font-size: 14px;
}

.footer-contact-location {
    display: flex;
    flex-direction: row;
}

.footer-contact-email {
    display: flex;
    flex-direction: row;
}
.icon-footer-contact {
    margin-right: 20px;
}
`

export const StyledFooterLicense = styled.div`
  position: absolute;
  width:100%;
  height: 41px;
  top: 377px;
  background-color:#000000;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-Family:'Apercu Pro';
    font-Weight:normal;
    font-Size: 14px;
    line-Height:24px;
  }
`