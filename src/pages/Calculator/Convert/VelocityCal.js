import React, { useState } from "react";
import ConvertMenuBar from "../../component/ConverMenuBar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const VelocityCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("m/s");
  const [toUnit, setToUnit] = useState("km/h");

  const unitFactors = {
    "m/s": { factor: 1, label: "(m/s)" },
    "m/h": { factor: 0.000277778, label: "(m/h)" },
    "km/s": { factor: 1000, label: "(km/s)" },
    "km/h": { factor: 0.277778, label: "(km/h)" },
    "in/s": { factor: 0.0254, label: "(in/s)" },
    "in/h": { factor: 0.00000705556, label: "(in/h)" },
    "ft/s": { factor: 0.3048, label: "(ft/s)" },
    "ft/h": { factor: 0.00008466667, label: "(ft/h)" },
    "mi/s": { factor: 1609.34, label: "(mi/s)" },
    "mi/h": { factor: 0.44704, label: "(mi/h)" },
    knot: { factor: 0.514444, label: "(knot)" },
    mach: { factor: 340.29, label: "(mach)" },
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
                <option value="m/s">미터/초(m/s)</option>
                <option value="m/h">미터/시간(m/h)</option>
                <option value="km/s">킬로미터/초(km/s)</option>
                <option value="km/h">킬로미터/시간(km/h)</option>
                <option value="in/s">인치/초(in/s)</option>
                <option value="in/h">인치/시간(in/h)</option>
                <option value="ft/s">피트/초(ft/s)</option>
                <option value="ft/h">피트/시간(ft/h)</option>
                <option value="mi/s">마일/초(mi/s)</option>
                <option value="mi/h">마일/시간(mi/h)</option>
                <option value="knot">노트(knot)</option>
                <option value="mach">마하(mach)</option>
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
                <option value="m/s">미터/초(m/s)</option>
                <option value="m/h">미터/시간(m/h)</option>
                <option value="km/s">킬로미터/초(km/s)</option>
                <option value="km/h">킬로미터/시간(km/h)</option>
                <option value="in/s">인치/초(in/s)</option>
                <option value="in/h">인치/시간(in/h)</option>
                <option value="ft/s">피트/초(ft/s)</option>
                <option value="ft/h">피트/시간(ft/h)</option>
                <option value="mi/s">마일/초(mi/s)</option>
                <option value="mi/h">마일/시간(mi/h)</option>
                <option value="knot">노트(knot)</option>
                <option value="mach">마하(mach)</option>
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

export default VelocityCal;
