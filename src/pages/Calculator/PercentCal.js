import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <Container style={{ width: "80%" }}>
      <h1 style={{ marginTop: "10px" }}>퍼센트 계산기</h1>
      <div className="PercentCal">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Row>
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
            </Row>
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
  );
};

export default PercentageCal;
