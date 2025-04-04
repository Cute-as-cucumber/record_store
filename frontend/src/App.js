import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom";


const App = () => {
  return (
    <>
    <Header />
      {/* py-3 adds padding at top and bottom */}
      <main className = "py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App