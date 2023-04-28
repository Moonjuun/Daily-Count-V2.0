import React, { useState } from "react";
import ConvertMenuBar from "../../component/ConverMenuBar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WeightCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("g");
  const [toUnit, setToUnit] = useState("kg");

  const unitFactors = {
    kg: { factor: 1, label: "킬로그램(kg)" },
    g: { factor: 0.001, label: "그램(g)" },
    mg: { factor: 0.000001, label: "밀리그램(mg)" },
    t: { factor: 1000, label: "톤(t)" },
    kt: { factor: 1000000, label: "킬로톤(kt)" },
    grain: { factor: 0.00006479891, label: "그레인(gr)" },
    oz: { factor: 0.02834952, label: "온스(oz)" },
    lb: { factor: 0.45359237, label: "파운드(lb)" },
    don: { factor: 0.00375, label: "돈(don)" },
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
                <option value="kg">킬로그램(kg)</option>
                <option value="g">그램(g)</option>
                <option value="mg">밀리그램(mg)</option>
                <option value="t">톤(t)</option>
                <option value="kt">킬로톤(kt)</option>
                <option value="grain">그레인(gr)</option>
                <option value="oz">온스(oz)</option>
                <option value="lb">파운드(lb)</option>
                <option value="don">돈(don)</option>
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
                <option value="kg">킬로그램(kg)</option>
                <option value="g">그램(g)</option>
                <option value="mg">밀리그램(mg)</option>
                <option value="t">톤(t)</option>
                <option value="kt">킬로톤(kt)</option>
                <option value="grain">그레인(gr)</option>
                <option value="oz">온스(oz)</option>
                <option value="lb">파운드(lb)</option>
                <option value="don">돈(don)</option>
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
export default WeightCal;
