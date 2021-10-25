import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CEMapChart from "../../components/ce-map-chart";
import CERetentionChart from "../../components/ce-retention-chart";
import CERetentionGrid from "../../components/ce-retention-grid";

const Dashboard = () => {
  return (
    <Container fluid="xxl" className="custom-height">
      <Row className="ce-retention-container-row">
        {/* <Col xs={12} lg={{ span: 6, offset: 3 }}> */}
        <Col xs={12} lg={{ span: 6 }}>
          <CERetentionGrid />
        </Col>
        <Col xs={12} lg={{ span: 6 }}>
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
          .custom-height {
            max-height: 500px;
          }
          .half-height {
            min-height: 75vh;
          }
          .ce-retention-container-row {
            background-color: #E5E5E5;
            padding: 1em 0;
          }
          `}
        </style>
      </>
    </Container>
  );
};

export default Dashboard;
