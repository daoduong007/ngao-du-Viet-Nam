import styled from 'styled-components'

export const StyledFooterContainer = styled.div`

width: 100%;
height: 418px;
padding: 0 165px;

display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #1C1C1E;

.footer-content {
  height: 366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer-social{
  width: 11%;
  padding-top: 50px;
}

.footer-diretional-infomation-contact {
  width: 56%;
  padding: 90px 0 60px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer-directional {
}

.footer-infomation {}

.social-contact {}

.footer-coppyright {
  background: #000000;

  height: 41px;
  margin :0 -165px;
  display: flex;
  align-items: center;
  justify-content: center;

  p{
  margin: 0;
  font-family: 'Apercu Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #FFFFFF;
  }
}

@media (max-width: 3250px) {
}
@media (max-width: 1200px) {
  padding: 0 50px;
  .footer-diretional-infomation-contact {
  width: 75%;
  }
  .footer-social{
  width: 11%;
  padding-top: 20px;
  }

  .footer-diretional-infomation-contact {
    padding: 50px 0 40px 0;
  }

  .footer-coppyright {
    margin :0 -50px;
  }
}
@media (max-width: 768px) {
  .footer-diretional-infomation-contact {
    width: 60%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

}
@media (max-width: 600px) {
  padding: 0 20px;
  height: 350px;
  .footer-diretional-infomation-contact {
    padding-top:60px;
    padding-bottom: 0;
    width: 60%;

  }
  .footer-social{
  width: 22%;
  padding-top: 20px;
  }
  .footer-coppyright {
    margin :0 -20px;
  }
  .footer-content {
    margin-bottom: 20px;
  }
}
`