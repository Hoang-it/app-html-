import styled from "styled-components/macro";

const IntroStyle = styled.div`
.div_left1 {
  position: absolute;
  width: 400px;
  height: 231px;
  left: 220px;
  top: 138px;

  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 77px;

  color: #FFFFFF;
}

.div_left2 {
  position: absolute;
  width: 300px;
  height: 40px;
  left: 220px;
  top: 381px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;

  color: #FFFFFF;
}

  .btn2 {
    position: absolute;
    width: 199px;
    height: 40px;
    left: 218px;
    top: 433px;

    background: #8E99F8;
    border-radius: 5px;
  }

  .logo1 {
      position: absolute;
      width: 200px;
      height: 1510px;
      left: 530px;
      top: 689px;
  }

  .logo2 {
      position: absolute;
      width: 348px;
      height: 100px;
      left: 730px;
      top: 689px;
  }

  .logo3 {
      position: absolute;
      width: 250px;
      height: 130px;
      left: 1000px;
      top: 664px;
  }
  body {
    background-color: #1C233D;
    color: white;
  }
`;

export const Intro = () => {
  return (
    <IntroStyle>
      <div className="intro">
        <div>
            <div className="left">
                <div className="div_left1">
                    Discover, Sell & Collect Rare NFTs
                </div>
                <div className="div_left2">
                    Digital marketplace for crypto collections and
                    non-fungible tokens (NFTs)
                </div>
                <div>
                    <button className="btn2" type="button">Discover Now</button>
                </div>
            </div>
            <div className="right">
                <img src="./assets/devera.png" alt="description"></img>
            </div>
        </div>
        <div className="logo1">
            <img src="./assets/icon.svg" alt="description"></img>
        </div>
        <div className="logo2">
            <img src="./assets/devera-logo.png" alt="description"></img>
        </div>
        <div className="logo3">
          <img height="110" src="./assets/lecle.png" alt="description"></img>
        </div>
    </div>
          

      </IntroStyle>    
  );
}