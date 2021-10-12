import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const NavbarComp = () => {
  return (
    <Container fluid="xxl" className="bg-dark">
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Navbar.Brand href="#">[CE]</Navbar.Brand>
        <Navbar.Brand href="#">[Nike]</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <i className="fas fa-home"></i> <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#action2">
              <i className="fas fa-store"></i> <span>Merchant</span>
            </Nav.Link>
            <Nav.Link href="#action3">
              <i className="fas fa-trophy"></i> <span>Competitors</span>
            </Nav.Link>
            <Nav.Link href="#action4">
              <i className="fas fa-users"></i> <span>Consumers</span>
            </Nav.Link>
            <NavDropdown
              title={
                <>
                  <i className="fas fa-building"></i> <span>Industry</span>
                </>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <i className="fas fa-search"></i> <span>Search</span>
            </Nav.Link>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-info">Search</Button>
            </Form> */}
            <Nav.Link href="#action8">
              <i className="fas fa-user-circle"></i> <span>John</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <>
        <style type="text/css">
          {`
          @media screen and (min-width: 991px) {
            .navbar-nav-scroll {
              min-height: 80px;
            }
            .nav-link, .nav-item.dropdown {
              min-width: 120px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          }
          `}
        </style>
      </>
    </Container>
  );
};

export default NavbarComp;
