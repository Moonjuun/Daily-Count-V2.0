import React, { useState } from "react";
import ConvertMenuBar from "../../component/ConverMenuBar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LengthCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("cm");
  const [toUnit, setToUnit] = useState("m");

  const unitFactors = {
    m: { factor: 1, label: "미터(m)" },
    cm: { factor: 0.01, label: "센티미터(cm)" },
    mm: { factor: 0.001, label: "밀리미터(mm)" },
    km: { factor: 1000, label: "킬로미터(km)" },
    ft: { factor: 0.3048, label: "피트(ft)" },
    in: { factor: 0.0254, label: "인치(in)" },
    yard: { factor: 0.9144, label: "야드(yard)" },
    mile: { factor: 1609.344, label: "마일(mile)" },
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
  const result = Number(fromValue) * factor;

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
                <option value="m">미터(meter)</option>
                <option value="cm">센치미터(centimeter)</option>
                <option value="mm">밀리미터(millimeter)</option>
                <option value="km">킬로미터(kilometer)</option>
                <option value="ft">피트(feet)</option>
                <option value="in">인치(inche)</option>
                <option value="yard">야드(yard)</option>
                <option value="mile">마일(mile)</option>
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
                <option value="m">미터(meter)</option>
                <option value="cm">센치미터(centimeter)</option>
                <option value="mm">밀리미터(millimeter)</option>
                <option value="km">킬로미터(kilometer)</option>
                <option value="ft">피트(feet)</option>
                <option value="in">인치(inche)</option>
                <option value="yard">야드(yard)</option>
                <option value="mile">마일(mile)</option>
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

export default LengthCal;
