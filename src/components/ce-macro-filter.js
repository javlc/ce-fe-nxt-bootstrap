import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Dropdown from "@restart/ui/esm/Dropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Badge from "react-bootstrap/Badge";

const CEMacroFilter = () => {
  return (
    <Container className="ce-macro-filter">
      <Row>
        <Col className="d-flex ce-macro-col">
          <Button variant="ce-dark" size="sm">
            <i className="far fa-newspaper"></i>
          </Button>

          <Form className="d-flex">
            <Button variant="light" size="sm">
              <i className="fas fa-search"></i>
            </Button>
            <FormControl
              type="search"
              placeholder=""
              className="ml-2 ce-search"
              aria-label="Search"
              size="sm"
            />
          </Form>
          <DropdownButton
            variant="light"
            title={
              <>
                <i className="fas fa-calendar"></i>
                <span> Jan 2021 - Sep 2021</span>
              </>
            }
            size="sm"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm">
              <i className="fas fa-store"></i>
              <span> All Channels</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm">
              <i className="fas fa-globe"></i>
              <span> All U.S.</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm">
              <i className="fas fa-user-friends"></i>
              <span> All Demos</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="light" size="sm" className="ce-btn-plus">
            <i className="fas fa-plus"></i>
          </Button>
          <div className="ce-pill-group">
            <Badge pill bg="ce-dark">
              Ouai
            </Badge>
            <Badge pill bg="ce-dark">
              Nars Cosmetics
            </Badge>
          </div>
        </Col>
      </Row>
      <style type="text/css">
        {`
          .ce-macro-filter {
            padding: 0.5em 1.25em;
            background-color: #484848;
          }
          .ce-macro-col {
            padding: 0;
            position: relative;
          }
          .ce-macro-col > button {
            color: #E9E9E9;
          }
          .ce-macro-col > button, 
          .ce-macro-col .dropdown > button {
            border-radius: 5px;
          }
          .ce-macro-col .dropdown > button {
            background-color: #585757;
            border-color: #585757;
          }
          .ce-macro-col > button.ce-btn-plus {
            background-color: #727070;
            border-color: #727070;
          } 
          .ce-macro-col > *:not(:first-child) {
            margin-left: 0.5em;
          }
          .btn-ce-dark {
            background-color: #313131;
          }
          form.d-flex > .ce-search {
            background-color: rgba(255,255,255,0.5);
            width: 25em;
            background-color: #585757;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          form.d-flex > button {
            background-color: #585757;
            border-color: #585757;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          form.d-flex > button i,
          .dropdown > button i {
            color: #1f1f1f;
          }
          .dropdown > button span {
            color: #C4C4C4;
            margin: 0 0.5em;
            display: inline-block;
            text-align: left;
            min-width: 7em;
          }
          .dropdown .dropdown-toggle::after {
            color: #1f1f1f;
          }
          .ce-pill-group {
            position: absolute;
            left: 4em;
            top: 50%;
            transform: translateY(-55%);
          }
          .ce-pill-group .bg-ce-dark {
            background-color: #313131;
            color: #E9E9E9;
            padding: 0.5em 1em;
            font-weight: 500;
            font-style: normal;
          }
          .ce-pill-group .bg-ce-dark:not(:first-child) {
            margin-left: 0.25em;
          }
          `}
      </style>
    </Container>
  );
};

export default CEMacroFilter;