import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";
import "./style.css";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile`height: auto`}
`;

//transform makes it so the header slides when being arrow is clicked
const Wrapper = styled.div`
  height: auto;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

// background-color is grabbed from data
const Slide = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
`;
// const ImgContainer = styled.div`
//   height: 100%;
//   flex: 1;
//   position: relative;
// `;

const Image = styled.img`
  background: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
  height: auto;
  width: 100%;
  margin: 0 auto;
  z-index: 3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${mobile`background: url(${(props) => props.img2})`}
`;

const Arrow = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;

const Header = () => {
  //code to make slides move
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <>
      <Container className="">
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <Image className="img-fluid" src={item.img} img2={item.img2} />
              {/* <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button to="/products">SHOW NOW</Button>
              <Bder src={item.bder}></Bder>
            </InfoContainer> */}
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
      <div className="top-banner"></div>
    </>
  );
};

export default Header;
