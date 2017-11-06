var dat ={
  "legal.update": {
    "numCols": 4,
    title:"hearingdetails.update.document.title",
    "useTimestamp": true,
    "objectName": "cases",
    "searchUrl": "/lcms-services/legalcase/case/_search?code={id}",
    "groups": [
      {
        "name": "CaseDetails",
        "label": "legal.create.group.title.CaseDetails",
        "fields": [
          {
            "name": "caseNo",
            "jsonPath": "cases[0].summon.caseNo",
            "label": "legal.create.caseNo",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            name: "caseType",
            jsonPath: "cases[0].summon.caseType.code",
            label: "legal.create.caseType",
            type: "singleValueList",
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: "",
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=caseType|$..code|$..name"
          },
          {
            "name": "caseCategory",
            "jsonPath": "cases[0].summon.caseCategory.name",
            "label": "legal.create.year",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
         {
            name: "courtName",
            jsonPath: "cases[0].summon.courtName.code",
            label: "legal.create.courtName",
            type: "singleValueList",
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: "",
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=court|$..code|$..name"
          },
          {
            "name": "caseDate",
            "jsonPath": "cases[0].caseRegistrationDate",
            "label": "legal.create.caseRegistrationDate",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            name: "departmentName",
            jsonPath: "cases[0].summon.departmentName.id",
            label: "legal.create.departmentName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: "",
            url: "/egov-common-masters/departments/_search?|$..id|$..name",
             depedants: [
              {
                jsonPath: "cases[0].departmentPerson",
                type: "dropDown",
                pattern:
                  "/hr-employee/employees/_search?tenantId=default&departmentId={cases[0].summon.departmentName.id}|$..name|$..name"
              }
            ]
          },
          {
            name: "departmentConcernedPerson",
            jsonPath: "cases[0].departmentPerson",
            label: "caseRegistration.create.departmentConcernedPerson",
            type: "singleValueList",
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            "name": "hearingTime",
            "jsonPath": "cases[0].summon.hearingTime",
            "label": "legal.create.hearingTime",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "hearingDate",
            "jsonPath": "cases[0].summon.hearingDate",
            "label": "legal.create.hearingDate",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "hearingDetails",
        "label": "legal.create.group.title.hearingDetails",
        "fields": [
          {
            "name": "caseStatus",
            "jsonPath": "cases[0].hearingDetails.caseStatus",
            "label": "legal.create.caseStatus",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": "",
            url:"/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=caseStatus|$..code|$..name"
          },
          {
            "name": "caseFinalDecision",
            "jsonPath": "cases[0].hearingDetails.caseFinalDecision",
            "label": "legal.create.caseFinalDecision",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "caseJudgeMent",
            "jsonPath": "cases[0].hearingDetails.caseJudgeMent",
            "label": "legal.create.caseJudgement",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "nextHearingDate",
            "jsonPath": "cases[0].hearingDetails.nextHearingDate",
            "label": "legal.create.nextHearingDate",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "nextHearingDate",
            "jsonPath": "cases[0].hearingDetails.nextHearingTime",
            "label": "legal.create.nextHearingTime",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "attendeeDetails",
        "label": "legal.create.group.title.attendeeDetails",
        "fields": [
          {
            "name": "attendeeDetails",
            "type": "tableList",
            "jsonPath": "cases[0].hearingDetails.attendees",
            "tableList": {
              "header": [
                {
                  "label": "legal.create.attendeeName"
                },
                {
                  "label": "legal.create.gender"
                },
                {
                  "label": "legal.create.mobileNo"
                },
                {
                  "label": "legal.create.address"
                }
              ],
              "values": [
                {
                  "name": "attendeeName",
                  "pattern": "",
                  "type": "text",
                  "jsonPath": "cases[0].hearingDetails.attendees[0].name",
                  "isRequired": true,
                  "isDisabled": false,
                  "url": ""
                },
                {
                  "name": "gender",
                  "jsonPath": "cases[0].hearingDetails.attendees[0].gender",
                  "type": "radio",
                  "isRequired": true,
                  "isDisabled": false,
                  "patternErrorMsg": "",
                  "values": [
                    {
                      "label": "legal.create.male",
                      "value": true
                    },
                    {
                      "label": "legal.create.female",
                      "value": false
                    }
                  ]
                },
                {
                  "name": "mobileNo",
                  "pattern": "",
                  "type": "text",
                  "jsonPath": "cases[0].hearingDetails.attendees[0].mobileNumber",
                  "isRequired": true,
                  "isDisabled": false
                },
                {
                  "name": "address",
                  "pattern": "",
                  "type": "text",
                  "jsonPath": "cases[0].hearingDetails.attendees[0].address",
                  "isRequired": true,
                  "isDisabled": false
                }
              ]
            }
          }
        ]
      },
      {
        "name": "judgeDetails",
        "label": "legal.create.group.title.judgeDetails",
        "fields": [
          {
            "type": "tableList",
            "autoIndexing": true,
            "jsonPath": "cases[0].hearingDetails.judges",
            "tableList": {
              "header": [
                {
                  "label": "legal.create.judgeName"
                },
                {
                  "label": "legal.create.gender"
                },
                {
                  "label": "legal.create.mobileNo"
                },
                {
                  "label": "legal.create.address"
                }
              ],
              "values": [
                {
                  "name": "attendeeName-index",
                  "pattern": "",
                  "type": "text",
                  "jsonPath": "cases[0].hearingDetails[index].judges.name",
                  "isRequired": true,
                  "isDisabled": false,
                  "url": ""
                },
                {
                  "name": "gender-index",
                  "jsonPath": "cases[0].hearingDetails[index].judges.gender",
                  "type": "radio",
                  "isRequired": true,
                  "isDisabled": false,
                  "patternErrorMsg": "",
                  "values": [
                    {
                      "label": "legal.create.male",
                      "value": true
                    },
                    {
                      "label": "legal.create.female",
                      "value": false
                    }
                  ]
                },
                {
                  "name": "mobileNo-index",
                  "pattern": "",
                  "type": "text",
                  "jsonPath": "cases[0].hearingDetails[index].judges.mobileNumber",
                  "isRequired": true,
                  "isDisabled": false
                },
                {
                  "name": "address-index",
                  "pattern": "",
                  "type": "text",
                  "jsonPath": "cases[0].hearingDetails[index].judges.address",
                  "isRequired": true,
                  "isDisabled": false
                }
              ]
            }
          }
        ]
      }
    ],
    "url": "/lcms-services/legalcase/hearingdetails/_create",
    "tenantIdRequired": true
  }
}
   export default dat;