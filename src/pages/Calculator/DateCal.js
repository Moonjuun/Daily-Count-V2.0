import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import moment from "moment";

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
    <Container>
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
  );
};

export default DateCal;
