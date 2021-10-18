import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const CEMacroFilter = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Link href="#action1" size="sm">
          <i className="fas fa-home"></i>
        </Nav.Link>

        {/* <Navbar.Brand href="#home">Search</Navbar.Brand> */}
        <Form className="d-flex">
          <Button variant="light" size="sm">
            <i className="fas fa-search"></i>
          </Button>
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2 ce-search"
            aria-label="Search"
            size="sm"
          />
        </Form>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <style type="text/css">
          {`
          .ce-search {
            border-radius: 4px;
            background-color: rgba(255,255,255,0.5);
          }
          `}
        </style>
      </Container>
    </Navbar>
  );
};

export default CEMacroFilter;
