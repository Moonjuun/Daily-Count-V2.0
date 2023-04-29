import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { commaFormat, uncommaFormat } from "../../utils/util";
import Button from "react-bootstrap/Button";
import Head from "next/head";

const HourlyWageCal = () => {
  const [hour, setHour] = useState(0);
  const [hourlyWage, setHourlyWage] = useState("9,620");
  const [holidayPay, setHolidayPay] = useState(0);
  const [weekPay, setWeekPay] = useState(0);
  const [result, setResult] = useState("");

  function calculateWage() {
    const hourlyWages = Number(uncommaFormat(hourlyWage)); // 수정된 부분
    if (hour == 0 || hour === "") {
      alert("시간을 넣어주세요!");
    } else if (hour >= 15) {
      setHour(hour);
      setHourlyWage(hourlyWages);
      setWeekPay(hour * hourlyWages);
      setHolidayPay(hour * 0.2 * hourlyWages);
      setResult((hour * hourlyWages + hour * 0.2 * hourlyWages) * 4);
    } else if (hour < 15) {
      setHour(hour);
      setHourlyWage(hourlyWages);
      setWeekPay(hour * hourlyWages);
      setHolidayPay(0);
      setResult(hour * hourlyWages * 4);
    }
  }

  return (
    <>
      <Head>
        <title>Daily Count 데일리 카운트 - 시급 계산기</title>
        <meta charset="utf-8" />
        <meta name="referrer" content="always" />
        <meta
          name="description"
          content="데일리 카운트, 당신의 일상 속 모든 계산기, 시급 계산기"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="67f0f075f4772fe9f2d3c370f0ffc4f63ee2120d"
        />
        <meta
          name="keywords"
          content="데일리 카운트, 계산기, 일반 계산, 이자 계산기, 시급 계산기, 예금 계산기, 만나이 계산기, 시급 계산, 단위 환산, 단위 계산, 날짜 계산, 글자수 계산, 비만도 계산, 퍼센트 계산, 길이 계산, 넓이 계산, 무게 계산, 부피 계산, 온도 계산, 압력 계산, 속도 계산, 연비 계산, 데이터 계산"
        />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:site_name"
          content="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 시급 계산기"
        />
        <meta
          property="og:image"
          content="/DailyCount.png"
          alt="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 시급 계산기"
        />
        <meta
          property="og:title"
          content="daily-count 데일리 카운트, 당신의 일상 속 계산기 - 시급 계산기"
        />
        <meta
          property="og:description"
          content="데일리 카운트, 당신의 일상 속 계산기 - 시급 계산기"
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
        <h1 style={{ marginTop: "10px" }}>시급 계산기</h1>
        <div className="HourlyWage">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h5 style={{ marginTop: "20px" }}>
                  주간 업무 시간(일주일 총 일하는 시간)
                </h5>
              </Form.Label>
              <Form.Control
                type="number"
                value={hour}
                onFocus={() => setHour("")}
                onChange={(e) => {
                  setHour(e.target.value);
                  setResult(false); // input 타입 수정 시 result 상태값을 false로 변경
                }}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
              <Form.Label>
                <h5 style={{ marginTop: "20px" }}>
                  시급 (2023년 최저임금은 시간당 9,620원입니다. )
                </h5>
              </Form.Label>
              <Form.Control
                type="text"
                value={hourlyWage}
                onChange={(e) => {
                  setHourlyWage(commaFormat(uncommaFormat(e.target.value)));
                  setResult(false); // input 타입 수정 시 result 상태값을 false로 변경
                }}
              />
            </Form.Group>
            <Button
              style={{ width: "100%", marginBottom: "20px", marginTop: "30px" }}
              onClick={calculateWage}
            >
              계산
            </Button>
            {result && (
              <label>
                <h5>
                  시급{" "}
                  {hourlyWage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  원
                </h5>
                <h5>총근무시간 {hour} 시간</h5>
                <h5>
                  주급{" "}
                  {weekPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
                </h5>
                <h5>
                  예상 주휴수당 :{" "}
                  {holidayPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  원
                </h5>
                <h5>
                  예상 총 주급(주급 + 예상 주휴수당) :{" "}
                  {(weekPay + holidayPay)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  원
                </h5>
                <h5>
                  예상 월급(예상 총 주급 x 4) :{" "}
                  {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
                </h5>
                <p>
                  *2023년 최저임금은 시간당 9,620원입니다. <br />
                  *교통비, 식대 및 다른 수당들은 제외된 금액입니다. <br />
                  *업장 및 회사의 규정에 따라 주휴수당 금액이 다를 수 있습니다.
                </p>
              </label>
            )}
          </Form>
        </div>
      </Container>
    </>
  );
};

export default HourlyWageCal;
