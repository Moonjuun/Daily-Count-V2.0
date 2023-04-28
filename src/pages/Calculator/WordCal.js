import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const WordCal = () => {
  const [text, setText] = useState("");

  const totalCharacters = text.length;
  const charactersWithoutSpaces = text.replace(/\s/g, "").length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Container style={{ width: "80%" }}>
      <div className="WordCal">
        <h1 style={{ marginTop: "10px" }}>글자 수 계산기</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h5 style={{ marginTop: "20px" }}>글자 수 세기</h5>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={text}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>

        <p style={{ fontWeight: "bold", color: "blue" }}>
          공백 포함: {totalCharacters}
        </p>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          공백 제외: {charactersWithoutSpaces}
        </p>
      </div>
    </Container>
  );
};

export default WordCal;
