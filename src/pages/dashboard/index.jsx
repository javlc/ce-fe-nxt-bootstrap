import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dashboard = () => {
  return (
    <Container fluid="xxl">
      <Row>
        <Col>My first column</Col>
        <Col>My second column</Col>
        <Col>My third column</Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
