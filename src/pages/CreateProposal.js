import React, { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import TopBar from "../components/TopBar";
import PickUp from "./CreateProposal/PickUp";
import City from "./CreateProposal/City";
import Cake from "./CreateProposal/Cake";
import Size from "./CreateProposal/Size";
import Taste from "./CreateProposal/Taste";
import Price from "./CreateProposal/Price";
import Design from "./CreateProposal/Design";
import Done from "./CreateProposal/Done";

import API from "../components/API";

const CreateProposal = () => {
  const [history, setHistory] = useState(0);

  const [original, setOriginal] = useState({
    cityId: [],
    city: [],
    cakeId: null,
    cake: null,
    sizeId: null,
    size: null,
    tasteId: null,
    taste: null,
    design: null,
    priceId: null,
    min: null,
    max: null,
    pickUp: null,
    file: null,
  });

  const navigate = useNavigate();

  const postProposal = async () => {
    const response = await API.post("/orders", {
      locationGu: "서대문구", //구
      locationDong: original.city[0], //동
      type: original.cake, //케이크 종류
      flavor: original.taste, //케이크 맛
      size: original.size, //케이크 크기
      description: original.design, //케이크 설명
      pickupDate: pickUp, //픽업일자/시간
      priceMin: min, //minimum 가격
      priceMax: max, //maximum 가격
      hashtag: original.city[0], //해시태그
    })
      .then(response => {
        navigate("/create/done");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const dropHandler = file => {
    //file을 백엔드에 전해줌(1)

    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", file);

    for (let key of formData.keys()) {
      console.log("키임", key);
    }

    for (let value of formData.values()) {
      console.log("왜안돼시발", value);
    }

    // API.post("/orders", formData, config)
    //   // 백엔드가 file저장하고 그 결과가 reponse에 담김
    //   // 백엔드는 그 결과를 프론트로 보내줌(3)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    console.log("변화", original);
  }, [original]);

  return (
    <div>
      <TopBar />
      <Routes>
        <Route
          path="/city"
          element={
            <City
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/cake"
          element={
            <Cake
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/size"
          element={
            <Size
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/taste"
          element={
            <Taste
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/price"
          element={
            <Price
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/design"
          element={
            <Design
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/pickup"
          element={
            <PickUp
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
              dropHandler={dropHandler}
            />
          }
        />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
};

export default CreateProposal;
