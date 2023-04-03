import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
        <Navbar bg="dark" expand="dark">
      <Container>
          <li>
            <Link style={{padding:"25px"}} to="/">Home</Link>
            <Link style={{padding:"25px"}} to="/singers">Singers</Link>
            <Link style={{padding:"25px"}} to="/albums">Albums</Link>
          </li>
        </Container>
    </Navbar>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Nav;