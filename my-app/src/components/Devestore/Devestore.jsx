import styled from "styled-components/macro";

const DevestoreStyle = styled.section`
.div_devestore {
  position: absolute;
  width: 195px;
  height: 51px;
  left: 280px;
  top: 1878px;

  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 51px;
  /* identical to box height */
  color: #E5E5E5;

}

.div_NFTs {
  position: absolute;
  width: 381px;
  height: 40px;
  left: 278px;
  top: 1938px;

  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #FFFFFF;

}

.div_hashtagTittle {
  position: absolute;
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height */
  color: #FFFFFF;

}

.div_hashtag {
  position: absolute;
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #FFFFFF;
}
`;
const DivStyle = styled.div`

  ${({ position, width, height, left, top, background }) => {
    return `
      position: ${position};
      width: ${width}px;
      height: ${height}px;   
      background: ${background};
      left: ${left}px;
      top: ${top}px;   
  `;
  }};
`;
export const Devestore = () => {
  return (
    <DevestoreStyle>      
        <div>
            <div className="div_devestore">Devestore</div>
            <div className="div_NFTs">Amazing NFTs marketplace, Authentic and unique
                digital creation.</div>
            <DivStyle position={"absolute"} width={29} height={28} left={280} top={2005} background={"url(./assets/face.png)"}></DivStyle>
            <DivStyle position={"absolute"} width={29} height={28} left={325} top={2005} background={"url(./assets/yt.png)"}></DivStyle>
            <DivStyle position={"absolute"} width={29} height={28} left={370} top={2005} background={"url(./assets/twitter.png)"}></DivStyle>
        </div>
        <div>
          <DivStyle className="div_hashtagTittle" width={121} height={26} left={920} top={1891}>Marketplace</DivStyle>
          <DivStyle className="div_hashtag" width={58} height={20} left={951} top={1929}>Explore</DivStyle>
          <DivStyle className="div_hashtag" width={36} height={20} left={959} top={1953}>NFTs</DivStyle>
          <DivStyle className="div_hashtag" width={91} height={20} left={938} top={1978}>Collectibles</DivStyle>
          <DivStyle className="div_hashtag" width={109} height={20} left={929} top={2005}>Virtual Reality</DivStyle>
        </div>
        <div>
          <DivStyle className="div_hashtagTittle" width={101} height={26} left={1170} top={1891}>Resources</DivStyle>
          <DivStyle className="div_hashtag" width={91} height={20} left={1175} top={1924}>Help Center</DivStyle>
          <DivStyle className="div_hashtag" width={66} height={20} left={1188} top={1952}>Partners</DivStyle>
          <DivStyle className="div_hashtag" width={35} height={20} left={1203} top={1979}>Blog</DivStyle>
          <DivStyle className="div_hashtag" width={83} height={20} left={1179} top={2005}>Newsletter</DivStyle>                                                
        </div>
        <div>
          <DivStyle className="div_hashtagTittle" width={91} height={26} left={1350} top={1891}>Company</DivStyle>
          <DivStyle className="div_hashtag" width={71} height={20} left={1360} top={1928}>About Us</DivStyle>
          <DivStyle className="div_hashtag" width={59} height={20} left={1366} top={1952}>Careers</DivStyle>
          <DivStyle className="div_hashtag" width={64} height={20} left={1368} top={1979}>Support</DivStyle>
          <DivStyle className="div_hashtag" width={83} height={20} left={1358} top={2005}>Newsletter</DivStyle>                                                                           
        </div>
    </DevestoreStyle>    
  );
}