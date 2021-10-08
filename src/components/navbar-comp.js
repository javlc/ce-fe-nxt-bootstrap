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
              <i className="fas fa-home"></i> Home
            </Nav.Link>
            <Nav.Link href="#action2">
              <i className="fas fa-store"></i> Merchant
            </Nav.Link>
            <Nav.Link href="#action3">
              <i className="fas fa-trophy"></i> Competitors
            </Nav.Link>
            <Nav.Link href="#action4">
              <i className="fas fa-users"></i> Consumers
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
              <i className="fas fa-search"></i> Search
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
              <i className="fas fa-user-circle"></i> John
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarComp;
