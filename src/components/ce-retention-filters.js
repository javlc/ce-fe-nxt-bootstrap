import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Stack from "react-bootstrap/Stack";

const CERetentionFilters = (props) => {
  return (
    <>
      <Stack direction="horizontal" gap={3} className="ce-ret-title-filters">
        <span>{props.title}</span>
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
          id="ce-dd-frequency"
          variant="light"
          size="sm"
          title={
            <>
              <span>{props.filterOpts.frequency[2]}</span>
            </>
          }
        >
          {props.filterOpts.frequency.map((item, i) => {
            return (
              <Dropdown.Item key={item} href={"#/action-freq-" + i}>
                {item}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="ce-dd-type" size="sm">
            <span>{props.filterOpts.type[0]}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {props.filterOpts.type.map((type, i) => {
              return (
                <Dropdown.Item key={type} href={"#/action-type-" + i}>
                  {type}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id={"ce-dd-calcType"} size="sm">
            <span>Mean & Median</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {props.filterOpts.calcType.map((item, i) => {
              return (
                <Dropdown.Item key={item} href={"#/action-calc-" + i}>
                  {item}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <i className="fas fa-user-plus small ms-2"></i>
      </Stack>
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
          .ce-ret-chart-controls .dropdown.show > .dropdown-toggle {
            background-color: #f7f7f7;
            border-color: #f7f7f7;
          }
          .ce-ret-chart-controls .dropdown-menu.show {
            background-color: #EDEDEC;
            border-color: #EDEDEC;
            min-width: 5em;
            padding: 0;
          }
          .ce-ret-chart-controls .dropdown-menu.show a {
            color: #3E3E3E;
            font-size: 10px;
            padding: .15rem 0.5rem;
          }
          .ce-ret-chart-controls .fas {
            color: #a5a5a5;
          }
          .ce-ret-chart-controls .btn-sm {
            padding: 0.12rem 0.5rem;
          }
        `}
      </style>
    </>
  );
};

export default CERetentionFilters;
