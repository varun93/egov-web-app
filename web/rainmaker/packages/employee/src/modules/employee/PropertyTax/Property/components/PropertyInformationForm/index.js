import React from "react";
import { Screen } from "modules/common";
import { Icon } from "components";
import { OwnerInfoHOC } from "../../../FormWizard/components/Forms";
import formHoc from "egov-ui-kit/hocs/form";
import GenericForm from "egov-ui-kit/common/GenericForm";
import { ActionFooter } from "modules/common";
import Label from "egov-ui-kit/utils/translationNode";
import "./index.css";

const buttons = {
  button1: "GO BACK",
  button2: "SAVE",
};

const PropertyAddressHOC = formHoc({ formKey: "propertyInformation", path: "PropertyTaxPay" })(GenericForm);

const PropertyInformation = () => {
  return (
    <Screen>
      <div className="form-without-button-cont-generic">
        <PropertyAddressHOC
          cardTitle={
            <div className="rainmaker-displayInline" style={{ marginLeft: 12, marginBottom: 10 }}>
              <Icon action="action" name="home" />
              <Label label="Property Address" containerStyle={{ marginLeft: 5 }} />
            </div>
          }
        />
        <OwnerInfoHOC
          checkBox={true}
          cardTitle={
            <div className="rainmaker-displayInline" style={{ marginLeft: 25, marginBottom: 10 }}>
              <Icon action="social" name="person" />
              <Label label="Owner Information" containerStyle={{ marginLeft: 5 }} />
            </div>
          }
        />
        <ActionFooter label1={buttons.button1} label2={buttons.button2} />
      </div>
    </Screen>
  );
};

export default PropertyInformation;
