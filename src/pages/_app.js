import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Container style={{ minHeight: "70vh" }}>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}
