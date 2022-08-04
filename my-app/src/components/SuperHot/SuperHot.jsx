import styled from "styled-components/macro";

const SuperHotStyle = styled.div`
.div_SuperHot {
  position: absolute;
  width: 150px;
  height: 26px;
  left: 240px;
  top: 865px;

  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 26px;
  color: #FFFFFF;
}
.nav {}

.nav li {
    display: inline-block;
    font-size: 25px;
    padding: 20px;

}
.list_btn {
  position: absolute;
  width: 90px;
  height: 45px;
  top: 920px;
  border-radius: 5px;
  border: none;
  background: #30384D;

  font-family: 'DM Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  color: #FFFFFF;

}
.div_productImg {
  position: absolute;
  width: 270px;
  height: 280px;
  background: #30384D;
  border-radius: 5px;
  border: none;
}
.img1 {
  position: relative;
  width: 222px;
  height: 223px;
  left: 22px;
  right: 37px;
  bottom: 15px;
}

.div_crazy_apes {
  position: absolute;
  width: 54px;
  height: 13px;
  left: 40px;
  top: 246px;

  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 10.5px;
  line-height: 13px;

  color: #FFFFFF;
}

.div_created {
  position: absolute;
  width: 126px;
  height: 15px;
  left: 40px;
  top: 263px;

  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;

  color: #FFFFFF;
}

.img_ellipse1 {
  position: absolute;
  width: 32px;
  height: 30px;
  left: 235px;
  top: 241px;
}

.img_ellipse2 {
  position: absolute;
  width: 15px;
  height: 15px;
  left: 50px;
  top: 297px;
}

.div_ICX {
  position: absolute;
  width: 52px;
  height: 15px;
  left: 75px;
  top: 298px;

  font-family: 'DM Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;

  color: #FFFFFF;
}
.div_page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  position: absolute;
  width: 25px;
  height: 25px;

  top: 1758px;

  border: 1px solid #99A3FF;
  border-radius: 4px;
}

.div_page1 {
  position: absolute;
  left: 40%;
  right: 30%;
  top: 40%;
  bottom: 40%;

}

.div_textpage {
  width: 6px;
  height: 20px;

  /* Subtitle/Small/Bold */
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  text-align: center;
  letter-spacing: 1px;

  /* Brand/Primary/Light */
  color: #99A3FF;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
`;

const ButtonStyle = styled.button`

  ${({ bgColor, left, width, height }) => {
    return `
      background: ${bgColor};
      left: ${left}px;
      height: ${height}px;
      width: ${width}px;
  `;
  }};
`;

const ProductImgStyle = styled.li`
  
  ${({left, top}) => {
    return `
      left: ${left}px;
      top: ${top}px;
  `;
  }};
`;

export const ProductImg = ({left, top, 
                            imgSrc, imgDes, imgName, imgAuthor, 
                            imgEllipse1, imgEllipse1Des, 
                            imgEllipse2, imgEllipse2Des, 
                            icx}) => {
  return (
      <ProductImgStyle left={left} top={top} className="div_productImg">
        <img className="img1" src={imgSrc} alt={imgDes}></img>
        <div className="div_crazy_apes">{imgName}</div>
        <div className="div_created">{imgAuthor}</div>
        <img className="img_ellipse1" src={imgEllipse1} alt={imgEllipse1Des}></img>
        <img className="img_ellipse2" src={imgEllipse2} alt={imgEllipse2Des}></img>
        <div className="div_ICX">{icx}</div>
     </ProductImgStyle>
  );
}

const PageStyle = styled.div`

  ${({left, background}) => {
    return `
      left: ${left}px;
      background: ${background};
  `;
  }};
`;

export const Page = ({left, background, imgSrc, imgDes, isImg=false, index}) => {
  if (isImg === false){
    console.log(isImg);
    return (
      <PageStyle className="div_page" left={left} background={background}>
         <img className="div_page1" src={imgSrc} alt={imgDes}></img>
      </PageStyle>
   );
  } else{
    return (
      <PageStyle className="div_page" left={left} background={background}>
         <span className="div_textpage">{index}</span>
      </PageStyle>
   );
  }
  
}

export const SuperHot = () => {
  return (
    <SuperHotStyle>
      <section>
        <div className="div_SuperHot">
            Super Hot
        </div>
        <div>
          <ButtonStyle className="list_btn" left={260} >Music</ButtonStyle>
          <ButtonStyle className="list_btn" left={400} bgColor={"#8E99F8"}>Art</ButtonStyle>
          <ButtonStyle className="list_btn" left={550}>Sport</ButtonStyle>
          <ButtonStyle className="list_btn" left={700} width={180}>Photography</ButtonStyle>
          <ButtonStyle className="list_btn" left={950} width={180}>Virtual Reality</ButtonStyle>
          <ButtonStyle className="list_btn" left={1180}>Videos</ButtonStyle>
          <ButtonStyle className="list_btn" left={1330}>...</ButtonStyle>
        </div>
        <ul className="nav">
          <ProductImg left={230} top={1004}
                     imgSrc={"./assets/image_1.png"} imgDes={"description"} imgName={"Crazy Apes"} imgAuthor={"Created by hx45...250e"}
                     imgEllipse1={"./assets/Ellipse_1.png"} imgEllipse1Des={"description"} 
                     imgEllipse2={"./assets/Ellipse_2.png"} imgEllipse2Des={"description"} 
                     icx={"3.90 ICX"}
          ></ProductImg>
          <ProductImg left={690} top={1004}
                     imgSrc={"./assets/image_2.png"} imgDes={"description"} imgName={"Crazy Apes"} imgAuthor={"Created by hx45...250e"}
                     imgEllipse1={"./assets/Ellipse_1.png"} imgEllipse1Des={"description"} 
                     imgEllipse2={"./assets/Ellipse_2.png"} imgEllipse2Des={"description"} 
                     icx={"3.90 ICX"}
          ></ProductImg>
          <ProductImg left={1150} top={1004}
                     imgSrc={"./assets/image_3.png"} imgDes={"description"} imgName={"Crazy Apes"} imgAuthor={"Created by hx45...250e"}
                     imgEllipse1={"./assets/Ellipse_1.png"} imgEllipse1Des={"description"} 
                     imgEllipse2={"./assets/Ellipse_2.png"} imgEllipse2Des={"description"} 
                     icx={"3.90 ICX"}
          ></ProductImg>
        </ul>
        <ul className="nav">
          <ProductImg left={230} top={1385}
                      imgSrc={"./assets/image_4.png"} imgDes={"description"} imgName={"Crazy Apes"} imgAuthor={"Created by hx45...250e"}
                      imgEllipse1={"./assets/Ellipse_1.png"} imgEllipse1Des={"description"} 
                      imgEllipse2={"./assets/Ellipse_2.png"} imgEllipse2Des={"description"} 
                      icx={"3.90 ICX"}
            ></ProductImg>
            <ProductImg left={690} top={1385}
                      imgSrc={"./assets/image_5.png"} imgDes={"description"} imgName={"Crazy Apes"} imgAuthor={"Created by hx45...250e"}
                      imgEllipse1={"./assets/Ellipse_1.png"} imgEllipse1Des={"description"} 
                      imgEllipse2={"./assets/Ellipse_2.png"} imgEllipse2Des={"description"} 
                      icx={"3.90 ICX"}
            ></ProductImg>
            <ProductImg left={1150} top={1385}
                      imgSrc={"./assets/image_6.png"} imgDes={"description"} imgName={"Crazy Apes"} imgAuthor={"Created by hx45...250e"}
                      imgEllipse1={"./assets/Ellipse_1.png"} imgEllipse1Des={"description"} 
                      imgEllipse2={"./assets/Ellipse_2.png"} imgEllipse2Des={"description"} 
                      icx={"3.90 ICX"}
            ></ProductImg>            
        </ul>
        <div>
            <Page left={710} imgSrc={"./assets/Union.png"} imgDes="description"></Page>
            <Page left={760} imgSrc={"./assets/Vector.png"} imgDes="description"></Page>
            <Page left={810} isImg={true} index={1}></Page>
            <Page left={860} isImg={true} index={2}></Page>
            <Page left={910} isImg={true} index={3}></Page>
            <Page left={960} imgSrc={"./assets/Vector_1.png"} imgDes="description"></Page>
            <Page left={1010} imgSrc={"./assets/Union_1.png"} imgDes="description"></Page>
        </div>
    </section>
    </SuperHotStyle>    
  );
}