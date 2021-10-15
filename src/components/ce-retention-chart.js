import Highcharts from "highcharts/highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const opts = {
  credits: { enabled: false },

  chart: {
    // backgroundColor: "rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    type: "spline",
    height: (3 / 4) * 100 + "%",
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
    layout: "horizontal",
    align: "center",
    verticalAlign: "top",
    x: 150,
    y: -70,
    labelFormat: "{name.value}",
    itemStyle: {
      color: "#565656",
    },
    backgroundColor: "rgba(255, 255, 255, 0)",
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
    headerFormat: "",
    pointFormat:
      "{series.name.value} ({point.x}): <br><strong>{point.y} %</strong>",
    shared: false,
  },

  series: [
    {
      name: {
        value: "Ouai",
        type: "Mean",
      },
      data: [100, 85.4, 81.51, 78.95, 76.59, 76.78, 76.37, 74.52, 74.0],
      color: "#0000FF",
    },
    {
      name: {
        value: "Ouai",
        type: "(Median)",
      },
      data: [100, 86.12, 81.35, 79.59, 78.16, 77.13, 76.83, 74.52, 74.0],
      dashStyle: "dash",
      // color: "blue",
      color: "rgba(0, 70, 250, 0.8)",
    },
    {
      name: {
        value: "Nars Cosmetics",
        type: "(Mean)",
      },
      data: [100, 58, 55, 53, 52, 49, 47, 48, 47],
      // color: "red",
      color: "#FF0000",
    },
    {
      name: {
        value: "Nars Cosmetics",
        type: "(Median)",
      },
      data: [100, 61, 58, 55, 54, 51, 52, 48, 47],
      dashStyle: "dash",
      // color: "red",
      color: "rgba(200, 0, 0, 0.8)",
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
    <HighchartsReact highcharts={Highcharts} options={opts} {...props}>
      <>
        <style type="text/css">
          {`
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
    </HighchartsReact>
  );
};

export default CERetentionChart;
