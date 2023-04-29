import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Head from "next/head";

const PercentageCal = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState("");

  function handleNumber1Change(e) {
    setNumber1(e.target.value);
  }

  function handleNumber2Change(e) {
    setNumber2(e.target.value);
  }

  function calculatePercentage() {
    if (number1 !== 0) {
      setResult(number2 * number1 * 0.01);
    } else {
      alert("올바른 수식을 채워주세요");
    }
  }

  return (
    <>
      <Head>
        <title>Daily Count 데일리 카운트 - 퍼센트 계산기</title>
        <meta charset="utf-8" />
        <meta name="referrer" content="always" />
        <meta
          name="description"
          content="데일리 카운트, 당신의 일상 속 모든 계산기, 퍼센트 계산기"
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
          content="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 퍼센트 계산기"
        />
        <meta
          property="og:image"
          content="/DailyCount.png"
          alt="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 퍼센트 계산기"
        />
        <meta
          property="og:title"
          content="daily-count 데일리 카운트, 당신의 일상 속 계산기 - 퍼센트 계산기"
        />
        <meta
          property="og:description"
          content="데일리 카운트, 당신의 일상 속 계산기 - 퍼센트 계산기"
        />
        <meta property="og:url" content="https://www.daily-count.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Daily Count 데일리 카운트" />
        <meta
          name="twitter:description"
          content="데일리 카운트, 당신의 일상 속 모든 계산기, 계산기, 일반 계산, 이자 계산, 만나이 계산기, 적금 계산기, 예금 계산기, 시급 계산, 단위 환산, 단위 계산, 날짜 계산, 글자수 계산, 비만도 계산, 퍼센트 계산, 길이 계산, 넓이 계산, 무게 계산, 부피 계산, 온도 계산, 압력 계산, 속도 계산, 연비 계산, 데이터 계산"
        />
      </Head>

      <Container style={{ width: "80%" }}>
        <h1 style={{ marginTop: "10px" }}>퍼센트 계산기</h1>
        <div className="PercentCal">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h5 style={{ marginTop: "20px" }}>전체값</h5>
              </Form.Label>
              <Form.Control
                style={{ marginTop: "10px", marginBottom: "10px" }}
                type="number"
                value={number1}
                onFocus={() => {
                  setNumber1("");
                  setResult("");
                }}
                onChange={handleNumber1Change}
              />
              <Form.Label>
                <h5 style={{ marginTop: "20px" }}>일부값</h5>
              </Form.Label>
              <Form.Control
                style={{ marginTop: "10px", marginBottom: "10px" }}
                type="number"
                value={number2}
                onFocus={() => {
                  setNumber2("");
                  setResult("");
                }}
                onChange={handleNumber2Change}
              />{" "}
              <Form.Label>
                <h5 style={{ marginTop: "20px" }}></h5>
              </Form.Label>
            </Form.Group>
          </Form>

          <Button
            style={{ width: "100%", marginBottom: "20px" }}
            onClick={calculatePercentage}
          >
            계산하기
          </Button>
          {result && (
            <div>
              <h4>{result}</h4>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default PercentageCal;
