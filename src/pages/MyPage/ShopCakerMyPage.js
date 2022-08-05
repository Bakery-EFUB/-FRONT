import TopBar from "../../components/Common/Sidebar/TopBar";
import styled from "styled-components";

import PageTitle from "../../components/Common/PageTitle";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import orderList from "../../_mock/orderImage.json";
import http from "../../common/http";
import axios from "axios";

//전체 크기
const WrapBox = styled.div`
  width: 100%;
`;

//연핑크 박스
const PinkBox = styled.div`
  background-color: var(--sub-pink);
  margin-top: 120px;
  width: 100%;
  padding-bottom: 100%;
  height: 670.09px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//유저 이미지
const UserImg = styled.div`
  background: url(${props => props.ImageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  position: absolute;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  left: 24.21px;
  top: 210.91px;
`;

//유저 닉네임
const UserName = styled.div`
  position: absolute;
  width: 114.57px;
  height: 24px;
  left: 139px;
  top: 230.7px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

//caker 가게 회원
const UserPlace = styled.h1`
  position: absolute;
  width: 195.31px;
  height: 30.31px;
  left: 139px;
  top: 270.91px;
  font-family: "ITC Avant Garde Gothic";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

//계정 관리
const CountManager = styled.div`
  position: absolute;
  width: 57px;
  height: 14px;
  left: 210.69px;
  top: 237.7px;
  color: gray;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
`;

//핑크 버튼
const Button1 = styled.button`
  width: 380px;
  height: 60px;
  margin-top: 10%;
  color: var(--white);
  background: var(--main-pink);
  border-radius: 6px;
  border-style: none;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
`;

const Button2 = styled.button`
  width: 380px;
  height: 60px;
  margin-top: 10px;
  color: var(--white);
  background: var(--main-pink);
  border-radius: 6px;
  border-style: none;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
`;

//제안서 글씨
const CommitProposal = styled.div`
  width: 137.05px;
  height: 19px;
  margin-top: 44.31px;
  margin-right: 240px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

//제안서 툴
const BottomProposal = styled.div`
  margin-top: 19px;
  width: 380.14px;
  height: ${props => props.height};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//더보기
const MoreView = styled.div`
  margin-top: 19px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

//제안서 사진 방법1
const Article = styled.article`
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 120px;
  height: 120px;
  border: 1px solid pink;
  border-radius: 6px;
`;

const ShopCakerMyPage = () => {
  const [Mydatas, setMyData] = useState([]);
  const [SixImg, setSixImg] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (Mydatas.length > 6) {
      setSixImg(Mydatas.slice(0, 6));
    }
  }, [Mydatas]);

  console.log(JSON.parse(localStorage.getItem("user")));
  const ImageUrl = JSON.parse(localStorage.getItem("user")).imageUrl;
  const getData = () => {
    http
      .get("orders/myPin")
      .then(Response => {
        console.log("받아오기 성공", Response.data.sheetResponseDTOs);
        setMyData(Response.data.sheetResponseDTOs);
      })
      .catch(Error => {
        console.log("에러", Error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const Id = localStorage.getItem("storeId");
  return (
    <WrapBox>
      <TopBar></TopBar>
      <PageTitle title="마이페이지" margin="70.06px" />
      <UserName>
        {JSON.parse(localStorage.getItem("user")).nickname} 님
      </UserName>
      <Link to="/client/modify">
        {" "}
        <CountManager>계정 관리 &gt;</CountManager>
      </Link>

      <UserPlace>Caker 가게 회원</UserPlace>
      <UserImg ImageUrl={ImageUrl}></UserImg>
      <PinkBox>
        <Link to="/shop/modify">
          <Button1>가게 정보 관리</Button1>
        </Link>
        <Link to="/shop/pickupschedule/:{Id}">
          <Button2>픽업 일정 관리</Button2>
        </Link>
        <CommitProposal>댓글 단 제안서</CommitProposal>
        <BottomProposal>
          {visible ||
            SixImg.map(order => {
              return (
                <Article
                  key={order.sheetId}
                  title={order.locationDong}
                  image={order.imageUrl}
                ></Article>
              );
            })}
          {visible &&
            Mydatas.map(order => {
              return (
                <Article
                  key={order.sheetId}
                  title={order.locationDong}
                  image={order.imageUrl}
                ></Article>
              );
            })}
        </BottomProposal>

        <MoreView onClick={() => setVisible(!visible)}>
          더보기
          <br />∨
        </MoreView>
      </PinkBox>
    </WrapBox>
  );
};

export default ShopCakerMyPage;
