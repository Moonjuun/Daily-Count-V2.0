import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const CommonCal = () => {
  const [result, setResult] = useState("0");
  const [previousNum, setPreviousNum] = useState("");
  const [operator, setOperator] = useState("");

  const handleClick = (button) => {
    if (button === "AC") {
      setResult("0");
      setPreviousNum("");
      setOperator("");
    } else if (button === "+/-") {
      setResult(result * -1);
    } else if (button === "%") {
      setResult(result / 100);
    } else if (button === ".") {
      if (!result.includes(".")) {
        setResult(result + ".");
      }
    } else if (button === "=") {
      calculate();
    } else if (button === "←") {
      setResult(result.slice(0, -1));
    } else if (
      button === "+" ||
      button === "-" ||
      button === "*" ||
      button === "/"
    ) {
      setPreviousNum(result);
      setResult("0");
      setOperator(button);
    } else {
      setResult(result === "0" ? button : result + button);
    }
  };

  const calculate = () => {
    const num1 = parseFloat(previousNum);
    const num2 = parseFloat(result);

    if (operator === "+") {
      setResult((num1 + num2).toString());
    } else if (operator === "-") {
      setResult((num1 - num2).toString());
    } else if (operator === "*") {
      setResult((num1 * num2).toString());
    } else if (operator === "/") {
      setResult((num1 / num2).toString());
    }
    setPreviousNum("");
    setOperator("");
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const keyPressed = e.key;
      if (!isNaN(keyPressed) || keyPressed === ".") {
        handleClick(keyPressed);
      } else if (keyPressed === "+") {
        handleClick("+");
      } else if (keyPressed === "-") {
        handleClick("-");
      } else if (keyPressed === "*") {
        handleClick("*");
      } else if (keyPressed === "/") {
        handleClick("/");
      } else if (keyPressed === "=" || keyPressed === "Enter") {
        handleClick("=");
      } else if (keyPressed === "Escape") {
        handleClick("AC");
      } else if (keyPressed === "Backspace") {
        setResult(result.slice(0, -1));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <>
      <h1 style={{ marginTop: "60px", marginBottom: "30px" }}>계산기</h1>
      <div className="CommonCal">
        <div className="result">{Number(result).toLocaleString("ko-KR")}</div>{" "}
        <div className="calculator">
          <div className="button-row">
            <Button
              className="button button-ac"
              onClick={() => handleClick("AC")}
            >
              AC
            </Button>
            <Button
              className="button button-sign"
              onClick={() => handleClick("+/-")}
            >
              +/-
            </Button>
            <Button
              className="button button-percent"
              onClick={() => handleClick("%")}
            >
              %
            </Button>
            <Button
              className="button button-operator"
              onClick={() => handleClick("/")}
            >
              ÷
            </Button>
          </div>
          <div className="button-row">
            <Button className="button" onClick={() => handleClick("7")}>
              7
            </Button>
            <Button className="button" onClick={() => handleClick("8")}>
              8
            </Button>
            <Button className="button" onClick={() => handleClick("9")}>
              9
            </Button>
            <Button
              className="button button-operator"
              onClick={() => handleClick("*")}
            >
              ×
            </Button>
          </div>
          <div className="button-row">
            <Button className="button" onClick={() => handleClick("4")}>
              4
            </Button>
            <Button className="button" onClick={() => handleClick("5")}>
              5
            </Button>
            <Button className="button" onClick={() => handleClick("6")}>
              6
            </Button>
            <Button
              className="button button-operator"
              onClick={() => handleClick("-")}
            >
              -
            </Button>
          </div>
          <div className="button-row">
            <Button className="button" onClick={() => handleClick("1")}>
              1
            </Button>
            <Button className="button" onClick={() => handleClick("2")}>
              2
            </Button>
            <Button className="button" onClick={() => handleClick("3")}>
              3
            </Button>
            <Button
              className="button button-operator"
              onClick={() => handleClick("+")}
            >
              +
            </Button>
          </div>
          <div className="button-row">
            <Button
              className="button button-zero"
              onClick={() => handleClick("0")}
            >
              0
            </Button>
            <Button className="button" onClick={() => handleClick(".")}>
              .
            </Button>
            <Button
              className="button button-backspace"
              onClick={() => handleClick("←")}
            >
              ←
            </Button>
            <Button
              className="button button-equal"
              onClick={() => handleClick("=")}
            >
              =
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonCal;
