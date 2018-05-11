import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon } from "components";
import Label from "utils/translationNode";
import "./index.css";

const iconStyle = {
  width: "30px",
  height: "30px",
  fill: "#00bbd3",
};

const ServiceList = () => {
  return (
    <Card
      className="service-list col-xs-12"
      textChildren={
        <div>
          <div className="row upper-row">
            <Link to="/citizen/my-complaints">
              <div className="col-xs-4 service-item text-center">
                <div>
                  <Icon style={iconStyle} className="service-icon" action="alert" name="warning" />
                </div>
                <Label dark={true} className="service-label" label="Property Tax" />
              </div>
            </Link>
            <Link to="/citizen/my-complaints">
              <div className="col-xs-4 service-item text-center">
                <div>
                  <Icon style={iconStyle} className="service-icon" action="alert" name="warning" />
                </div>
                <Label dark={true} className="service-label" label="Water Charges" />
              </div>
            </Link>
            <Link to="/citizen/my-complaints">
              <div className="col-xs-4 service-item text-center">
                <div>
                  <Icon style={iconStyle} className="service-icon" action="alert" name="warning" />
                </div>
                <Label dark={true} className="service-label" label="Licenses" />
              </div>
            </Link>
          </div>
          <div className="row lower-row">
            <Link to="/citizen/my-complaints">
              <div className="col-xs-4 service-item text-center">
                <div>
                  <Icon style={iconStyle} color="service-icon" action="alert" name="warning" />
                </div>
                <Label dark={true} className="service-label" label="File Complaint" />
              </div>
            </Link>
            <Link to="/citizen/my-complaints">
              <div className="col-xs-4 service-item text-center">
                <div>
                  <Icon style={iconStyle} className="service-icon" action="alert" name="warning" />
                </div>
                <Label dark={true} className="service-label" label="Birth & Death" />
              </div>
            </Link>
            <Link to="/citizen/my-complaints">
              <div className="col-xs-4 service-item text-center">
                <div>
                  <Icon style={iconStyle} className="service-icon" action="alert" name="warning" />
                </div>
                <Label dark={true} className="service-label" label="Fire NOC" />
              </div>
            </Link>
          </div>
        </div>
      }
    />
  );
};

export default ServiceList;