import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import moment from "moment";
import Head from "next/head";

const AgeCal = () => {
  const [birthDate, setBirthDate] = useState(moment().format("YYYY-MM-DD"));
  const [referenceDate, setReferenceDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [age, setAge] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [days, setDays] = useState("");
  const [daysToBirthday, setDaysToBirthday] = useState("");

  const calculateAge = (e) => {
    // 생년월일 검증
    if (!birthDate || !referenceDate) {
      alert("생년월일과 기준일을 입력해주세요.");
      return;
    }

    if (birthDate > referenceDate) {
      window.alert("생년월일은 기준일보다 클 수 없습니다.");
      return;
    }

    // 나이 계산
    const ageInMilliseconds = new Date(referenceDate) - new Date(birthDate);
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);

    // 띠 계산
    const birthYear = new Date(birthDate).getFullYear();
    const zodiacIndex = (birthYear - 4) % 12;
    const zodiacs = [
      "쥐",
      "소",
      "범",
      "토끼",
      "용",
      "뱀",
      "말",
      "양",
      "원숭이",
      "닭",
      "개",
      "돼지",
    ];
    const zodiacResult = zodiacs[zodiacIndex];
    // 생일까지 몇 일 남았는지 계산
    const nextBirthday = new Date(referenceDate);
    nextBirthday.setMonth(new Date(birthDate).getMonth());
    nextBirthday.setDate(new Date(birthDate).getDate());
    let daysToBirthday = Math.ceil(
      (nextBirthday - new Date(referenceDate)) / (1000 * 60 * 60 * 24)
    );
    if (daysToBirthday < 0) {
      daysToBirthday += 365;
    }
    setDaysToBirthday(daysToBirthday);

    // 결과 출력
    const daysInMilliseconds = new Date(referenceDate) - new Date(birthDate);
    const daysResult = daysInMilliseconds / (1000 * 60 * 60 * 24);

    setAge(Math.floor(ageInYears));
    setZodiac(zodiacResult);
    setDays(Math.floor(daysResult));
  };

  return (
    <>
      <Head>
        <title>Daily Count 데일리 카운트 - 만 나이 계산기</title>
        <meta charset="utf-8" />
        <meta name="referrer" content="always" />
        <meta
          name="description"
          content="데일리 카운트, 당신의 일상 속 모든 계산기, 만 나이 계산기"
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
          content="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 만 나이 계산기"
        />
        <meta
          property="og:image"
          content="/DailyCount.png"
          alt="Daily Count 데일리 카운트, 당신의 일상 속 계산기 - 만 나이 계산기"
        />
        <meta
          property="og:title"
          content="daily-count 데일리 카운트, 당신의 일상 속 계산기 - 만 나이 계산기"
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
        <h1 style={{ marginTop: "10px" }}>만 나이 계산기</h1>
        <div className="AgeCal">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h5 style={{ marginTop: "20px" }}>생년월일</h5>
              </Form.Label>
              <Form.Control
                style={{ marginTop: "10px", marginBottom: "10px" }}
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={
                  (e) => {
                    setBirthDate(e.target.value);
                    setAge("");
                  } // input 타입 수정 시 setAge 상태값을 false로 변경
                }
              />
              <Form.Label>
                <h5 style={{ marginTop: "20px" }}>기준일</h5>
              </Form.Label>
              <Form.Control
                style={{ marginTop: "10px", marginBottom: "10px" }}
                type="date"
                id="referenceDate"
                value={referenceDate}
                onChange={(e) => {
                  setReferenceDate(e.target.value);
                  setAge("");
                }}
              />
            </Form.Group>
          </Form>

          <Button
            style={{ width: "100%", marginBottom: "20px" }}
            onClick={(e) => {
              e.preventDefault();
              calculateAge();
            }}
          >
            나이 및 띠 계산하기
          </Button>
          {age !== "" && (
            <p>
              만 <span style={{ fontWeight: "bold" }}>{age}세</span> 이며,{" "}
              <span style={{ fontWeight: "bold", color: "red" }}>
                {zodiac}띠
              </span>{" "}
              입니다. 태어난 지{" "}
              <span style={{ fontWeight: "bold" }}>
                {days.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}일
              </span>
              째입니다.
              <br />
              다음 생일까지{" "}
              <span style={{ fontWeight: "bold" }}>{daysToBirthday}</span>일
              남았습니다.
            </p>
          )}
          <p style={{ color: age >= 18 ? "blue" : "red" }}>
            * 투표 가능 (만18세 이상) <br />
            * 운전면허 취득 가능 (만18세 이상) <br />
            * 아르바이트 및 취업 가능 (만18세 이상) <br />
            * 청소년 관람불가 영화 관람 가능 (만18세 이상, * 재학 중인 고등학생
            제외) <br />
            * 군대 입영 가능 (만18세 이상) <br />* 9급 공무원 지원 가능 (만18세
            이상)
          </p>
          <div className="jb-division-line"></div>
          <p>
            - 날짜계산은 기준일을 1일로 포함하여 계산됩니다. <br />
            - 주관처에 의해 기념일이 변경될 수 있습니다. <br />- 본 정보는
            실제와 다를 수 있습니다. 정확한 내용은 각 주관기관을 통해 확인하시기
            바랍니다.
          </p>
        </div>
        <div className="jb-division-line"></div>
      </Container>
    </>
  );
};

export default AgeCal;
