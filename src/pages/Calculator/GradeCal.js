import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Head from "next/head";

function GradeCal() {
  const [grades, setGrades] = useState(["", "", "", "", "", "", ""]); // 7과목의 각 학점을 저장하는 배열
  const [scale, setScale] = useState(4.5); // 계산 학점
  const [includeF, setIncludeF] = useState(true); // F 학점을 계산에 포함할지 여부
  const [selectedGrade, setSelectedGrade] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]); // 선택된 학점 (A+부터 P까지)
  const [gpa, setGpa] = useState("");

  // 각 학점 입력 시 호출되는 함수
  const handleGradeChange = (e, index) => {
    const newGrades = [...grades];
    newGrades[index] = parseFloat(e.target.value);
    setGrades(newGrades);
  };

  // 계산 학점 입력 시 호출되는 함수
  const handleScaleChange = (e) => {
    setScale(parseFloat(e.target.value));
  };

  // F 학점을 계산에 포함할지 여부 입력 시 호출되는 함수
  const handleIncludeFChange = (e) => {
    setIncludeF(e.target.checked);
  };

  // 선택된 학점 입력 시 호출되는 함수
  const handleSelectedGradeChange = (e, index) => {
    const getGreades = [...selectedGrade];
    getGreades[index] = e.target.value;
    setSelectedGrade(getGreades);
  };

  // 학점 계산 버튼 클릭 시 호출되는 함수
  const handleCalculate = () => {
    const validGrades = includeF
      ? grades
      : grades.filter((grade) => grade >= 1.0);
    const totalGradePoints = validGrades.reduce((acc, grade) => acc + grade, 0);
    const totalCredits = validGrades.length;
    const gpa = totalGradePoints / totalCredits / scale;
    setGpa(gpa.toFixed(2)); // 평균 학점을 상태로 저장
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>학점 계산기</h1>
        </Col>
      </Row>
      <Form.Group controlId="scale">
        <Form.Label>계산 학점</Form.Label>
        <Form.Control as="select" value={scale} onChange={handleScaleChange}>
          <option value="4.3">4.3</option>
          <option value="4.5">4.5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="include-f">
        <Form.Check
          type="checkbox"
          label="F 학점 포함"
          checked={includeF}
          onChange={handleIncludeFChange}
        />
      </Form.Group>
      <Row className="mt-4">
        <Col>
          <Form>
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <Form.Group key={index} controlId={`grade-${index}`}>
                <Form.Label>{`${index + 1}번째 과목 학점`}</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  max="4.5"
                  step="0.01"
                  value={grades[index]}
                  onChange={(e) => handleGradeChange(e, index)}
                />
                <Form.Control
                  as="select"
                  value={selectedGrade[index]}
                  onChange={(e) => handleSelectedGradeChange(e, index)}
                >
                  {[
                    "A+",
                    "A",
                    "A-",
                    "B+",
                    "B",
                    "B-",
                    "C+",
                    "C",
                    "C-",
                    "D+",
                    "D",
                    "D-",
                    "P",
                    "F",
                  ].map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            ))}
          </Form>
        </Col>
      </Row>
      <Button variant="primary" onClick={handleCalculate}>
        계산하기
      </Button>
      {gpa}
    </Container>
  );
}

export default GradeCal;
