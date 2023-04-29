import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import moment from "moment";
import Head from "next/head";

const DateCal = () => {
  // 기준일
  const [firstDateInput, setFirstDateInput] = useState(
    moment().format("YYYY-MM-DD")
  );
  // 날짜 계산1
  const [secondDateInput, setSecondDateInput] = useState("");
  const [dateResult, setDateResult] = useState({ days: 0 });

  function getDays(dateOne, dateTwo) {
    const firstDate = moment(dateOne);
    const secondDate = moment(dateTwo);
    const days = secondDate.diff(firstDate, "days");
    setDateResult({ days });
  }

  // 날짜 계산2
  const [dateInput1, setDateInput1] = useState("");
  const [afterDate, setAfterDate] = useState("");

  function calculateDate() {
    if (!dateInput1) {
      window.alert("값 넣어주세요");
      return;
    }
    const date = moment(firstDateInput).add(dateInput1 - 1, "days");
    setAfterDate(date.format("YYYY-MM-DD"));
  }
  // 날짜 계산3
  const [dateInput2, setDateInput2] = useState("");
  const [dayminusDate, setDayMinusDate] = useState("");

  function calcuateDDay() {
    if (!dateInput2) {
      window.alert("값 넣어주세요");
      return;
    }
    const date = moment(firstDateInput).subtract(dateInput2, "days");

    setDayMinusDate(date.format("YYYY-MM-DD"));
  }

  return (
    <>
      <Head>
        <title>Daily Count 데일리 카운트 - 날짜 계산기</title>
        <meta charset="utf-8" />
        <meta name="referrer" content="always" />
        <meta
          name="description"
          content="데일리 카운트, 당신의 일상 속 모든 계산기, 날짜 계산기"
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
          content="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 날짜 계산기"
        />
        <meta
          property="og:image"
          content="/DailyCount.png"
          alt="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 날짜 계산기"
        />
        <meta
          property="og:title"
          content="daily-count 데일리 카운트, 당신의 일상 속 계산기 - 날짜 계산기"
        />
        <meta
          property="og:description"
          content="데일리 카운트, 당신의 일상 속 계산기 - 날짜 계산기"
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
        <h1 style={{ marginTop: "10px" }}>날짜 계산기</h1>
        <div className="DateCal">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h5 style={{ marginTop: "20px" }}>
                  기준일 (날짜계산은 기준일을 1일로 포함하여 계산됩니다)
                </h5>
              </Form.Label>
              <Form.Control
                type="date"
                value={firstDateInput}
                onChange={(e) => setFirstDateInput(e.target.value)}
              />
              <Form.Control
                style={{ marginTop: "10px", marginBottom: "10px" }}
                type="date"
                value={secondDateInput}
                onChange={(e) => {
                  setSecondDateInput(e.target.value);
                  setDateResult({ days: 0 });
                }}
              />
              <Form.Label>
                <p
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    display: "inline-block",
                  }}
                >
                  {`기준일부터 ${
                    dateResult.days < 0
                      ? `${dateResult.days} 일`
                      : `${dateResult.days} 일`
                  }`}
                </p>
              </Form.Label>
            </Form.Group>
            <Button
              style={{ width: "100%" }}
              onClick={() => getDays(firstDateInput, secondDateInput)}
            >
              계산하기
            </Button>
            <div className="jb-division-line"></div>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  type="number"
                  placeholder="기준일"
                  value={dateInput1}
                  onChange={(e) => {
                    setDateInput1(e.target.value);
                    setAfterDate("");
                  }}
                />
              </Form.Group>
              <Form.Label style={{ marginTop: "10px" }} as={Col}>
                {" "}
                일 후는 몇 일?{" "}
                <span
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    display: "inline-block",
                  }}
                >
                  {afterDate && `${afterDate}`}
                </span>
              </Form.Label>

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  calculateDate();
                }}
              >
                계산하기
              </Button>
            </Row>
            <div className="jb-division-line"></div>

            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  type="number"
                  placeholder="기준일"
                  value={dateInput2}
                  onChange={(e) => {
                    setDateInput2(e.target.value);
                    setDayMinusDate("");
                  }}
                />
              </Form.Group>
              <Form.Label style={{ marginTop: "10px" }} as={Col}>
                {" "}
                일 전은 몇 일?{" "}
                <span
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    display: "inline-block",
                  }}
                >
                  {dayminusDate && `${dayminusDate}`}
                </span>
              </Form.Label>

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  calcuateDDay();
                }}
              >
                계산하기
              </Button>
            </Row>
          </Form>
        </div>
        <div className="jb-division-line"></div>
      </Container>
    </>
  );
};

export default DateCal;
