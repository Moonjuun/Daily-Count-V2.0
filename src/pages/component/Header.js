import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Daily Count</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">일반 계산기</Nav.Link>
            <Nav.Link href="/Calculator/Convert/AreaCal">단위 계산기</Nav.Link>
            <Nav.Link href="/Calculator/Interest">이자 계산기</Nav.Link>
            <Nav.Link href="/Calculator/HourlyWageCal">시급 계산기</Nav.Link>
            <Nav.Link href="/Calculator/DateCal">날짜 계산기</Nav.Link>
            <Nav.Link href="/Calculator/AgeCal">만나이 계산기</Nav.Link>
            <Nav.Link href="/Calculator/WordCal">글자수 계산기</Nav.Link>
            <Nav.Link href="/Calculator/BmiCal">비만도 계산기</Nav.Link>
            <Nav.Link href="/Calculator/PercentCal">퍼센트 계산기</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
