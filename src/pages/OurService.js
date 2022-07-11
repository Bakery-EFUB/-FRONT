import React from "react";
import styled from "styled-components";
import ServiceBackground from "../images/ServiceBackground.svg";
import TopBar from "../components/TopBar"
import WeAreCakers from "../images/WeAreCakers.svg";
import ServiceTitle from "../images/ServiceTitle.svg";
import DescriptionText from "../images/DescriptionText.svg";
import BigPinkButton from "../components/BigPinkButton";

const Container = styled.div`
    width: 100%;
    align-items: center;
`;
const BackGroundImg = styled.div`
    background: url(${ServiceBackground});
    background-repeat: no-repeat;
    width: 100%;
    top: 23%;
    height: 1379.12px;
    position: absolute;
`;
const StartText = styled.div`
    color: #FF7B72;
    font-size:20px;
    position: absolute;
    margin-left: 5%;
    top: 27%;
    font-family:'Apple SD Gothic Neo';
`;
const StartLogo = styled.img`
    position: absolute;
    margin-left: 5%;
    top: 32%;
`;
const Description1 = styled.img`
    position: absolute;
    margin-left: 5%;
    top: 42%;
`;
const TitleText1 = styled.div`
    color: black;
    position: absolute;
    font-weight: 10%;
    font-size: 40px;
    margin-left: 5%;
    top: 62%;
    font-family: 'Apple SD Gothic Neo';
`;
const DescriptionBox1 = styled.div`
    position: absolute;
    top:71%;
    margin-left: 5%;
    display: flex;
`;
const Description2 = styled.div`
    color: black;
    font-size: 14px;
    margin-top: 2%;
    font-family: 'Apple SD Gothic Neo';
    white-space: wrap;
`;
const TitleText2 = styled.div`
    color: black;
    position: absolute;
    font-weight: 10%;
    font-size: 40px;
    right: 5%;
    top: 150%;
    font-family: 'Apple SD Gothic Neo';
`;
const DescriptionBox2 = styled.div`
    position: absolute;
    top:159%;
    right: 5%;
    display: flex;
    text-align: right;
`;
const Description3 = styled.div`
    color: black;
    font-size: 14px;
    margin-top: 2%;
    font-family: 'Apple SD Gothic Neo';
    white-space: wrap;
`;
const LastImg = styled.img`
    position: absolute;
    top: 250%;
    left: 10%;
`;
const Button = styled.div`
    position: absolute;
    top: 140%;
`
const OurService = () =>{
    return(
        <>
            <Container> 
                <TopBar/>
                <BackGroundImg></BackGroundImg>
                <StartText>특별한 하루 메이커,</StartText>
                <StartLogo src={ServiceTitle}/>
                <Description1 src={DescriptionText}/>
                <TitleText1>A special day maker</TitleText1>
                <DescriptionBox1>
                    <Description2>케이커를 통해 특별한 하루를 만들어보세요.<br/><br/>케이커는 고객님들이 상상한 모든 케이크를<br/><br/>구현하기 위해 늘 최선을 다합니다.</Description2>
                </DescriptionBox1>
                <TitleText2>For your sweet day</TitleText2>
                <DescriptionBox2>
                    <Description3>나만의 케이크로 달콤한 하루를 선사하세요.<br/><br/>당신이 상상한 모든 케이크,<br/><br/>케이커에서 만나보세요!</Description3>
                    
                </DescriptionBox2>
                <LastImg src={WeAreCakers}/>
            </Container>
            <Button>
                <BigPinkButton>제안서 작성하기</BigPinkButton>
            </Button>
        </>
    )
};
export default OurService;