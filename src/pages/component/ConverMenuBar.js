import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";

const ConvertMenuBar = () => {
  const router = useRouter();

  const handleSelect = (eventKey) => {
    router.push(eventKey);
  };

  return (
    <>
      <Nav
        fill
        variant="tabs"
        defaultActiveKey="/"
        onSelect={handleSelect}
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        <Nav.Item>
          <Nav.Link eventKey="/Calculator/Convert/LengthCal">길이</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Calculator/Convert/AreaCal">넓이</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Calculator/Convert/WeightCal">무게</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Calculator/Convert/VolumeCal">부피</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Calculator/Convert/TemperatureCal">
            온도
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Calculator/Convert/PressCal">압력</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Calculator/Convert/VelocityCal">속도</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Calculator/Convert/FuelCal">연비</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Calculator/Convert/DataCal">데이터</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default ConvertMenuBar;
