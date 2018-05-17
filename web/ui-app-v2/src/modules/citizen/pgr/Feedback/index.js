import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "components";
import RatingsComponent from "./components/Ratings";
import TextAreaComponent from "./components/TextArea";
import CheckBoxGroup from "./components/CheckBoxGroup";
import Screen from "modules/common/common/Screen";
import { handleFieldChange, submitForm, initForm } from "redux/form/actions";
import { fetchComplaints } from "redux/complaints/actions";
import "./index.css";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.formConfig = require("config/forms/feedback").default;
  }
  state = {
    value: [],
    ratingValue: 0,
    submitted: false,
  };

  componentDidMount = () => {
    let { fetchComplaints, match } = this.props;
    fetchComplaints([{ key: "serviceRequestId", value: match.params.serviceRequestId }]);
    this.props.initForm(this.formConfig);
  };

  onCheck = (value) => {
    var valueArray = this.state.value.slice(0);
    if (valueArray.indexOf(value) > -1) {
      valueArray.splice(valueArray.indexOf(value), 1);
    } else {
      valueArray.push(value);
    }
    this.setState({ value: valueArray });
    this.props.handleFieldChange(this.props.formKey, "selectedSevice", valueArray.toString());
  };

  onClick = (value) => {
    this.props.handleFieldChange(this.props.formKey, "rating", value);
  };

  handleChange = (e, value) => {
    this.props.handleFieldChange(this.props.formKey, "comments", value);
  };

  onSubmit = () => {
    this.props.submitForm(this.props.formKey);
  };

  render() {
    let { value } = this.state;
    const { form, loading } = this.props;
    const { fields, submit } = form;
    let comments;
    if (fields) {
      comments = fields.comments;
    }

    return (
      <Screen className="feedback-main-screen" loading={loading}>
        {
          <div className="feedback-main-container">
            <div className="feedback-form">
              <RatingsComponent onChange={this.onClick} />
              <CheckBoxGroup selected={value} onCheck={this.onCheck} />
              <TextAreaComponent onChange={this.handleChange} {...comments} />
            </div>
          </div>
        }
        <div className="feedback-popup-button-cont">
          <Button {...submit} primary={true} fullWidth={true} onClick={this.onSubmit} />
        </div>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const formKey = "feedback";
  const form = state.form[formKey] || {};
  const { loading } = form || false;
  return { form, formKey, loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFieldChange: (formKey, fieldKey, value) => dispatch(handleFieldChange(formKey, fieldKey, value)),
    submitForm: (formKey) => dispatch(submitForm(formKey)),
    initForm: (form) => dispatch(initForm(form)),
    fetchComplaints: (criteria) => dispatch(fetchComplaints(criteria)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
