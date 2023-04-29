import React, { useState } from "react";
import ConvertMenuBar from "../../component/ConverMenuBar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Head from "next/head";

const FuelCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("km/l");
  const [toUnit, setToUnit] = useState("mi/g");

  const unitFactors = {
    "km/l": { factor: 1, label: "(km/l)" },
    "mi/g": { factor: 0.425144, label: "(mi/g)" },
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

  const factor = unitFactors[fromUnit].factor / unitFactors[toUnit].factor;
  const result = (Number(fromValue) * factor).toFixed(6);

  return (
    <>
      <Head>
        <title>Daily Count 데일리 카운트 - 연비 계산기</title>
        <meta charset="utf-8" />
        <meta name="referrer" content="always" />
        <meta
          name="description"
          content="데일리 카운트, 당신의 일상 속 모든 계산기, 연비 계산기"
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
          content="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 연비 계산기"
        />
        <meta
          property="og:image"
          content="/DailyCount.png"
          alt="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 연비 계산기"
        />
        <meta
          property="og:title"
          content="daily-count 데일리 카운트, 당신의 일상 속 계산기 - 연비 계산기"
        />
        <meta
          property="og:description"
          content="데일리 카운트, 당신의 일상 속 계산기 - 연비 계산기"
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
                  <option value="km/l">킬로미터/리터(km/l)</option>
                  <option value="mi/g">마일/갤런(mi/g)</option>
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
                  <option value="km/l">킬로미터/리터(km/l)</option>
                  <option value="mi/g">마일/갤런(mi/g)</option>
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

export default FuelCal;
