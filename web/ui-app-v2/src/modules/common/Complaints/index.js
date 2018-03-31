import React from "react";
import { Image, Card, Icon, Button } from "../../../components";
import { withRouter } from "react-router-dom";
import Label from "utils/translationNode";
import "./index.css";

const status = { OPEN: "filed", CLOSED: "resolved", REJECTED: "rejected" };

const imageStyles = {
  minHeight: "87px",
};

const bottomInfoTemplate = (item, role) => {
  return role !== "citizen" ? (
    <div>
      {item.complaintStatus === "ASSIGNED" && (
        <div className="employee-bottom-info-cont">
          <div className="submitted-by-text">
            {role === "ao" ? (
              <div>
                <span>Assigned To : </span>
                <span style={{ color: "#464646" }}>{item.assignedTo}</span>
              </div>
            ) : (
              <div>
                <span>Submitted By : </span>
                <span style={{ color: "#464646" }}>{item.submittedBy}</span>
              </div>
            )}
          </div>
          <Button
            primary={true}
            label={"CALL"}
            style={{
              height: "auto",
              lineHeight: "auto",
              minWidth: "inherit",
            }}
            labelStyle={{
              color: "#ffffff",
              padding: "0 12px 0 0 ",
              letterSpacing: "0.6px",
              display: "inline-block",
              height: "35px",
              fontSize: "12px",
              lineHeight: "35px",
            }}
            icon={
              <Icon
                action="communication"
                name="call"
                style={{
                  height: "12px",
                  width: "12px",
                  marginRight: "7px",
                }}
                color={"#ffffff"}
              />
            }
            onClick={(e) => {
              console.log("clicked");
            }}
          />
        </div>
      )}
      {item.escalatedTo && (
        <div className="submitted-by-text">
          Escalated To: <span style={{ color: "#464646" }}>{item.escalatedTo}</span>
        </div>
      )}
      {item.reassign && (
        <div className="employee-bottom-msg">
          <Label label={role === "ao" ? "Dharmendra Pal requested for re-assign" : "You have requested for re-assign"} dark={true} />
        </div>
      )}
    </div>
  ) : (
    ""
  );
};
const getStatusAndChangeColor = (status, assignee) => {
  let statusObj = {
    style: {},
    message: "",
  };
  switch (status) {
    case "OPEN":
      statusObj.style = {
        color: "#f89a3f",
      };
      statusObj.message = (
        <div>
          <Label label={`Complaint `} />
          <Label className="complaint-status-reassigned" label={`CS_COMMON_RE_ASSIGNED`} />
          <Label label={` to `} />
          <Label className="complaint-assignee" label={`${assignee}`} />
        </div>
      );
      break;
    case "CLOSED":
      statusObj.style = {
        color: "#5385a6",
      };
      statusObj.message = (
        <div>
          <Label label={`Complaint `} />
          <Label className="complaint-status-resolved" label="CS_COMMON_RESOLVED" />
          <Label label={`. Please rate`} />
        </div>
      );
      break;
    case "REJECTED":
      statusObj.style = {
        color: "#5385a6",
      };
      statusObj.message = (
        <div>
          <Label label={`Complaint has been `} />
          <Label className="complaint-status-rejected" label={`CS_COMMON_REJECTED`} />
          <Label label={`. Please rate`} />
        </div>
      );
      break;
    case "Overdue by 1 day":
      statusObj.style = {
        color: "#e74c3c",
      };
      statusObj.message = ``;
      break;
    case "2 days left":
      statusObj.style = {
        color: "#22b25f",
      };
      statusObj.message = ``;
      break;
    default:
      statusObj.style = {
        color: "#484848",
      };
      statusObj.message = `Complaint Re-assigned to ${assignee}`;
  }
  return statusObj;
};

const Complaints = ({ index, complaints, history, onClick, complaintLocation, track, role }) => {
  return complaints.map((complaint, complaintIndex) => {
    return (
      <div id={"complaint-" + complaintIndex} className="complaints-card-main-cont" key={`complaint-${complaintIndex}`}>
        <Card
          onClick={(e) => {
            history.push(`/citizen/complaint-details/${encodeURIComponent(complaint.complaintNo)}`);
          }}
          className="complaint-card"
          textChildren={
            <div className="complaint-card-wrapper">
              <div className="complaint-header-cont">
                <Label
                  className="complaint-header text-bold dark-color"
                  fontSize="16px"
                  dark={true}
                  bold={true}
                  label={complaint.header}
                  containerStyle={{ width: "80%" }}
                  labelStyle={{ letterSpacing: 0.7, wordWrap: "break-word", width: "100%" }}
                />

                <Label
                  className="complaint-status-text text-bold"
                  labelStyle={{ letterSpacing: 0.7, ...getStatusAndChangeColor(complaint.status.status).style }}
                  label={complaint.status.status}
                />
              </div>
              <div className="complaint-date-cont">
                <Icon action="action" name="date-range" />
                <span className="complaint-date">{complaint.date}</span>
              </div>
              <div className="complaint-number-cont">
                <div className="complaint-number complaint-date">
                  <Label fontSize="12px" label={"CS_COMMON_COMPLAINT_NO"} />
                  <Label fontSize="12px" label={" : "} />
                  <Label fontSize="12px" label={complaint.complaintNo} className="complaint-complaint-number" />
                </div>
              </div>
              {complaintLocation && (
                <div className="complaint-address-cont">
                  <Icon action="maps" name="place" style={{ height: 14, width: 14, marginRight: 5 }} color={"#767676"} />
                  <span className="complaint-address">{complaint.address}</span>
                </div>
              )}
              <div className="complaint-image-cont">
                {complaint.images.map((image, index) => {
                  return (
                    <div className="complaint-image-wrapper" key={index}>
                      <Image style={imageStyles} className="complaint-image" width="100%" height={46} source={image.source} />{" "}
                    </div>
                  );
                })}
              </div>
              {role === "citizen" && (
                <div className="complaint-status-cont">
                  <Label label={complaint.status.statusMessage} className="complaint-status-text dark-color" />
                </div>
              )}
              {/* {track && (
                <div className="complaint-track-button-cont">
                  <Button
                    className="complaint-track-btn"
                    primary={true}
                    label={"TRACK"}
                    style={{
                      height: "auto",
                      lineHeight: "auto",
                      minWidth: "inherit",
                    }}
                    labelStyle={{
                      color: "#ffffff",
                      padding: "0 16px",
                      letterSpacing: "0.6px",
                      display: "inline-block",
                      height: "35px",
                      fontSize: "12px",
                      lineHeight: "35px",
                    }}
                    onClick={(e) => {
                      history.push(`/citizen/complaint-details?status=${status[complaint.status]}`);
                    }}
                  />
                </div>
              )} */}
              {bottomInfoTemplate(complaint, role)}
            </div>
          }
        />
      </div>
    );
  });
};

export default withRouter(Complaints);