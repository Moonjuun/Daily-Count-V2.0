import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

import { Container } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer></Footer>
    </>
  );
}
