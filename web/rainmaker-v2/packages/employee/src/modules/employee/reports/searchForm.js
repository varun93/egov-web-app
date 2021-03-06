import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card, Button } from "components";
import { CardHeader, CardText } from "material-ui/Card";
import { brown500, red500, white, orange800 } from "material-ui/styles/colors";
import RaisedButton from "material-ui/RaisedButton";
import { commonApiPost } from "egov-ui-kit/utils/api";
import ShowField from "./showField";
//import { translate } from "../../common/common";
import { translate } from "./commons/common";
import Label from "egov-ui-kit/utils/translationNode";
import jp from "jsonpath";
import _ from "lodash";
import { getResultUrl } from "./commons/url";
import commonConfig from "config/common.js";
class ShowForm extends Component {
  state = {
    searchBtnText: "APPLY",
    filterApplied: false,
  };

  checkForDependentSource = async (fieldIndex, field, selectedValue) => {
    const { pattern: fieldPattern, mapping, type: fieldType, name: targetProperty, isMandatory, displayOnly } = field;
    const { metaData, setMetaData, handleChange } = this.props;
    let splitArray = fieldPattern.split("?");
    let url = splitArray[0];
    let queryString = splitArray[1].split("|")[0].split("&");
    let queryJSON = {};

    for (var key in queryString) {
      let dat = queryString[key].split("=");
      if (dat[0] == "tenant-id") continue;
      if (dat[1].indexOf("{") > -1) {
        var path = dat[1].split("{")[1].split("}")[0];
        var pat = new RegExp("{" + path + "}", "g");
        queryJSON[dat[0]] = dat[1].replace(pat, selectedValue);
      } else {
        queryJSON[dat[0]] = dat[1];
      }
    }

    try {
      const response = await commonApiPost(url, queryJSON);
      let keys = jp.query(response, splitArray[1].split("|")[1]);
      let values = jp.query(response, splitArray[1].split("|")[2]);
      let defaultValue = {};
      for (var k = 0; k < keys.length; k++) {
        defaultValue[keys[k]] = values[k];
      }
      const defaultValuesLength = Object.keys(defaultValue).length;

      if (fieldType == "url") {
        metaData.reportDetails.searchParams[fieldIndex].defaultValue = defaultValue;
      } else {
        if (defaultValuesLength < 2) {
          metaData.reportDetails.searchParams[fieldIndex].disabled = true;
        }
      }

      setMetaData(metaData);

      if (defaultValuesLength && defaultValuesLength < 2) {
        const key = Object.keys(defaultValue)[0];
        const value = displayOnly ? defaultValue[key] : key;
        const e = { target: { value } };
        handleChange(e, targetProperty, isMandatory ? true : false, "");
      }
    } catch (error) {
      //alert("Something went wrong while loading depedent");
    }
  };

  handleChange = (e, property, isRequired, pattern) => {
    const { metaData, setMetaData, handleChange, searchForm } = this.props;
    const selectedValue = e.target.value;
    if (property === "fromDate" || property === "toDate") {
      this.checkDate(selectedValue, property, isRequired, pattern);
    } else {
      handleChange(e, property, isRequired, pattern);
    }

    if (metaData.hasOwnProperty("reportDetails") && metaData.reportDetails.searchParams.length > 0) {
      if (!selectedValue) {
        for (var l = 0; l < metaData.reportDetails.searchParams.length; l++) {
          if (metaData.reportDetails.searchParams[l].type == "url" && metaData.reportDetails.searchParams[l].pattern.search(property) > -1) {
            metaData.reportDetails.searchParams[l].defaultValue = {};
          }
        }
        setMetaData(metaData);
      } else {
        for (var i = 0; i < metaData.reportDetails.searchParams.length; i++) {
          const field = metaData.reportDetails.searchParams[i];
          const defaultValue = field.defaultValue;
          const fieldType = field.type;
          const dependantProperty = field.name;

          if (dependantProperty === property) {
            continue;
          }

          if (typeof defaultValue != "object" || field.hasOwnProperty("pattern")) {
            if (!field.hasOwnProperty("pattern")) {
              field["pattern"] = defaultValue;
            }

            const fieldPattern = field.pattern;

            if (fieldPattern.indexOf("{" + property + "}") == -1) continue;

            if (fieldPattern && fieldPattern.search("{" + property + "}") > -1) {
              this.checkForDependentSource(i, field, selectedValue);
            }
          }
        }
      }
    }
  };

  checkDate = (value, name, required, pattern) => {
    let e = {
      target: {
        value: value,
      },
    };

    if (name == "fromDate") {
      let startDate = value;
      if (this.props.searchForm) {
        let endDate = this.props.searchForm.toDate;
        this.props.handleChange(e, name, required, pattern);
        this.validateDate(startDate, endDate, required, "fromDate"); //3rd param to denote whether field fails
      } else {
        this.props.handleChange(e, name, required, pattern);
      }
    } else {
      let endDate = value;
      if (this.props.searchForm) {
        let startDate = this.props.searchForm.fromDate;
        this.props.handleChange(e, name, required, pattern);
        this.validateDate(startDate, endDate, required, "toDate"); //3rd param to denote whether field fails
      }
    }
  };

  validateDate = (startDate, endDate, required, field) => {
    if (startDate && endDate) {
      let sD = new Date(startDate);
      sD.setHours(0, 0, 0, 0);
      let eD = new Date(endDate);
      eD.setHours(0, 0, 0, 0);
      if (eD >= sD) {
        this.setState({ datefield: "" });
        this.setState({ dateError: "" });
      } else {
        let e = {
          target: {
            value: "",
          },
        };
        this.props.handleChange(e, field, required, "");
        this.setState({ datefield: field });
        this.setState({
          dateError: field === "toDate" ? <Label label="REPORT_SEARCHFORM_DATE_GREATER" /> : <Label label="REPORT_SEARCHFORM_DATE_LESSER" />,
        });
      }
    }
  };

  // set the value here, introduce the disabled
  handleFormFields = () => {
    let { currentThis } = this;
    let { metaData, searchForm } = this.props;
    if (!_.isEmpty(metaData) && metaData.reportDetails && metaData.reportDetails.searchParams && metaData.reportDetails.searchParams.length > 0) {
      return metaData.reportDetails.searchParams.map((item, index) => {
        item["value"] = _.isEmpty(searchForm) ? "" : searchForm[item.name];

        return (
          item.name !== "tenantId" && (
            <ShowField
              value={item["value"]}
              key={index}
              obj={item}
              dateField={this.state.datefield}
              dateError={this.state.dateError}
              handler={this.handleChange}
            />
          )
        );
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    let { changeButtonText, clearReportHistory, needDefaultSearch } = this.props;

    if (nextProps.metaData.reportDetails && nextProps.metaData.reportDetails !== this.props.metaData.reportDetails) {
      changeButtonText("APPLY");
      this.setState({
        reportName: nextProps.metaData.reportDetails.reportName,
      });
      let { reportName } = this.state;

      this.setState({ moduleName: this.props.match.params.moduleName });

      let { setForm } = this.props;
      let { searchParams } = !_.isEmpty(nextProps.metaData) ? nextProps.metaData.reportDetails : { searchParams: [] };
      let required = [];
      for (var i = 0; i < searchParams.length; i++) {
        if (searchParams[i].name !== "tenantId" && searchParams[i].isMandatory) {
          required.push(searchParams[i].name);
        }
      }
      setForm(required);
      clearReportHistory();
      if (!_.isEmpty(JSON.parse(localStorage.getItem("searchCriteria")))) {
        this.search(null, true, nextProps.metaData.reportDetails.reportName);
      } else if (needDefaultSearch) {
        this.defautSearch(null, false, nextProps.metaData.reportDetails.reportName);
      }
    }
  }

  componentDidMount() {
    let { metaData, setForm, changeButtonText, clearReportHistory } = this.props;
    changeButtonText("APPLY");
    let searchParams = !_.isEmpty(metaData) ? metaData.reportDetails : { searchParams: [] };
    let required = [];
    this.setState({ reportName: this.props.match.params.reportName });
    this.setState({ moduleName: this.props.match.params.moduleName });
    if (searchParams) {
      for (var i = 0; i < searchParams.length; i++) {
        if (searchParams[i].isMandatory) {
          required.push(searchParams[i].name);
        }
      }
    }

    setForm(required);
    clearReportHistory();
  }

  getDisplayOnlyFields = (metaData) => {
    return (
      metaData &&
      metaData.reportDetails &&
      metaData.reportDetails.searchParams &&
      metaData.reportDetails.searchParams.filter((field) => field.displayOnly).map((field) => field.name)
    );
  };
  defautSearch = (e = null, isDrilldown = false, rptName) => {
    if (e) {
      e.preventDefault();
    }

    let {
      showTable,
      changeButtonText,
      setReportResult,
      searchForm,
      metaData,
      setFlag,
      setSearchParams,
      reportHistory,
      reportIndex,
      pushReportHistory,
      clearReportHistory,
      decreaseReportIndex,
    } = this.props;
    let today = new Date();
    let date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    let tabLabel = `Showing data upto : ${date}`;
    this.props.updateTabLabel(tabLabel);

    var tenantId = localStorage.getItem("tenant-id") ? localStorage.getItem("tenant-id") : commonConfig.tenantId;
    let self = this;
    if (!isDrilldown) {
      const displayOnlyFields = this.getDisplayOnlyFields(metaData);

      let searchParams = [];

      clearReportHistory();
      let resulturl = getResultUrl(this.state.moduleName);
      let response =
        resulturl &&
        commonApiPost(resulturl, {}, { tenantId: tenantId, reportName: rptName || this.state.reportName, searchParams }).then(
          function(response) {
            pushReportHistory({ tenantId: tenantId, reportName: self.state.reportName, searchParams });
            setReportResult(response);
            showTable(true);
            setFlag(1);
          },
          function(err) {
            showTable(false);
            alert("Something went wrong or try again later");
          }
        );
    }

    changeButtonText("APPLY");
  };
  search = (e = null, isDrilldown = false) => {
    if (e) {
      e.preventDefault();
    }

    let {
      showTable,
      changeButtonText,
      setReportResult,
      searchForm,
      metaData,
      setFlag,
      setSearchParams,
      reportHistory,
      reportIndex,
      pushReportHistory,
      clearReportHistory,
      decreaseReportIndex,
    } = this.props;
    let searchParams = [];
    var tenantId = localStorage.getItem("tenant-id") ? localStorage.getItem("tenant-id") : commonConfig.tenantId;
    let self = this;
    if (!isDrilldown) {
      const displayOnlyFields = this.getDisplayOnlyFields(metaData);

      searchForm = searchForm
        ? Object.keys(searchForm)
            .filter((param) => !_.includes(displayOnlyFields, param))
            .reduce((acc, param) => {
              acc[param] = searchForm[param];
              return acc;
            }, {})
        : searchForm;

      for (var variable in searchForm) {
        let input;

        if (this.state.moduleName == "pgr") {
          if (variable == "fromDate") {
            input =
              searchForm[variable].getFullYear() +
              "-" +
              (searchForm[variable].getMonth() > 8 ? searchForm[variable].getMonth() + 1 : "0" + parseInt(searchForm[variable].getMonth() + 1)) +
              "-" +
              (searchForm[variable].getDate() > 9 ? searchForm[variable].getDate() : "0" + searchForm[variable].getDate()) +
              " 00:00:00";
          } else if (variable == "toDate") {
            input =
              searchForm[variable].getFullYear() +
              "-" +
              (searchForm[variable].getMonth() > 8 ? searchForm[variable].getMonth() + 1 : "0" + parseInt(searchForm[variable].getMonth() + 1)) +
              "-" +
              (searchForm[variable].getDate() > 9 ? searchForm[variable].getDate() : "0" + searchForm[variable].getDate()) +
              " 23:59:59";
          } else {
            input = searchForm[variable];
          }
        } else {
          if (variable == "fromDate") {
            input = searchForm[variable].setHours(0);
            input = searchForm[variable].setMinutes(0);
            input = searchForm[variable].setSeconds(0);
          } else if (variable == "toDate") {
            input = searchForm[variable].setHours(23);
            input = searchForm[variable].setMinutes(59);
            input = searchForm[variable].setSeconds(59);
          } else {
            input = searchForm[variable];
          }
        }

        searchParams.push({ name: variable, input });
      }

      setSearchParams(searchParams);

      clearReportHistory();
      let resulturl = getResultUrl(this.state.moduleName);
      let response =
        resulturl &&
        commonApiPost(resulturl, {}, { tenantId: tenantId, reportName: this.state.reportName, searchParams }).then(
          function(response) {
            pushReportHistory({ tenantId: tenantId, reportName: self.state.reportName, searchParams });
            setReportResult(response);
            showTable(true);
            setFlag(1);
          },
          function(err) {
            showTable(false);
            alert("Something went wrong or try again later");
          }
        );
    } else {
      if (_.isEmpty(JSON.parse(localStorage.getItem("searchCriteria")))) {
        let reportData = reportHistory[reportIndex - 1 - 1];
        let resulturl = getResultUrl(this.state.moduleName);
        let response =
          resulturl &&
          commonApiPost(resulturl, {}, { ...reportData }).then(
            function(response) {
              decreaseReportIndex();
              setReportResult(response);

              showTable(true);
              setFlag(1);
            },
            function(err) {
              showTable(false);
              alert("Something went wrong or try again later");
            }
          );
      } else {
        var reportData = JSON.parse(localStorage.getItem("searchCriteria"));
        let resulturl = getResultUrl(localStorage.getItem("moduleName"));
        let response =
          resulturl &&
          commonApiPost(resulturl, {}, { ...reportData }).then(
            function(response) {
              localStorage.setItem("returnUrl", "");
              localStorage.setItem("searchCriteria", JSON.stringify({}));
              localStorage.setItem("moduleName", "");
              for (var i = 0; i < reportData.searchParams.length; i++) {
                self.handleChange({ target: { value: reportData.searchParams[i].name } }, reportData.searchParams[i].input, false, false);
              }
              setSearchParams(reportData.searchParams);
              setReportResult(response);

              showTable(true);
              setFlag(1);
            },
            function(err) {
              showTable(false);
              alert("Something went wrong or try again later");
            }
          );
      }
    }

    changeButtonText("APPLY");
  };

  render() {
    let { searchForm, fieldErrors, isFormValid, isTableShow, handleChange, buttonText, metaData, reportHistory, reportIndex } = this.props;
    let { search } = this;
    return (
      <div className="">
        {metaData &&
          metaData.reportDetails && (
            <form
              onSubmit={(e) => {
                let fromDate;
                let toDate;
                if (searchForm && searchForm.fromDate && searchForm.toDate) {
                  fromDate = new Date(searchForm.fromDate);
                  toDate = new Date(searchForm.toDate);
                }

                if (fromDate && toDate) {
                  let tabLabel = `Showing data for : ${fromDate.getDate() +
                    "/" +
                    (fromDate.getMonth() + 1) +
                    "/" +
                    fromDate.getFullYear()} to ${toDate.getDate() + "/" + (toDate.getMonth() + 1) + "/" + toDate.getFullYear()}`;
                  this.props.updateTabLabel(tabLabel);
                }
                search(e);
              }}
            >
              <Card
                style={{ margin: "16px" }}
                textChildren={
                  <div>
                    <Label label={"REPORTS_SEARCHFORM_MODIFY_DATE_HEADER"} />

                    <Row>
                      {this.handleFormFields()}
                      <div style={{ marginTop: "16px" }} className="col-xs-12 col-sm-4">
                        <RaisedButton
                          style={{ height: "50px", lineHeight: "50px", width: "80%", background: "#fe7a51" }}
                          type="submit"
                          //disabled={!isFormValid}
                          primary={true}
                          label={buttonText}
                        />
                      </div>
                    </Row>
                  </div>
                }
              />
            </form>
          )}

        {reportIndex > 1 && (
          <div
            style={{
              textAlign: "right",
              paddingRight: "15px",
            }}
          >
            <br />
            <RaisedButton
              type="button"
              onClick={(e) => {
                search(e, true);
              }}
              primary={true}
              label={"Back"}
            />
            <br />
            <br />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchForm: state.formtemp.form,
    fieldErrors: state.formtemp.fieldErrors,
    isFormValid: state.formtemp.isFormValid,
    isTableShow: state.formtemp.showTable,
    buttonText: state.formtemp.buttonText,
    metaData: state.report.metaData,
    reportHistory: state.report.reportHistory,
    reportIndex: state.report.reportIndex,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setForm: (required = [], pattern = []) => {
    dispatch({
      type: "SET_FORM",
      formtemp: {},
      fieldErrors: {},
      isFormValid: required.length > 0 ? false : true,
      validationData: {
        required: {
          current: [],
          required: required,
        },
        pattern: {
          current: [],
          required: [],
        },
      },
    });
  },
  handleChange: (e, property, isRequired, pattern) => {
    dispatch({
      type: "HANDLE_CHANGE",
      property,
      value: e.target.value,
      isRequired,
      pattern,
    });
  },
  showTable: (state) => {
    dispatch({ type: "SHOW_TABLE", state });
  },
  changeButtonText: (text) => {
    dispatch({ type: "BUTTON_TEXT", text });
  },
  setReportResult: (reportResult) => {
    dispatch({ type: "SET_REPORT_RESULT", reportResult });
  },
  setFlag: (flag) => {
    dispatch({ type: "SET_FLAG", flag });
  },
  setMetaData: (metaData) => {
    dispatch({ type: "SET_META_DATA", metaData });
  },
  setSearchParams: (searchParams) => {
    dispatch({ type: "SET_SEARCH_PARAMS", searchParams });
  },
  pushReportHistory: (history) => {
    dispatch({ type: "PUSH_REPORT_HISTORY", reportData: history });
  },
  clearReportHistory: () => {
    dispatch({ type: "CLEAR_REPORT_HISTORY" });
  },
  decreaseReportIndex: () => {
    dispatch({ type: "DECREASE_REPORT_INDEX" });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowForm);
