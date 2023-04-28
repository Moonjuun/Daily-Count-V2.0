import React, { useState } from "react";
import ConvertMenuBar from "../../component/ConverMenuBar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const VolumeCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("cc");
  const [toUnit, setToUnit] = useState("ml");

  const unitFactors = {
    cc: { factor: 1, label: "시시(cc)" },
    ml: { factor: 1, label: "밀리리터(ml)" },
    dl: { factor: 100, label: "데시리터(dl)" },
    l: { factor: 1000, label: "리터(l)" },
    cm3: { factor: 1, label: "세제곱센티미터(cm³)" },
    m3: { factor: 1000000, label: "세제곱미터(m³)" },
    in3: { factor: 16.387064, label: "세제곱인치(in³)" },
    ft3: { factor: 28316.8466, label: "세제곱피트(ft³)" },
    yd3: { factor: 764554.858, label: "세제곱야드(yd³)" },
    gallon: { factor: 3785.41178, label: "갤런(gallon)" },
    barrel: { factor: 158900, label: "배럴(barrel)" },
    oz: { factor: 29.57353, label: "온스(oz)" },
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
                <option value="cc">시시(cc)</option>
                <option value="ml">밀리리터(ml)</option>
                <option value="dl">데시리터(dl)</option>
                <option value="l">리터(l)</option>
                <option value="cm3">세제곱센티미터(cm³)</option>
                <option value="m3">세제곱미터(m³)</option>
                <option value="in3">세제곱인치(in³)</option>
                <option value="ft3">세제곱피트(ft³)</option>
                <option value="yd3">세제곱야드(yd³)</option>
                <option value="gallon">갤런(gallon)</option>
                <option value="barrel">배럴(barrel)</option>
                <option value="oz">온스(oz)</option>
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
                <option value="cc">시시(cc)</option>
                <option value="ml">밀리리터(ml)</option>
                <option value="dl">데시리터(dl)</option>
                <option value="l">리터(l)</option>
                <option value="cm3">세제곱센티미터(cm³)</option>
                <option value="m3">세제곱미터(m³)</option>
                <option value="in3">세제곱인치(in³)</option>
                <option value="ft3">세제곱피트(ft³)</option>
                <option value="yd3">세제곱야드(yd³)</option>
                <option value="gallon">갤런(gallon)</option>
                <option value="barrel">배럴(barrel)</option>
                <option value="oz">온스(oz)</option>
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
  );
};

export default VolumeCal;
