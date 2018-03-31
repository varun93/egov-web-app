import React, { Component } from "react";
import { Icon, List, Image, Card, MapLocation } from "../../../components";
import Screen from "../../common/Screen";
import pinIcon from "../../../assets/Location_pin.svg";
import Logo from "../../../assets/images/logo_black.png";
import Label from "utils/translationNode";
import "./index.css";

const listInnerDivStyle = {
  padding: "0px 0px 0px 40px",
};

const iconStyle = {
  width: "20px",
  height: "20px",
  padding: "0px",
  fill: "#f5a623",
  top: "0px",
  margin: "0px 0px 0px 8px",
};

const facebookStyle = {
  height: "47.7px",
  width: "47.7px",
  borderRadius: "50%",
  padding: "5px",
  background: "#3b5998",
};

const twitterStyle = {
  marginRight: 32,
  height: "47.7px",
  width: "47.7px",
  borderRadius: "50%",
  padding: "5px",
  background: "#55acee",
};

const location = { lat: 12.9199988, lng: 77.67078 };

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMap: false,
    };
  }

  openMapHandler = (isOpen) => {
    this.setState({
      openMap: isOpen,
    });
  };

  onItemClick = (item, index) => {};

  ListItems = {
    items: [
      {
        leftIcon: <Icon style={iconStyle} action="maps" name="place" />,
        primaryText: <Label label="CS_CONTACTUS_ADDRESS" />,
        secondaryText: (
          <div onClick={this.openMapHandler}>
            <Label id="contactus-open-map" label="CS_CONTACTUS_OPEN_MAP" className="openMap" labelStyle={{ color: "#00bbd3" }} />
          </div>
        ),
        style: {
          paddingBottom: "8px",
          paddingTop: "8px",
        },
      },
      {
        leftIcon: <Icon style={iconStyle} action="communication" name="call" />,
        primaryText: "080 71243544",
        style: {
          paddingBottom: "8px",
          paddingTop: "8px",
        },
      },
      {
        leftIcon: <Icon style={iconStyle} action="device" name="access-time" />,
        primaryText: <Label label="CS_CONTACTUS_WEEKDAY" />,
        secondaryText: "9.00 AM - 6.00 PM",
        style: {
          paddingBottom: "8px",
          paddingTop: "8px",
        },
      },
      {
        insetChildren: true,
        primaryText: <Label label="CS_CONTACTUS_WEEKEND" />,
        secondaryText: "9.00 AM - 12 PM",
        style: {
          paddingBottom: "5px",
          paddingTop: "8px",
        },
      },
      {
        leftIcon: <Icon style={iconStyle} action="communication" name="email" />,
        primaryText: "contact@egovernments.org",
        style: {
          paddingBottom: "8px",
          paddingTop: "8px",
        },
      },
      {
        leftIcon: <Icon style={iconStyle} action="action" name="language" />,
        primaryText: "egovernmentsfoundation.com",
        style: {
          paddingBottom: "8px",
          paddingTop: "8px",
        },
      },
    ],
  };
  render() {
    return (
      <Screen className="contactus-main-cont">
        <Card
          id="contactus-card"
          className="contactus-main-card"
          textChildren={
            <div>
              <Image className="mseva-logo" source={`${Logo}`} />
              <div className="contactus-list-container">
                <List onItemClick={this.onItemClick} innerDivStyle={listInnerDivStyle} items={this.ListItems.items} />
              </div>
              <div style={{ textAlign: "center", paddingBottom: "8px" }}>
                <Icon id="contactus-twitter" className="contactus-twitter" style={twitterStyle} action="custom" name="twitter" color="ffffff" />
                <Icon id="contactus-facebook" className="contactus-facebook" style={facebookStyle} action="custom" name="facebook" color="ffffff" />
              </div>
            </div>
          }
        />
        {this.state.openMap && (
          <div>
            <div className="back-btn">
              <Icon
                className="mapBackBtn"
                onClick={() => {
                  this.openMapHandler(false);
                }}
                style={{
                  height: 24,
                  width: 24,
                  color: "#484848",
                }}
                action="navigation"
                name={"arrow-back"}
              />
            </div>
            <MapLocation currLoc={location} icon={pinIcon} hideTerrainBtn={true} />
          </div>
        )}
      </Screen>
    );
  }
}

export default ContactUs;