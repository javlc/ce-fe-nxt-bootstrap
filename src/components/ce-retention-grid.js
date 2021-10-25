import Highcharts from "highcharts/highmaps";
import HighchartsExporting from "highcharts/modules/exporting";
import HC_map from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const options = {
  credits: { enabled: false },
  chart: {
    type: "heatmap",
    height: (0.9 / 4) * 100 + "%",
    width: 636,
  },
  title: {
    text: "PERIODS AFTER INITIAL PURCHASE",
    align: "center",
    style: {
      color: "#C4C4C4",
      fontSize: "10px",
    },
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    lineWidth: 0,
    visible: true,
    opposite: true,
  },
  yAxis: {
    categories: ["Mean", "Median"],
    title: null,
    reversed: true,
    visible: true,
    labels: {
      enabled: true,
      step: 1,
      align: "right",
    },
    gridLineWidth: 0,
    // gridLineColor: "transparent",
  },
  colorAxis: {
    stops: [
      [0, "#E6E6E6"],
      [0.35, "#c6c6c6"],
      [0.75, "#6D6D6D"],
      [1, "#222222"],
    ],
  },
  // tooltip: {},
  /* plotOptions: {
    dataLabels: { enabled: true, format: "{point[2]} %" },
  }, */
  series: [
    {
      name: "",
      borderWidth: 5,
      borderColor: "white",
      data: [
        /* [0, 0, 6065],
        [0, 1, 5781], */
        [1, 0, 85.4],
        [1, 1, 86.12],
        [2, 0, 81.51],
        [2, 1, 81.35],
        [3, 0, 78.95],
        [3, 1, 79.59],
        [4, 0, 76.59],
        [4, 1, 78.16],
        [5, 0, 76.78],
        [5, 1, 77.13],
        [6, 0, 76.37],
        [6, 1, 76.83],
        [7, 0, 74.52],
        [7, 1, 74.52],
        [8, 0, 74.0],
        [8, 1, 74.0],
      ],
      dataLabels: {
        enabled: true,
        format: "{point.options.value:,.0f}%",
      },
    },
  ],
  exporting: {
    buttons: {
      contextButton: {
        enabled: false,
      },
    },
  },
};
const options2 = {
  credits: { enabled: false },

  chart: {
    type: "heatmap",
    // marginTop: 70,
  },
  title: {
    text: "PERIODS AFTER INITIAL PURCHASE",
    align: "center",
    style: {
      color: "#C4C4C4",
      fontSize: "10px",
    },
  },
  legend: {
    enabled: false,
    align: "right",
    layout: "vertical",
  },
  xAxis: {
    categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    visible: true,
    lineWidth: 0,
    opposite: true,
  },
  yAxis: {
    categories: [
      "Jan 2021",
      "Feb 2021",
      "Mar 2021",
      "Apr 2021",
      "May 2021",
      "Jun 2021",
      "Jul 2021",
      "Aug 2021",
      "Sep 2021",
    ],
    gridLineWidth: 0,
    visible: true,
    title: null,
    reversed: true,
    labels: {
      enabled: true,
    },
  },
  colorAxis: {
    stops: [
      [0, "#E6E6E6"],
      [0.35, "#c6c6c6"],
      [0.75, "#6D6D6D"],
      [1, "#222222"],
    ],
  },
  // tooltip: {},
  series: [
    {
      name: "",
      borderWidth: 5,
      borderColor: "white",
      data: [
        /* [0, 0, 8021],
        [0, 1, 6738],
        [0, 2, 6226],
        [0, 3, 5351],
        [0, 4, 5722],
        [0, 5, 5007],
        [0, 6, 5840],
        [0, 7, 5617],
        [0, 8, 5717], */
        [1, 0, 87.76],
        [1, 1, 89.09],
        [1, 2, 85.78],
        [1, 3, 84.54],
        [1, 4, 82.48],
        [1, 5, 87.1],
        [1, 6, 86.47],
        [1, 7, 80.0],
        [2, 0, 84.87],
        [2, 1, 84.59],
        [2, 2, 81.35],
        [2, 3, 79.62],
        [2, 4, 77.02],
        [2, 5, 83.13],
        [2, 6, 80.0],
        [3, 0, 82.5],
        [3, 1, 81.92],
        [3, 2, 79.19],
        [3, 3, 76.74],
        [3, 4, 73.38],
        [3, 5, 80.0],
        [4, 0, 80.23],
        [4, 1, 79.83],
        [4, 2, 78.16],
        [4, 3, 74.71],
        [4, 4, 70.0],
        [5, 0, 78.84],
        [5, 1, 78.42],
        [5, 2, 75.85],
        [5, 3, 74.0],
        [6, 0, 77.28],
        [6, 1, 76.83],
        [6, 2, 75.0],
        [7, 0, 75.05],
        [7, 1, 74.0],
        [8, 0, 74.0],
      ],
      dataLabels: {
        enabled: true,
        format: "{point.options.value:,.0f}%",
      },
    },
  ],
  exporting: {
    buttons: {
      contextButton: {
        enabled: false,
      },
    },
  },
};

const CERetentionGrid = (props) => {
  return (
    <>
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={options}
        {...props}
      ></HighchartsReact>
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={options2}
        {...props}
      ></HighchartsReact>
    </>
  );
};

export default CERetentionGrid;
