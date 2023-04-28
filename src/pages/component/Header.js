import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const handleSelect = (eventKey) => {
    router.push(eventKey);
  };

  return (
    <Navbar bg="light" expand="lg" onSelect={handleSelect}>
      <Container>
        <Navbar.Brand eventKey="/">Daily Count</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="/">일반 계산기</Nav.Link>
            <Nav.Link eventKey="/Calculator/Convert/AreaCal">
              단위 계산기
            </Nav.Link>
            <Nav.Link eventKey="/Calculator/Interest">이자 계산기</Nav.Link>
            <Nav.Link eventKey="/Calculator/HourlyWageCal">
              시급 계산기
            </Nav.Link>
            <Nav.Link eventKey="/Calculator/DateCal">날짜 계산기</Nav.Link>
            <Nav.Link eventKey="/Calculator/AgeCal">만나이 계산기</Nav.Link>
            <Nav.Link eventKey="/Calculator/WordCal">글자수 계산기</Nav.Link>
            <Nav.Link eventKey="/Calculator/BmiCal">비만도 계산기</Nav.Link>
            <Nav.Link eventKey="/Calculator/PercentCal">퍼센트 계산기</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
