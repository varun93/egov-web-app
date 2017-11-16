var dat = {
  "swm.search": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "vendorContracts",
    "url": "/swm-services/vendorcontracts/_search",
    "groups": [
      {
        "name": "search",
        "label": "vendorcontracts.search.title",
        "fields": [
          {
            "name": "contractNo",
            "jsonPath": "contractNo",
            "label": "vendorcontracts.create.contractNo",
            "type": "text",
            "isDisabled": false,
            "patternErrorMsg": "vendorcontracts.create.field.message.contractNo"
          },
          {
              "name":"vendor",
	      "jsonPath":"vendorNo",
	      "label":"vendorcontracts.create.vendorNo",
	      "type":"singleValueList",
	      "isDisabled":false,
	      "patternErrorMsg":"vendorcontracts.create.field.message.vendorNo",
	      "url":"/swm-services/vendors/_search?|$.vendors.*.vendorNo|$.vendors.*.name"
          },
          {
            "name": "contractPeriodFrom",
            "jsonPath": "contractPeriodFrom",
            "label": "vendorcontracts.create.contractPeriodFrom",
            "type": "datePicker",
            "isDisabled": false,
            "patternErrorMsg": "vendorcontracts.create.field.message.contractPeriodFrom"
          },
          {
            "name": "contractPeriodto",
            "jsonPath": "contractPeriodTo",
            "label": "vendorcontracts.create.contractPeriodto",
            "type": "datePicker",
            "isDisabled": false,
            "patternErrorMsg": "vendorcontracts.create.field.message.contractPeriodto"
          },
          {
            "name": "contractDate",
            "jsonPath": "contractDate",
            "label": "vendorcontracts.create.contractDate",
            "type": "datePicker",
            "isDisabled": false,
            "patternErrorMsg": "vendorcontracts.create.field.message.contractDate"
          },
          {
            "name": "securityDeposit",
            "jsonPath": "securityDeposit",
            "label": "vendorcontracts.create.securityDeposit",
            "type": "number",
            "isDisabled": false,
            "patternErrorMsg": "vendorcontracts.create.field.message.securityDeposit"
          },
          {
            "name": "paymentAmount",
            "jsonPath": "paymentAmount",
            "label": "vendorcontracts.create.paymentAmount",
            "type": "number",
            "isDisabled": false,
            "patternErrorMsg": "vendorcontracts.create.field.message.paymentAmount"
          }
        ]
      }
    ],
    "result": {
      "header": [
	{
          "label": "vendorcontracts.create.vendorNo"
        },
        {
          "label": "vendorcontracts.search.result.contractNo"
        },
        {
          "label": "vendorcontracts.search.result.contractDate",
	  "isDate": true
        },
        {
          "label": "vendorcontracts.search.result.contractPeriodFrom",
	  "isDate": true
        },
        {
          "label": "vendorcontracts.search.result.contractPeriodTo",
          "isDate": true
        },
        {
          "label": "vendorcontracts.search.result.securityDeposit"
        },
        {
          "label": "vendorcontracts.search.result.paymentAmount"
        },
        {
          "label": "vendorcontracts.search.result.paymentTerms"
        },
        {
          "label": "vendorcontracts.search.result.remarks"
        }
      ],
      "values": [
	"vendor.name",
        "contractNo",
        "contractDate",
        "contractPeriodFrom",
        "contractPeriodTo",
        "securityDeposit",
        "paymentAmount",
        "paymentTerms.label",
        "remarks"
      ],
      "resultPath": "vendorContracts",
      "rowClickUrlUpdate": "/update/swm/vendorcontracts/{contractNo}",
      "rowClickUrlView": "/view/swm/vendorcontracts/{contractNo}"
    }
  },
  "swm.create": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "vendorContracts",
    "idJsonPath": "vendorContracts[0].contractNo",
    "groups": [
      {
        "name": "VendorContractDetails",
        "label": "vendorcontracts.create.group.title.VendorContractDetails",
        "fields": [
	   {  
	      "name":"vendor",
	      "jsonPath":"vendorContracts[0].vendor.vendorNo",
	      "label":"vendorcontracts.create.vendorNo",
	      "type":"singleValueList",
	      "isRequired":true,
	      "isDisabled":false,
	      "maxLength":265,
	      "minLength":1,
	      "patternErrorMsg":"",
	      "url":"/swm-services/vendors/_search?|$.vendors.*.vendorNo|$.vendors.*.name"
	  },
          {
            "name": "contractDate",
            "jsonPath": "vendorContracts[0].contractDate",
            "label": "vendorcontracts.create.contractDate",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "contractPeriodFrom",
            "jsonPath": "vendorContracts[0].contractPeriodFrom",
            "label": "vendorcontracts.create.contractPeriodFrom",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "contractPeriodTo",
            "jsonPath": "vendorContracts[0].contractPeriodTo",
            "label": "vendorcontracts.create.contractPeriodTo",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "securityDeposit",
            "jsonPath": "vendorContracts[0].securityDeposit",
            "label": "vendorcontracts.create.securityDeposit",
            "pattern": "",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "paymentAmount",
            "jsonPath": "vendorContracts[0].paymentAmount",
            "label": "vendorcontracts.create.paymentAmount",
            "pattern": "",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
	{
            "name": "paymentTerms",
            "jsonPath": "vendorContracts[0].paymentTerms.label",
            "label": "vendorcontracts.search.result.paymentTerms",
            "pattern": "",
            "type": "radio",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "values": [{"label":"Monthly", "value":"Monthly"},{"label":"BiMonthly", "value":"BiMonthly"},{"label":"Quarterly", "value":"Quarterly"},{"label":"Yearly", "value":"Yearly"}],
            "defaultValue":"Monthly"
          },
          {
            "name": "remarks",
            "jsonPath": "vendorContracts[0].remarks",
            "label": "vendorcontracts.create.remarks",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 500,
            "minLength": 15,
            "patternErrorMsg": ""
          }
        ]
      }
    ],
    "url": "/swm-services/vendorcontracts/_create",
    "tenantIdRequired": true
  },
  "swm.view": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "vendorContracts",
    "groups": [
      {
        "name": "VendorContractDetails",
        "label": "vendorcontracts.create.group.title.VendorContractDetails",
        "fields": [
          {
            "name": "contractNo",
            "jsonPath": "vendorContracts[0].contractNo",
            "label": "vendorcontracts.create.contractNo",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 128,
            "minLength": 6,
            "patternErrorMsg": ""
          },
	 {
            "name": "vendor",
            "jsonPath": "vendorContracts[0].vendor.name",
            "label": "vendorcontracts.create.vendorNo",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "contractDate",
            "jsonPath": "vendorContracts[0].contractDate",
            "label": "vendorcontracts.create.contractDate",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "contractPeriodFrom",
            "jsonPath": "vendorContracts[0].contractPeriodFrom",
            "label": "vendorcontracts.create.contractPeriodFrom",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "contractPeriodTo",
            "jsonPath": "vendorContracts[0].contractPeriodTo",
            "label": "vendorcontracts.create.contractPeriodTo",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "securityDeposit",
            "jsonPath": "vendorContracts[0].securityDeposit",
            "label": "vendorcontracts.create.securityDeposit",
            "pattern": "",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "paymentAmount",
            "jsonPath": "vendorContracts[0].paymentAmount",
            "label": "vendorcontracts.create.paymentAmount",
            "pattern": "",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
	{
            "name": "paymentTerms",
            "jsonPath": "vendorContracts[0].paymentTerms.label",
            "label": "vendorcontracts.search.result.paymentTerms",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "remarks",
            "jsonPath": "vendorContracts[0].remarks",
            "label": "vendorcontracts.create.remarks",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 500,
            "minLength": 15,
            "patternErrorMsg": ""
          }
        ]
      }
    ],
    "tenantIdRequired": true,
    "url": "/swm-services/vendorcontracts/_search?contractNo={contractNo}"
  },
  "swm.update": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "vendorContracts",
    "idJsonPath": "vendorContracts[0].contractNo",
    "groups": [
      {
        "name": "VendorContractDetails",
        "label": "vendorcontracts.create.group.title.VendorContractDetails",
        "fields": [
         {  
	      "name":"vendor",
	      "jsonPath":"vendorContracts[0].vendor.vendorNo",
	      "label":"vendorcontracts.create.vendorNo",
	      "type":"singleValueList",
	      "isRequired":true,
	      "isDisabled":false,
	      "maxLength":265,
	      "minLength":1,
	      "patternErrorMsg":"",
	      "url":"/swm-services/vendors/_search?|$.vendors.*.vendorNo|$.vendors.*.name"
	  },
          {
            "name": "contractDate",
            "jsonPath": "vendorContracts[0].contractDate",
            "label": "vendorcontracts.create.contractDate",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "contractPeriodFrom",
            "jsonPath": "vendorContracts[0].contractPeriodFrom",
            "label": "vendorcontracts.create.contractPeriodFrom",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "contractPeriodTo",
            "jsonPath": "vendorContracts[0].contractPeriodTo",
            "label": "vendorcontracts.create.contractPeriodTo",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "securityDeposit",
            "jsonPath": "vendorContracts[0].securityDeposit",
            "label": "vendorcontracts.create.securityDeposit",
            "pattern": "",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "paymentAmount",
            "jsonPath": "vendorContracts[0].paymentAmount",
            "label": "vendorcontracts.create.paymentAmount",
            "pattern": "",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
	 {
            "name": "paymentTerms",
            "jsonPath": "vendorContracts[0].paymentTerms.label",
            "label": "vendorcontracts.search.result.paymentTerms",
            "pattern": "",
            "type": "radio",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "values": [{"label":"Monthly", "value":"Monthly"},{"label":"BiMonthly", "value":"BiMonthly"},{"label":"Quarterly", "value":"Quarterly"},{"label":"Yearly", "value":"Yearly"}],
            "defaultValue":"Monthly"
          },
          {
            "name": "remarks",
            "jsonPath": "vendorContracts[0].remarks",
            "label": "vendorcontracts.create.remarks",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 500,
            "minLength": 15,
            "patternErrorMsg": ""
          }
        ]
      }
    ],
    "url": "/swm-services/vendorcontracts/_update",
    "tenantIdRequired": true,
    "searchUrl": "/swm-services/vendorcontracts/_search?contractNo={contractNo}"
  }
}
 export default dat;
