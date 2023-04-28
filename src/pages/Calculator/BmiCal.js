import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const BmiCal = () => {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState("");
  const [resultBmi, setCategory] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setCategory("");
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
    setCategory("");
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
    setCategory("");
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    setCategory("");
  };

  const calculateBMI = () => {
    if (!gender || !height || !weight || !age) {
      window.alert("값을 다 넣어주세요");
      return;
    }
    if (age > 100 || age < 0) {
      window.alert("나이를 제대로 넣어주세요");
      return;
    }

    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);
    setBmi(bmi.toFixed(2));

    if (bmi < 18.5) {
      setCategory("저체중");
    } else if (bmi >= 18.5 && bmi < 23) {
      setCategory("정상");
    } else if (bmi >= 23 && bmi < 25) {
      setCategory("과체중");
    } else if (bmi >= 25 && bmi < 30) {
      setCategory("비만");
    } else {
      setCategory("고도비만");
    }
  };

  return (
    <Container style={{ width: "80%" }}>
      <h1 style={{ marginTop: "10px" }}>비만도 계산기</h1>
      <p>신체질량지수(Body Mass Index:BMI,카우프지수)에 의한 비만도 계산법</p>
      <div className="BmiCal">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <div
              style={{ fontWeight: "500", marginTop: "10px", fontSize: "20px" }}
            >
              성별: <br />
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />{" "}
              남성
              <input
                style={{ marginLeft: "10px" }}
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />{" "}
              여성
            </div>
            <Form.Label>
              <h5 style={{ marginTop: "20px" }}>키 (cm)</h5>
            </Form.Label>
            <Form.Control
              type="number"
              name="height"
              min="0"
              value={height}
              onChange={handleHeightChange}
              required
            />
            <Form.Label>
              <h5 style={{ marginTop: "20px" }}>체중 (kg)</h5>
            </Form.Label>
            <Form.Control
              type="number"
              name="weight"
              min="0"
              value={weight}
              onChange={handleWeightChange}
              required
            />
            <Form.Label>
              <h5 style={{ marginTop: "20px" }}>나이 </h5>
            </Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="100"
              name="age"
              value={age}
              onChange={handleAgeChange}
              required
            />
            <Button
              style={{ width: "100%", marginBottom: "20px", marginTop: "30px" }}
              onClick={calculateBMI}
            >
              계산하기
            </Button>
          </Form.Group>
          {resultBmi && (
            <div>
              <h5>BMI 지수: {bmi}</h5>
              <h5>비만도: {resultBmi}</h5>
              <Table
                striped
                bordered
                hover
                size="sm"
                style={{ textAlign: "center" }}
              >
                <thead>
                  <tr>
                    <th>비만도</th>
                    <th>BMI 지수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>저체중</td>
                    <td>18.5 미만</td>
                  </tr>
                  <tr>
                    <td>정상</td>
                    <td>18.5 ~ 23</td>
                  </tr>
                  <tr>
                    <td>과체중</td>
                    <td>23 ~ 25</td>
                  </tr>
                  <tr>
                    <td>비만</td>
                    <td>25 ~ 30</td>
                  </tr>
                  <tr>
                    <td>고도비만</td>
                    <td>30 이상</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )}
          <h5 style={{ fontWeight: "700", marginBottom: "20px" }}>
            비만치료지침(2012) 기준
          </h5>
        </Form>
      </div>
    </Container>
  );
};

export default BmiCal;
