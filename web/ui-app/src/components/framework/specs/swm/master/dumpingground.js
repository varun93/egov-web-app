var dat = {
  'swm.search': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'DumpingGround',
    //url: '/swm-services/dumpingground/_search',
    url: '/egov-mdms-service/v1/_search',
    groups: [
      {
        name: 'DumpingGround',
        label: 'swm.dumpingground.search.title',
        fields: [
          {
            name: 'DumpingGroundName',
            jsonPath: 'name',
            label: 'swm.dumpingGround.create.dumpingGroundName',
            pattern: '',
            type: 'text',
            isDisabled: false,
            defaultValue: '',
            patternErrMsg: '',
            url: ''
          },
          {
            name: 'DumpingGroundULB',
            jsonPath: 'ulbs',
            label: 'swm.create.servicesOffered',
            pattern: '',
            type: 'text',
            isDisabled: false,
            defaultValue: '',
            patternErrMsg: '',
            url: ''
          }
        ],
      },
    ],
    result: {
      header: [
        {
          label: 'swm.dumpingGround.create.dumpingGroundName',
        },
        {
          label: 'swm.dumpingGround.create.ulbs',
        },
      ],
      values: [
        'name',
        'ulbs',
      ],
      resultPath: 'MdmsRes.swm.DumpingGround',
      rowClickUrlUpdate: '/update/swm/dumpingground/{code}',
      rowClickUrlView: '/view/swm/dumpingground/{code}',
      isMasterScreen: true
    },
  },
  'swm.create': {
    numCols: 3,
    useTimestamp: true,
    objectName: 'MasterMetaData',
    //idJsonPath: 'MasterMetaData.masterData[0].code',
    idJsonPath: 'MdmsRes.swm.DumpingGround[0].code',
    title: 'swm.create.page.title.dumpingGround',
    groups: [

      {
        name: 'LocationDetails',
        label: 'swm.collectionpoints.create.group.title.LocationDetails',
        jsonPath: "MasterMetaData.masterData[0].siteDetails.location",
        fields: [
          {
            "type": "boundary",
            "label": "",
            "hierarchyType": "REVENUE",
            "jsonPath": "MasterMetaData.masterData[0].siteDetails.location.code",
            "isRequired": false,
            "patternErrorMsg": "",
            "multiple": true,
            "fullWidth": true,
          }
        ],
      },
      {
        name: 'ULBs',
        label: 'swm.dumpingGround.create.ulbs',
        fields: [
          {
            name: 'ulbs',
            label: 'swm.create.ulbNames',
            jsonPath: 'MasterMetaData.masterData[0].ulbs',
            type: 'multiValueList',
            pattern: '',
            isRequired: true,
            isDisabled: false,
            maxLength: '',
            url: '/egov-mdms-service/v1/_get?&moduleName=tenant&masterName=tenants|$..tenants.*.code|$..tenants.*.name',
            minLength: '',
            patternErrMsg: '',
            // mdms: {
            //   "moduleName": "swm",
            //   "masterName": "DumpingGround",
            //   "filter": "",
            //   "key": "$.ulbs.[*].code",
            //   "value": "$.ulbs.[*].name",
            // },
            hasATOAATransform: true,
            aATransformInfo: {
              to: 'MasterMetaData.masterData[0].ulbs',
              key: 'code'
            }
          },

        ]
      },

      {
        name: 'BankGuaranteeDetails',
        label: 'swm.create.page.title.bankGuaranteeDetails',
        fields: [
          {
            name: 'mpcbAuthorisation',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.mpcbAuthorisation',
            label: 'swm.dumpingGround.create.mpcbAuthorisation',
            pattern: '',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            defaultValue: false,
            url: '',
          },

          {
            name: 'bankGuarantee',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.bankGuarantee',
            label: 'swm.dumpingGround.create.bankGuarantee',
            pattern: '',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrorMsg: '',
            url: '',
               showHideFields: [
              {
                ifValue: true,
                hide: [],
                show: [
                  {
                    name: 'bankName',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'bankValidityFrom',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'bankValidityTo',
                    isGroup: false,
                    isField: true,
                  },
                ],
              },
            ],
          },

          {
            name: 'dummy',
            jsonPath: '',
            label: 'swm.dumpingGround.create.dummy',
            pattern: '',
            type: 'textArea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dummy',
            jsonPath: '',
            label: 'swm.dumpingGround.create.dummy',
            pattern: '',
            type: 'textArea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'bankName',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.bankName',
            label: 'swm.dumpingGround.create.bankName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            hide: true,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'bankValidityFrom',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.bankValidityFrom',
            label: 'swm.dumpingGround.create.bankValidityFrom',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            hide: true,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'bankValidityTo',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.bankValidityTo',
            label: 'swm.dumpingGround.create.bankValidityTo',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            hide: true,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },
        ]
      },
      {
        name: 'DumpingGroundDetails',
        label: 'swm.dumpingGround.create.group.title.DumpingGroundDetails',
        fields: [
          {
            name: 'dumpingGroundName',
            jsonPath: 'MasterMetaData.masterData[0].name',
            label: 'swm.dumpingGround.create.dumpingGroundName',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dumpingGroundArea',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.area',
            label: 'swm.dumpingGround.create.dumpingGroundArea',
            pattern: '^\\b[0-9]\\b|\\b([1-4][0-9])\\b|\\b50\\b$',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            patternErrMsg: 'Invalid Value',
            url: '',
          },

          {
            name: 'dumpingGroundCapacity',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.capacity',
            label: 'swm.dumpingGround.create.dumpingGroundCapacity',
            pattern: '^([1-9][0-9]{0,3}|10000|0|[1-4][0-9]{0,4}|50000)$',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: '5',
            minLength: '1',
            patternErrMsg: 'Invalid Value',
            url: '',
          },

          {
            name: 'dumpingGroundAddress',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.address',
            label: 'swm.dumpingGround.create.dumpingGroundAddress',
            pattern: '([a-zA-Z0-9_-\\s]){15,500}$',
            type: 'textarea',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 15,
            fullWidth: true,
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dumpingGroundLatitude',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.latitude',
            label: 'swm.dumpingGround.create.dumpingGroundLatitude',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dumpingGroundLongitude',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.longitude',
            label: 'swm.dumpingGround.create.dumpingGroundLongitude',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dumpingGroundisProcessingSite',
            jsonPath: 'MasterMetaData.masterData[0].isProcessingSite',
            label: 'swm.dumpingGround.create.isProcessingSite',
            pattern: '',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
            showHideFields: [
              {
                ifValue: true,
                show: [],
                hide: [
                  {
                    name: 'dumpingGroundProcessingPlant',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'dumpingGroundDistance',
                    isGroup: false,
                    isField: true,
                  },
                ],
              },{
                ifValue: false,
                hide: [],
                show: [
                  {
                    name: 'dumpingGroundProcessingPlant',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'dumpingGroundDistance',
                    isGroup: false,
                    isField: true,
                  },
                ],
              },
            ],
          },
          {
            name: 'dumpingGroundProcessingPlant',
            jsonPath: 'MasterMetaData.masterData[0].processingSite.code',
            label: 'swm.dumpingGround.create.dumpingGroundProcessingPlant',
            pattern: '',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrorMsg: '',
            url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=ProcessingSite|$..ProcessingSite.*.code|$..ProcessingSite.*.name'
          },

          {
            name: 'dumpingGroundDistance',
            jsonPath: 'MasterMetaData.masterData[0].distanceFromProcessingSite',
            label: 'swm.dumpingGround.create.distance',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

        ]
      },
      {
        name: 'wasteType',
        label: 'swm.create.page.title.wasteType',
        fields: [
          {
            name: 'WasteType',
            label: '',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.wasteTypes',
            type: 'multiValueList',
            pattern: '^null|$',
            isRequired: true,
            isDisabled: false,
            maxLength: 128,
            url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=WasteType|$..code|$..name',
            minLength: 1,
            patternErrMsg: 'may not be null',
            hasATOAATransform: true,
            aATransformInfo: {
              to: 'MasterMetaData.masterData[0].siteDetails.wasteTypes',
              key: 'code'
            }
          },
        ]
      },

      {
        name: 'HideGroup',
        hide: true,
        fields: [
          {
            name: 'tenantId',
            jsonPath: 'MasterMetaData.masterData[0].tenantId',
            defaultValue: localStorage.getItem("tenantId"),
            isRequired: true,
            type: 'text',
            hide: true
          },
          {
            name: 'moduleName',
            jsonPath: 'MasterMetaData.moduleName',
            defaultValue: 'swm',
            isRequired: true,
            type: 'text',
            hide: true
          },
          {
            name: 'masterName',
            jsonPath: 'MasterMetaData.masterName',
            defaultValue: 'DumpingGround',
            isRequired: true,
            type: 'text',
            hide: true
          },
          {
            name: 'code',
            jsonPath: 'MasterMetaData.masterData[0].code',
            defaultValue: 'DumpingGround-' + new Date().getTime(),
            isRequired: true,
            type: 'text',
            hide: true
          },
        ]
      }
    ],
    url: 'egov-mdms-create/v1/_create',
    tenantIdRequired: true,
  },
  'swm.view': {
    numCols: 3,
    useTimestamp: true,
    objectName: 'DumpingGround',
    groups: [
      {
        name: 'LocationDetails',
        label: 'swm.collectionpoints.create.group.title.LocationDetails',
        fields: [
          {
            "type": "boundary",
            "label": "",
            "hierarchyType": "REVENUE",
            "jsonPath": "MdmsRes.swm.DumpingGround[0].siteDetails.location.code",
            "isRequired": false,
            "patternErrorMsg": "",
            "multiple": true,
            "fullWidth": true,
          }
        ],
      },
      {
        name: 'ULBs',
        label: 'swm.dumpingGround.create.ulbs',
        fields: [
          {
            name: 'ulbs',
            label: 'swm.create.ulbNames',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].ulbs',
            type: 'multiValueList',
            pattern: '',
            isRequired: false,
            isDisabled: false,
            maxLength: '',
            minLength: '',
            url: '/egov-mdms-service/v1/_get?&moduleName=tenant&masterName=tenants|$..code|$..name',
            patternErrMsg: '',
            // mdms: {
            //   "moduleName": "swm",
            //   "masterName": "DumpingGround",
            //   "filter": "",
            //   "key": "$.ulbs.[*].code",
            //   "value": "$.ulbs.[*].name",
            // },
            hasATOAATransform: true,
            aATransformInfo: {
              to: 'MdmsRes.swm.DumpingGround[0].ulbs.code',
              key: 'code'
            }
          },

        ]
      },
      {
        name: 'BankGuaranteeDetails',
        label: 'swm.create.page.title.bankGuaranteeDetails',
        fields: [
          {
            name: 'mpcbAuthorisation',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.mpcbAuthorisation',
            label: 'swm.dumpingGround.create.mpcbAuthorisation',
            pattern: '',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'bankGuarantee',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.bankGuarantee',
            label: 'swm.dumpingGround.create.bankGuarantee',
            pattern: '',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrorMsg: '',
            url: '',
              showHideFields: [
              {
                ifValue: true,
                hide: [],
                show: [
                  {
                    name: 'bankName',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'bankValidityFrom',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'bankValidityTo',
                    isGroup: false,
                    isField: true,
                  },
                ],
              },
            ],
          },
          {
            name: 'bankName',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.bankName',
            label: 'swm.dumpingGround.create.bankName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            hide: true,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },
          {
            name: 'bankValidityFrom',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.bankValidityFrom',
            label: 'swm.dumpingGround.create.bankValidityFrom',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            hide: true,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },
          {
            name: 'bankValidityTo',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.bankValidityTo',
            label: 'swm.dumpingGround.create.bankValidityTo',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            hide: true,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },
        ]
      },
      {
        name: 'DumpingGroundDetails',
        label: 'swm.dumpingGround.create.group.title.DumpingGroundDetails',
        fields: [
          {
            name: 'dumpingGroundName',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].name',
            label: 'swm.dumpingGround.create.dumpingGroundName',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },
          {
            name: 'dumpingGroundArea',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.area',
            label: 'swm.dumpingGround.create.dumpingGroundArea',
            pattern: '^\\b[0-9]\\b|\\b([1-4][0-9])\\b|\\b50\\b$',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',            
            patternErrMsg: 'Invalid Value',
            url: '',
          },
          {
            name: 'dumpingGroundCapacity',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.capacity',
            label: 'swm.dumpingGround.create.dumpingGroundCapacity',
            pattern: '^([1-9][0-9]{0,3}|10000|0|[1-4][0-9]{0,4}|50000)$',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            maxLength: '5',
            minLength: '1',
            defaultValue: '',
            patternErrMsg: 'Invalid Value',
            url: '',
          },
          {
            name: 'dumpingGroundAddress',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.address',
            label: 'swm.dumpingGround.create.dumpingGroundAddress',
            pattern: '([a-zA-Z0-9_-\\s]){15,500}$',
            type: 'textarea',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 15,
            fullWidth: true,
            patternErrMsg: '',
            url: '',
          },
          {
            name: 'dumpingGroundLatitude',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.latitude',
            label: 'swm.dumpingGround.create.dumpingGroundLatitude',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },
          {
            name: 'dumpingGroundLongitude',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.longitude',
            label: 'swm.dumpingGround.create.dumpingGroundLongitude',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },
          {
            name: 'dumpingGroundisProcessingSite',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].isProcessingSite',
            label: 'swm.dumpingGround.create.isProcessingSite',
            pattern: '',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
            /*showHideFields: [
              {
                ifValue: false,
                hide: [],
                show: [
                  {
                    name: 'dumpingGroundProcessingPlant',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'dumpingGroundDistance',
                    isGroup: false,
                    isField: true,
                  },
                ],
              },
            ],*/
            showHideFields: [
              {
                ifValue: true,
                show: [],
                hide: [
                  {
                    name: 'dumpingGroundProcessingPlant',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'dumpingGroundDistance',
                    isGroup: false,
                    isField: true,
                  },
                ],
              },
            ],
          },

          {
            name: 'dumpingGroundAddress',
            jsonPath: '',
            label: 'swm.dumpingGround.create.dumpingGroundAddress',
            pattern: '([a-zA-Z0-9_-\\s]){15,500}$',
            type: 'textArea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            fullWidth: true,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'dumpingGroundProcessingPlant',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].processingSite.code',
            label: 'swm.dumpingGround.create.dumpingGroundProcessingPlant',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            //hide: true,
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dumpingGroundDistance',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].distanceFromProcessingSite',
            label: 'swm.dumpingGround.create.distance',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            //hide: true,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

        ]
      },
      {
        name: 'wasteType',
        label: 'swm.create.page.title.wasteType',
        fields: [
          {
            name: 'WasteType',
            label: '',
            jsonPath: 'MdmsRes.swm.DumpingGround[0].siteDetails.wasteTypes',
            type: 'multiValueList',
            pattern: '^null|$',
            isRequired: true,
            isDisabled: false,
            maxLength: 128,
            minLength: 1,
            url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=WasteType|$..code|$..name',
            patternErrMsg: 'may not be null',
            hasATOAATransform: true,
            aATransformInfo: {
              to: 'MdmsRes.swm.DumpingGround[0].siteDetails.wasteTypes',
              key: 'code'
            }
          },
        ]
      },

      /*{
        name: 'HideGroup',
        hide: true,
        fields: [
            {
              name: 'tenantId',
              jsonPath: 'MasterMetaData.masterData[0].tenantId',
              defaultValue: localStorage.getItem("tenantId"),
              isRequired : true,
              type: 'text',
              hide: true
            },
            {
              name: 'moduleName',
              jsonPath: 'MasterMetaData.moduleName',
              defaultValue: 'swm',
              isRequired : true,
              type: 'text',
              hide: true
            },
            {
              name: 'masterName',
              jsonPath: 'MasterMetaData.masterName',
              defaultValue: 'DumpingGround',
              isRequired : true,
              type: 'text',
              hide: true
            },
            {
              name: 'code',
              jsonPath: 'MasterMetaData.masterData[0].code',
              defaultValue: 'DumpingGround-' + new Date().getTime(),
              isRequired : true,
              type: 'text',
              hide: true
            },
        ]
      }*/
    ],
    tenantIdRequired: true,
    url: '/egov-mdms-service/v1/_search?code={code}',
  },
  'swm.update': {
    numCols: 3,
    useTimestamp: true,
    objectName: 'DumpingGround',
    idJsonPath: 'MasterMetaData.masterData[0].code',
    groups: [
      
      {
        name: 'LocationDetails',
        label: 'swm.collectionpoints.create.group.title.LocationDetails',
        fields: [
          {
            "type": "boundary",
            "label": "",
            "hierarchyType": "REVENUE",
            "jsonPath": "MasterMetaData.masterData[0].siteDetails.location.code",
            "isRequired": false,
            "patternErrorMsg": "",
            "multiple": true,
            "fullWidth": true,
          }
        ],
      },
      {
        name: 'ULBs',
        label: 'swm.dumpingGround.create.ulbs',
        fields: [
          {
            name: 'ulbs',
            label: 'swm.create.ulbNames',
            jsonPath: 'MasterMetaData.masterData[0].ulbs',
            type: 'multiValueList',
            pattern: '',
            isRequired: true,
            isDisabled: false,
            maxLength: '',
            url: '/egov-mdms-service/v1/_get?&moduleName=tenant&masterName=tenants|$..tenants.*.code|$..tenants.*.name',
            minLength: '',
            patternErrMsg: '',
            // mdms: {
            //   "moduleName": "swm",
            //   "masterName": "DumpingGround",
            //   "filter": "",
            //   "key": "$.ulbs.[*].code",
            //   "value": "$.ulbs.[*].name",
            // },
            hasATOAATransform: true,
            aATransformInfo: {
              to: 'MasterMetaData.masterData[0].ulbs',
              key: 'code'
            }
          },

        ]
      },
      {
        name: 'BankGuaranteeDetails',
        label: 'swm.create.page.title.bankGuaranteeDetails',
        fields: [
          {
            name: 'mpcbAuthorisation',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.mpcbAuthorisation',
            label: 'swm.dumpingGround.create.mpcbAuthorisation',
            pattern: '',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            defaultValue: false,
            url: ''
          },

          {
            name: 'bankGuarantee',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.bankGuarantee',
            label: 'swm.dumpingGround.create.bankGuarantee',
            pattern: '',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrorMsg: '',
            url: '',
               showHideFields: [
              {
                ifValue: true,
                hide: [],
                show: [
                  {
                    name: 'bankName',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'bankValidityFrom',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'bankValidityTo',
                    isGroup: false,
                    isField: true,
                  },
                ],
              },
            ],
          },

          {
            name: 'dummy',
            jsonPath: '',
            label: 'swm.dumpingGround.create.dummy',
            pattern: '',
            type: 'textArea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dummy',
            jsonPath: '',
            label: 'swm.dumpingGround.create.dummy',
            pattern: '',
            type: 'textArea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'bankName',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.bankName',
            label: 'swm.dumpingGround.create.bankName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            hide: true,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'bankValidityFrom',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.bankValidityFrom',
            label: 'swm.dumpingGround.create.bankValidityFrom',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            hide: true,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'bankValidityTo',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.bankValidityTo',
            label: 'swm.dumpingGround.create.bankValidityTo',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            hide: true,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },
        ]
      },
      {
        name: 'DumpingGroundDetails',
        label: 'swm.dumpingGround.create.group.title.DumpingGroundDetails',
        fields: [
          {
            name: 'dumpingGroundName',
            jsonPath: 'MasterMetaData.masterData[0].name',
            label: 'swm.dumpingGround.create.dumpingGroundName',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dumpingGroundArea',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.area',
            label: 'swm.dumpingGround.create.dumpingGroundArea',
            pattern: '^\\b[0-9]\\b|\\b([1-4][0-9])\\b|\\b50\\b$',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: 'Invalid Value',
            url: '',
          },

          {
            name: 'dumpingGroundCapacity',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.capacity',
            label: 'swm.dumpingGround.create.dumpingGroundCapacity',
            pattern: '^([1-9][0-9]{0,3}|10000|0|[1-4][0-9]{0,4}|50000)$',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            patternErrMsg: 'Invalid Value',
            url: '',
          },

          {
            name: 'dumpingGroundAddress',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.address',
            label: 'swm.dumpingGround.create.dumpingGroundAddress',
            pattern: '([a-zA-Z0-9_-\\s]){15,500}$',
            type: 'textarea',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 15,
            fullWidth: true,
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dumpingGroundLatitude',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.latitude',
            label: 'swm.dumpingGround.create.dumpingGroundLatitude',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dumpingGroundLongitude',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.longitude',
            label: 'swm.dumpingGround.create.dumpingGroundLongitude',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

          {
            name: 'dumpingGroundisProcessingSite',
            jsonPath: 'MasterMetaData.masterData[0].isProcessingSite',
            label: 'swm.dumpingGround.create.isProcessingSite',
            pattern: '',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
            showHideFields: [
              {
                ifValue: true,
                show: [],
                hide: [
                  {
                    name: 'dumpingGroundProcessingPlant',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'dumpingGroundDistance',
                    isGroup: false,
                    isField: true,
                  },
                ],
              },{
                ifValue: false,
                hide: [],
                show: [
                  {
                    name: 'dumpingGroundProcessingPlant',
                    isGroup: false,
                    isField: true,
                  },
                  {
                    name: 'dumpingGroundDistance',
                    isGroup: false,
                    isField: true,
                  },
                ],
              },
            ],
          },

          {
            name: 'dumpingGroundProcessingPlant',
            jsonPath: 'MasterMetaData.masterData[0].processingSite.code',
            label: 'swm.dumpingGround.create.dumpingGroundProcessingPlant',
            pattern: '',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrorMsg: '',
            url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=ProcessingSite|$..ProcessingSite.*.code|$..ProcessingSite.*.name'
          },

          {
            name: 'dumpingGroundDistance',
            jsonPath: 'MasterMetaData.masterData[0].distanceFromProcessingSite',
            label: 'swm.dumpingGround.create.distance',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: '',
            minLength: '',
            patternErrMsg: '',
            url: '',
          },

        ]
      },
      {
        name: 'wasteType',
        label: 'swm.create.page.title.wasteType',
        fields: [
          {
            name: 'WasteType',
            label: '',
            jsonPath: 'MasterMetaData.masterData[0].siteDetails.wasteTypes',
            type: 'multiValueList',
            pattern: '^null|$',
            isRequired: true,
            isDisabled: false,
            maxLength: 128,
            url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=WasteType|$..code|$..name',
            minLength: 1,
            patternErrMsg: 'may not be null',
            hasATOAATransform: true,
            aATransformInfo: {
              to: 'MasterMetaData.masterData[0].siteDetails.wasteTypes',
              key: 'code'
            }
          },
        ]
      },

      {
        name: 'HideGroup',
        hide: true,
        fields: [
          {
            name: 'tenantId',
            jsonPath: 'MasterMetaData.masterData[0].tenantId',
            defaultValue: localStorage.getItem("tenantId"),
            isRequired: true,
            type: 'text',
            hide: true
          },
          {
            name: 'moduleName',
            jsonPath: 'MasterMetaData.moduleName',
            defaultValue: 'swm',
            isRequired: true,
            type: 'text',
            hide: true
          },
          {
            name: 'masterName',
            jsonPath: 'MasterMetaData.masterName',
            defaultValue: 'DumpingGround',
            isRequired: true,
            type: 'text',
            hide: true
          },
          {
            name: 'code',
            jsonPath: 'MasterMetaData.masterData[0].code',
            defaultValue: 'DumpingGround-' + new Date().getTime(),
            isRequired: true,
            type: 'text',
            hide: true
          },
        ]
      }
    ],
    url: '/egov-mdms-create/v1/_update',
    tenantIdRequired: true,
    isMDMSScreen: true,
    searchUrl: '/egov-mdms-service/v1/_search?code={code}',
  },
};
export default dat;