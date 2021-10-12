import Highcharts from "highcharts/highmaps";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

import mapDataUS from "@highcharts/map-collection/countries/us/us-all.geo.json";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const data = {
  "FIVE GUYS": {
    AK: 0.44048031405149524,
    AL: 0.7870193590488344,
    AR: 0.5643099958851069,
    AZ: 0.20887060871184074,
    CA: 0.10825841938908354,
    CO: 0.6172727614906525,
    CT: 0.5991623763811487,
    DC: 0.3932111379730165,
    DE: 0.6932236322142666,
    FL: 0.821407054723039,
    GA: 0.7478456401755519,
    HI: 0.33910775178785046,
    IA: 0.7197144646552607,
    ID: 0.5554287050867925,
    IL: 0.5667879821411587,
    IN: 0.7605632087801473,
    KS: 0.7066372913581962,
    KY: 0.7104694389148379,
    LA: 0.7785297295217822,
    MA: 0.6913704525074896,
    MD: 0.7548698529369567,
    ME: 0.927480929911173,
    MI: 0.7883123961383178,
    MN: 0.694092433635035,
    MO: 0.6470139523099675,
    MS: 0.8354404224340134,
    MT: 0.7220608716134477,
    NC: 0.7152946204299571,
    ND: 0.7992558153018449,
    NE: 0.750061801237181,
    NH: 0.9617204897010906,
    NJ: 0.5471523790299138,
    NM: 0.5397478979614682,
    NV: 0.12459064617644543,
    NY: 0.4498247630046851,
    OH: 0.7563330834158117,
    OK: 0.6611734483093437,
    OR: 0.5314644006958659,
    PA: 0.6646500335190023,
    RI: 0.6977101364784941,
    SC: 0.8615720575876692,
    SD: 0.7437575310139348,
    TN: 0.6274234901419268,
    TX: 0.3508551700811454,
    UT: 0.31751802425118586,
    VA: 0.8055749312940458,
    VT: 0.5535176701413399,
    WA: 0.5355691609894905,
    WI: 0.6564201431414206,
    WV: 0.9581030068888021,
    WY: 0.6876448742369895,
  },
  "IN-N-OUT": {
    AK: 0.3993048505189733,
    AL: 0.06512676311885451,
    AR: 0.2762617606521099,
    AZ: 0.7179228577639502,
    CA: 0.8204329868694669,
    CO: 0.2235299734731858,
    CT: 0.039060246089343005,
    DC: 0.08000045558004631,
    DE: 0.03547983698048024,
    FL: 0.045534802472025404,
    GA: 0.07583824483795049,
    HI: 0.4971220851927206,
    IA: 0.13872600184000117,
    ID: 0.37926596999952283,
    IL: 0.14779545505908925,
    IN: 0.13069079986545015,
    KS: 0.1401867580340229,
    KY: 0.1335989706607615,
    LA: 0.0907740196657825,
    MA: 0.09350883786706708,
    MD: 0.03871213021457563,
    ME: 0.01988505668748693,
    MI: 0.08956158490620825,
    MN: 0.09645765144659892,
    MO: 0.14175597009209231,
    MS: 0.07915945222852525,
    MT: 0.2105232867042779,
    NC: 0.07199836071685645,
    ND: 0.11769454189581413,
    NE: 0.15108497111048874,
    NH: 0.013624918218641886,
    NJ: 0.04730149834305856,
    NM: 0.36001227805391056,
    NV: 0.7814043628736878,
    NY: 0.06337096659116905,
    OH: 0.09925750905147819,
    OK: 0.26660756249884976,
    OR: 0.39506299577900755,
    PA: 0.048628918350840857,
    RI: 0.057726115900541344,
    SC: 0.051842419805419114,
    SD: 0.1469658418256364,
    TN: 0.21553899114419275,
    TX: 0.45936294139406286,
    UT: 0.5816663030424437,
    VA: 0.04089711515727528,
    VT: 0.24199453148306527,
    WA: 0.26776683458643324,
    WI: 0.12430585504614354,
    WV: 0.022572527301334164,
    WY: 0.2341064385762745,
  },
  "SHAKE SHACK": {
    AK: 0.16021483542953152,
    AL: 0.14785387783231102,
    AR: 0.15942824346278325,
    AZ: 0.07320653352420911,
    CA: 0.07130859374144956,
    CO: 0.15919726503616166,
    CT: 0.36177737752950834,
    DC: 0.5267884064469373,
    DE: 0.271296530805253,
    FL: 0.13305814280493564,
    GA: 0.1763161149864976,
    HI: 0.16377016301942887,
    IA: 0.14155953350473816,
    ID: 0.06530532491368468,
    IL: 0.28541656279975225,
    IN: 0.10874599135440258,
    KS: 0.15317595060778091,
    KY: 0.15593159042440066,
    LA: 0.1306962508124353,
    MA: 0.21512070962544322,
    MD: 0.20641801684846756,
    ME: 0.052634013401340135,
    MI: 0.12212601895547395,
    MN: 0.20944991491836595,
    MO: 0.21123007759794016,
    MS: 0.0854001253374613,
    MT: 0.06741584168227448,
    NC: 0.2127070188531864,
    ND: 0.08304964280234096,
    NE: 0.09885322765233036,
    NH: 0.02465459208026755,
    NJ: 0.40554612262702766,
    NM: 0.10023982398462145,
    NV: 0.09400499094986682,
    NY: 0.4868042704041458,
    OH: 0.14440940753271006,
    OK: 0.07221898919180657,
    OR: 0.0734726035251266,
    PA: 0.28672104813015686,
    RI: 0.24456374762096464,
    SC: 0.08658552260691155,
    SD: 0.10927662716042871,
    TN: 0.15703751871388047,
    TX: 0.18978188852479172,
    UT: 0.10081567270637039,
    VA: 0.153527953548679,
    VT: 0.20448779837559478,
    WA: 0.19666400442407633,
    WI: 0.21927400181243584,
    WV: 0.019324465809863658,
    WY: 0.07824868718673599,
  },
};

const series_data = [];

// chart.series[0].setData(series_data);
const options = {
  credits: { enabled: false },
  title: {
    text: undefined,
  },
  legend: {
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    y: 50,
    symbolHeight: 600,
    symbolWidth: 25,
  },
  colorAxis: {
    min: 0,
    max: 1,
    type: "linear",
    minColor: "#7fdbf4",
    maxColor: "#0c2c4b",
    reversed: false,
    gridLineWidth: 0,
    labels: {
      formatter: function () {
        return 100 * this.value + "%";
      },
    },
  },
  series: [
    {
      mapData: mapDataUS,
      name: "State",
      keys: ["state", "value", "tooltip_labels"],
      joinBy: ["hc-a2", "state"],
      borderColor: "#ffffff",
      borderWidth: 3,
      data: series_data,
    },
  ],
  tooltip: {
    headerFormat: "",
    useHTML: true,
    pointFormatter: function () {
      // sort by market share then format the text
      return (
        "<table><caption>" +
        this.name +
        "</caption>" +
        this.tooltip_labels
          .sort((a, b) => {
            return b[1] - a[1];
          })
          .map(
            (i) =>
              "<tr><th>" +
              i[0] +
              "</th><td>" +
              Math.round(100 * i[1]) +
              "%</td></tr>"
          )
          .join("") +
        "</table>"
      );
    },
  },
};

console.log("mapDataUS: ", options.series[0].mapData);

// Iterate over the mapMap key (state two-char codes)
for (const state_code in options.series[0].mapMap) {
  series_data.push([
    state_code, // state
    data[entities[0].entity_name][state_code], // value (for color coding)
    Object.keys(data).map((company) => [
      company,
      data[company][state_code] || 0,
    ]), // tooltip_labels
  ]);
}
options.series[0].data = series_data;

const CEMapChart = (props) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"mapChart"}
      options={options}
      {...props}
    />
  );
};

export default CEMapChart;
