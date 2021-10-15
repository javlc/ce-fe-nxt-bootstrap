import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CEMapChart from "../../components/ce-map-chart";
import CERetentionChart from "../../components/ce-retention-chart";

const Dashboard = () => {
  return (
    <Container fluid="xxl">
      <Row>
        <Col xs={12} lg={{ span: 8, offset: 2 }}>
          <CERetentionChart />
        </Col>
      </Row>
      {/*       <Row>
        <Col className="half-height">
          <CEMapChart />
        </Col>
      </Row> */}
      <>
        <style type="text/css">
          {`
          .half-height {
            min-height: 75vh;
          }
          `}
        </style>
      </>
    </Container>
  );
};

export default Dashboard;
