import Highcharts from "highcharts/highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Stack from "react-bootstrap/Stack";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const opts = {
  credits: { enabled: false },

  chart: {
    // backgroundColor: "rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    type: "spline",
    height: (2.8 / 4) * 100 + "%",
    width: 636,
  },

  title: {
    text: "Retention Comparison",
  },

  subtitle: {
    text: undefined,
  },

  yAxis: {
    lineWidth: 1,
    lineColor: "#565656",
    gridLineWidth: 0,
    floor: 0,
    ceiling: 100,
    min: 0,
    title: {
      text: undefined,
      /* style: {
        color: "#eee",
      }, */
    },
    labels: {
      style: {
        color: "#565656",
      },
      format: "{text}%",
    },
    tickInterval: 25,
  },

  xAxis: {
    // categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lineColor: "#565656",
    gridLineColor: "#565656",
    gridLineWidth: 0,
    // floor: 0,
    ceiling: 9,
    // min: -0.15,
    // max: 9.9,
    labels: {
      style: {
        color: "#565656",
      },
      x: 0,
      y: 25,
    },
    accessibility: {
      rangeDescription: "Range: 0 to 9",
    },
    maxPadding: 0.2,
    tickInterval: 1,
    tickLength: 0,
  },

  legend: {
    floating: "true",
    layout: "vertical",
    align: "center",
    verticalAlign: "bottom",
    x: 150,
    y: -70,
    labelFormat: "{name.value}",
    itemStyle: {
      color: "#565656",
    },
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    /* backgroundColor: {
      linearGradient: [0, 100, 1000, 0],
      stops: [
        [0, "rgba(255, 255, 255, 0.9)"],
        [1, "rgba(255, 255, 255, 0.1)"],
      ],
    }, */
  },

  plotOptions: {
    series: {
      // dataLabels: { enabled: true, format: "{y} %" },
      label: {
        connectorAllowed: false,
      },
      marker: { enabled: false },
      pointStart: 0,
    },
  },

  tooltip: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderColor: "#aaa",
    shadow: false,
    headerFormat: "",
    pointFormat:
      "<strong style='font-size:10px;'>{series.name.value}</strong><br><span style='font-size: 10px;'>Period {point.x} ({series.name.type})</span><br><strong style='font-size:14px;'>{point.y} %</strong>",
    shared: false,
  },

  series: [
    {
      name: {
        value: "Ouai",
      },
      id: "Ouai",
      color: "#222",
      // color: "#0000FF",
    },
    {
      name: {
        value: "Nars Cosmetics",
      },
      id: "NarsCosmetics",
      color: "#777",
      // color: "#FF0000",
    },
    {
      name: {
        value: "Ouai",
        type: "Mean",
      },
      data: [100, 85.4, 81.51, 78.95, 76.59, 76.78, 76.37, 74.52, 74.0],
      color: "#222",
      // color: "#0000FF",
      linkedTo: "Ouai",
    },
    {
      name: {
        value: "Ouai",
        type: "Median",
      },
      data: [100, 86.12, 81.35, 79.59, 78.16, 77.13, 76.83, 74.52, 74.0],
      dashStyle: "dash",
      // color: "blue",
      color: "#222",
      // color: "rgba(0, 70, 250, 0.8)",
      linkedTo: "Ouai",
    },
    {
      name: {
        value: "Nars Cosmetics",
        type: "Mean",
      },
      data: [100, 58, 55, 53, 52, 49, 47, 48, 47],
      // color: "red",
      color: "#777",
      // color: "#FF0000",
      linkedTo: "NarsCosmetics",
    },
    {
      name: {
        value: "Nars Cosmetics",
        type: "Median",
      },
      data: [100, 61, 58, 55, 54, 51, 52, 48, 47],
      dashStyle: "dash",
      // color: "red",
      color: "#777",
      // color: "rgba(200, 0, 0, 0.8)",
      linkedTo: "NarsCosmetics",
    },
  ],

  exporting: {
    chartOptions: {
      chart: {
        height: 650,
      },
    },
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 780,
        },
        chartOptions: {
          legend: {
            layout: "vertical",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
  navigation: {
    buttonOptions: {
      // symbolFill: "none",
      // symbolStroke: "none",
      theme: {
        "stroke-width": 0,
        stroke: "transparent",
        fill: "transparent",
        r: 0,
        states: {
          hover: {
            fill: "transparent",
          },
          select: {
            stroke: "transparent",
            fill: "transparent",
          },
        },
      },
    },
  },
};

const CERetentionChart = (props) => {
  return (
    <>
      <Stack direction="horizontal" gap={3} className="ce-ret-title-filters">
        <span>Retention Comparison</span>
        <i className="fas fa-question-circle"></i>
        <i className="fas fa-expand-alt small"></i>
        <i className="fas fa-filter ms-auto small"></i>
        <div className="vr" />
        <i className="fas fa-cog"></i>
      </Stack>

      <Stack
        direction="horizontal"
        gap={1}
        className="d-flex ce-ret-chart-controls px-3"
      >
        <DropdownButton
          variant="light"
          title={
            <>
              <span>Monthly</span>
            </>
          }
          size="sm"
        >
          <Dropdown.Item href="#/action-1" active>
            Monthly
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Yearly</Dropdown.Item>
        </DropdownButton>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm">
            <span>Customers</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm">
            <span>Mean & Median</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <i className="fas fa-user-plus small ms-2"></i>
      </Stack>
      <HighchartsReact
        highcharts={Highcharts}
        options={opts}
        {...props}
      ></HighchartsReact>
      <style type="text/css">
        {`
        .ce-ret-title-filters {
          background-color: #fff;
          color: #000;
          padding: 3px 10px;
        }
          .ce-ret-title-filters span {
            font-weight: 700;
            font-style: normal;
            font-size: 18px;
          }
          .ce-ret-title-filters .fas {
            color: #cccccc;
          }
          .ce-ret-title-filters .fa-expand-alt {
            color: #000;
          }
          .ce-ret-title-filters .fa-filter {
            font-size: 0.6em;
          }
          .ce-ret-title-filters .vr {
            height: 0.9em;
            min-height: 0.7em;
            align-self: center;
          }
      
      .ce-ret-chart-controls {
        background-color: #ECECEC;
        height: 30px;
      }
      .ce-ret-chart-controls .dropdown > button {
        background-color: #F7F7F7;
        border-radius: 10px;
        border-color:  #F7F7F7;
        font-size: 10px;
      }
      .ce-ret-chart-controls .dropdown > button span {
        background-color: #F7F7F7;
        color: #3E3E3E;
        margin: 0;
        min-width: 8em;
      }
      .ce-ret-chart-controls .fas {
        color: #a5a5a5;
      }
      .ce-ret-chart-controls .btn-sm {
        padding: 0.12rem 0.5rem;
      }

    .highcharts-figure, .highcharts-data-table table {
      min-width: 360px; 
      max-width: 800px;
      margin: 1em auto;
    }
      .highcharts-data-table table {
        font-family: Verdana, sans-serif;
        border-collapse: collapse;
        border: 1px solid #EBEBEB;
        margin: 10px auto;
        text-align: center;
        width: 100%;
        max-width: 500px;
      }
        .highcharts-data-table caption {
          padding: 1em 0;
          font-size: 1.2em;
          color: #555;
        }
        .highcharts-data-table th {
          font-weight: 600;
          padding: 0.5em;
        }
        .highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
          padding: 0.5em;
        }
        .highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
          background: #f8f8f8;
        }
        .highcharts-data-table tr:hover {
          background: #f1f7ff;
        }
        `}
      </style>
    </>
  );
};

export default CERetentionChart;
