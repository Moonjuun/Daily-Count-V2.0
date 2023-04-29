import React, { useState } from "react";
import ConvertMenuBar from "../../component/ConverMenuBar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Head from "next/head";

const TemperatureCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");

  const unitFactors = {
    celsius: {
      fahrenheit: (celsiusValue) => celsiusValue * (9 / 5) + 32,
      kelvin: (celsiusValue) => celsiusValue + 273.15,
      rankine: (celsiusValue) => (celsiusValue + 273.15) * (9 / 5),
      label: "섭씨온도(℃)",
    },
    fahrenheit: {
      celsius: (fahrenheitValue) => (fahrenheitValue - 32) * (5 / 9),
      kelvin: (fahrenheitValue) => (fahrenheitValue + 459.67) * (5 / 9),
      rankine: (fahrenheitValue) => fahrenheitValue + 459.67,
      label: "화씨온도(℉)",
    },
    kelvin: {
      celsius: (kelvinValue) => kelvinValue - 273.15,
      fahrenheit: (kelvinValue) => kelvinValue * (9 / 5) - 459.67,
      rankine: (kelvinValue) => kelvinValue * (9 / 5),
      label: "절대온도(K)",
    },
    rankine: {
      celsius: (rankineValue) => (rankineValue - 491.67) * (5 / 9),
      fahrenheit: (rankineValue) => rankineValue - 459.67,
      kelvin: (rankineValue) => rankineValue * (5 / 9),
      label: "랭킨온도(°R)",
    },
  };

  const handleFromValueChange = (e) => {
    setFromValue(e.target.value);
  };

  const handleFromUnitChange = (e) => {
    setFromUnit(e.target.value);
  };

  const handleToUnitChange = (e) => {
    setToUnit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const convertTemperature = (value, from, to) => {
    if (from === to) {
      return value;
    }
    return unitFactors[from][to](value);
  };

  const result = convertTemperature(
    Number(fromValue),
    fromUnit,
    toUnit
  ).toFixed(6);

  return (
    <>
      <Head>
        <title>Daily Count 데일리 카운트 - 온도 계산기</title>
        <meta charset="utf-8" />
        <meta name="referrer" content="always" />
        <meta
          name="description"
          content="데일리 카운트, 당신의 일상 속 모든 계산기, 온도 계산기"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="67f0f075f4772fe9f2d3c370f0ffc4f63ee2120d"
        />
        <meta
          name="keywords"
          content="데일리 카운트, 계산기, 일반 계산, 이자 계산기, 적금 계산기, 예금 계산기, 만나이 계산기, 시급 계산, 단위 환산, 단위 계산, 날짜 계산, 글자수 계산, 비만도 계산, 퍼센트 계산, 길이 계산, 넓이 계산, 무게 계산, 부피 계산, 온도 계산, 압력 계산, 속도 계산, 연비 계산, 데이터 계산"
        />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:site_name"
          content="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 온도 계산기"
        />
        <meta
          property="og:image"
          content="/DailyCount.png"
          alt="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 온도 계산기"
        />
        <meta
          property="og:title"
          content="daily-count 데일리 카운트, 당신의 일상 속 계산기 - 온도 계산기"
        />
        <meta
          property="og:description"
          content="데일리 카운트, 당신의 일상 속 계산기 - 온도 계산기"
        />
        <meta property="og:url" content="https://www.daily-count.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Daily Count 데일리 카운트" />
        <meta
          name="twitter:description"
          content="데일리 카운트, 당신의 일상 속 모든 계산기, 계산기, 일반 계산, 이자 계산, 만나이 계산기, 적금 계산기, 예금 계산기, 시급 계산, 단위 환산, 단위 계산, 날짜 계산, 글자수 계산, 비만도 계산, 퍼센트 계산, 길이 계산, 넓이 계산, 무게 계산, 부피 계산, 온도 계산, 압력 계산, 속도 계산, 연비 계산, 데이터 계산"
        />
      </Head>
      <Container>
        <ConvertMenuBar></ConvertMenuBar>
        <div className="ConvertCal">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>From : </Form.Label>
                <Form.Control
                  type="number"
                  value={fromValue}
                  onChange={handleFromValueChange}
                />
                <Form.Select
                  style={{ marginTop: "10px" }}
                  aria-label="Default select example"
                  value={fromUnit}
                  onChange={handleFromUnitChange}
                >
                  <option value="celsius">섭씨온도(℃)</option>
                  <option value="fahrenheit">화씨온도(℉)</option>
                  <option value="kelvin">절대온도(K)</option>
                  <option value="rankine">랭킨온도(°R)</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-4"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>TO : </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={toUnit}
                  onChange={handleToUnitChange}
                >
                  <option value="celsius">섭씨온도(℃)</option>
                  <option value="fahrenheit">화씨온도(℉)</option>
                  <option value="kelvin">절대온도(K)</option>
                  <option value="rankine">랭킨온도(°R)</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
          <h4>
            {fromValue} {unitFactors[fromUnit].label} ={" "}
            {Number(result).toLocaleString("ko-KR")} {unitFactors[toUnit].label}
          </h4>
        </div>
      </Container>
    </>
  );
};

export default TemperatureCal;
