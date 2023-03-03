import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


function BrandExample() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="../component/login/page1.js">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              AFFIT
            </Navbar.Brand>
            <NavLink to="/create">
                Create user
            </NavLink>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default BrandExample;