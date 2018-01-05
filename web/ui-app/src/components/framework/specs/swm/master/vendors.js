// var serviceProvided = {
//   name: 'serviceProvidedMain',
//   version: 'v1',
//   level: 0,
//   hide: false,
//   groups: [
//     {
//       name: 'serviceProvided',
//       multiple: false,
//       fields: [
//         {
//           name: 'ChecBxGrp',
//           jsonPath: ['vendors[0].supplier.abc','vendors[0].supplier.abc2','vendors[0].supplier.abc3','vendors[0].supplier.abc4'],
//           label: ['vendors[0].supplier.abc','vendors[0].supplier.abc2','vendors[0].supplier.abc3','vendors[0].supplier.abc4'],
//           pattern: '',
//           type: 'checkBoxGroup',
//           isRequired: false,
//           isDisabled: false,
//           defaultValue: false,
//           requiredErrMsg: '',
//           patternErrMsg: '',
//           colSpan:6
//         }
//       ],
//     },
//   ],
// };


var dat = {
  'swm.search': {
    numCols: 3,
    useTimestamp: true,
    objectName: '',
    url: '/swm-services/vendors/_search',
    groups: [
      {
        name: 'search',
        label: 'swm.search.vendor.title',
        fields: [
          {
            name: 'name',
            jsonPath: 'name',
            label: 'swm.create.supplier.name',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: 'swm.create.field.message.name',
          },
          {
            name: 'vendorNo',
            jsonPath: 'vendorNo',
            label: 'swm.create.vendorNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 128,
            minLength: 1,
            patternErrorMsg: 'swm.create.field.message.vendorNo',
          },
          {
            name: 'registrationNo',
            jsonPath: 'registrationNo',
            label: 'swm.create.registrationNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: 'swm.create.field.message.registrationNo',
          }
        ],
      },
    ],
    result: {
      header: [
        {label: 'swm.create.supplier.name'},
        {label: 'swm.create.vendorNo'},
        {label: 'swm.create.registrationNo'}
      ],
      values: ['name', 'vendorNo', 'registrationNo'/*, 'servicesOffered.name'*/],
      resultPath: 'vendors',
      rowClickUrlUpdate: '/update/swm/vendors/{vendorNo}',
      rowClickUrlView: '/view/swm/vendors/{vendorNo}',
    },
  },
  'swm.create': {
    numCols: 3,
    useTimestamp: true,
    objectName: 'vendors',
    idJsonPath: 'vendors[0].vendorNo',
    groups: [
      // {
      //   name: 'vendors',
      //   label: 'swm.create.group.title.vendors',
      //   fields: [
      //     {
      //       name: 'vendorNo',
      //       jsonPath: 'vendors[0].vendorNo',
      //       label: 'swm.create.vendorNo',
      //       pattern: '',
      //       type: 'text',
      //       isRequired: false,
      //       isDisabled: false,
      //       defaultValue: '',
      //       maxLength: 128,
      //       minLength: 1,
      //       patternErrorMsg: '',
      //     },
      //   ],
      // },
      {
        name: 'VendorDetails',
        label: 'swm.create.group.title.VendorDetails',
        fields: [
          {
            name: 'name',
            jsonPath: 'vendors[0].name',
            label: 'swm.create.supplier.name',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'mobileNo',
            jsonPath: 'vendors[0].supplier.mobileNo',
            label: 'swm.create.supplier.mobileNo',
            pattern: '^([a-zA-Z0-9_-\\s]){10}$',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 10,
            minLength: 10,
            patternErrorMsg: 'length must be between 10 and 10',
          },
          {
            name: 'registrationNo',
            jsonPath: 'vendors[0].registrationNo',
            label: 'swm.create.registrationNo',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'contactNo',
            jsonPath: 'vendors[0].supplier.contactNo',
            label: 'swm.create.supplier.contactNo',
            pattern: '^([a-zA-Z0-9_-\\s]){10}$',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 10,
            minLength: 10,
            patternErrorMsg: 'length must be between 10 and 10',
          },
          {
            name: 'email',
            jsonPath: 'vendors[0].supplier.email',
            label: 'swm.create.supplier.email',
            pattern: '',
            type: 'email',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 100,
            minLength: 6,
            patternErrorMsg: '',
          },
          {
            name: 'faxNumber',
            jsonPath: 'vendors[0].supplier.faxNumber',
            label: 'swm.create.supplier.faxNumber',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 10,
            minLength: 10,
            patternErrorMsg: '',
          },
          {
            name: 'tinNumber',
            jsonPath: 'vendors[0].supplier.tinNumber',
            label: 'swm.create.supplier.tinNumber',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'address',
            jsonPath: 'vendors[0].supplier.address',
            label: 'swm.create.supplier.address',
            pattern: '([a-zA-Z0-9_-\\s]){10,500}$',
            type: 'textarea',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            patternErrorMsg: 'length must be between 10 and 500',
          },
          {
            name: 'gst',
            jsonPath: 'vendors[0].supplier.gst',
            label: 'swm.create.supplier.gst',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
        ],
      },
      {
        name: 'agreementCopyDetails',
        label: 'swm.vendors.create.group.title.agreementCopyDetails',
        fields: [
          {
            name: 'uploadAgreementCopy',
            jsonPath: 'vendors[0].agreementDocument.fileStoreId',
            label: 'swm.vendor.create.agreement.details',
            type: 'singleFileUpload',
            pathToArray: 'documentTypes',
            displayNameJsonPath: 'name',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
        ],
      },

      {
        name: 'LocationDetails',
        multiple:true,
        label: 'swm.collectionpoints.create.group.title.LocationDetails',
        jsonPath: "vendors[0].servicedLocations",
         "fields": [
          {
            "type": "boundary",
            "label": "",
            "hierarchyType": "REVENUE",
            "jsonPath": "vendors[0].servicedLocations[0].code",
            "isRequired": false,
            "patternErrorMsg": "",
            "multiple": true,
            "fullWidth": true,
          }
        ]
        // fields: [
        //       {
        //         name: 'Ward',
        //         jsonPath: 'vendors[0].servicedLocations[0].ward',
        //         label: 'swm.collectionpoints.create.ward',
        //         type: 'singleValueList',
        //         isRequired: true,
        //         isDisabled: false,
        //         maxLength: 128,
        //         url:
        //           'egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?tenantId=default&boundaryTypeName=Ward&hierarchyTypeName=REVENUE|$.Boundary.*.id|$.Boundary.*.name',
        //         minLength: 1,
        //         patternErrorMsg: '',
        //         depedants: [
        //           {
        //             jsonPath: 'vendors[0].servicedLocations[0].zone',
        //             type: 'dropDown',
        //             pattern:
        //               'egov-location/boundarys/childLocationsByBoundaryId?tenantId=default&boundaryId={vendors[0].servicedLocations[0].ward}|$.Boundary.*.id|$.Boundary.*.name',
        //           },
        //         ],
        //       },
        //       {
        //         name: 'Zone',
        //         jsonPath: 'vendors[0].servicedLocations[0].zone',
        //         label: 'swm.collectionpoints.create.zone',
        //         type: 'singleValueList',
        //         isRequired: true,
        //         isDisabled: false,
        //         maxLength: 128,
        //         minLength: 1,
        //         patternErrorMsg: '',
        //         depedants: [
        //           {
        //             jsonPath: 'vendors[0].servicedLocations[0].block',
        //             type: 'dropDown',
        //             pattern:
        //               'egov-location/boundarys/childLocationsByBoundaryId?tenantId=default&boundaryId={vendors[0].servicedLocations[0].zone}|$.Boundary.*.id|$.Boundary.*.name',
        //           },
        //         ],
        //       },
        //       {
        //         name: 'Road/Street',
        //         jsonPath: 'vendors[0].servicedLocations[0].block',
        //         label: 'swm.collectionpoints.create.block',
        //         type: 'singleValueList',
        //         isRequired: true,
        //         isDisabled: false,
        //         maxLength: 128,
        //         minLength: 1,
        //         patternErrorMsg: '',
        //         depedants: [
        //           {
        //             jsonPath: 'vendors[0].servicedLocations[0].code',
        //             type: 'dropDown',
        //             pattern:
        //               'egov-location/boundarys/childLocationsByBoundaryId?tenantId=default&boundaryId={vendors[0].servicedLocations[0].block}|$.Boundary.*.id|$.Boundary.*.name',
        //           },
        //         ],
        //       },
        //       {
        //         name: 'Colony',
        //         jsonPath: 'vendors[0].servicedLocations[0].code',
        //         label: 'swm.collectionpoints.create.colony',
        //         type: 'singleValueList',
        //         isRequired: true,
        //         isDisabled: false,
        //         maxLength: 128,
        //         minLength: 1,
        //         patternErrorMsg: '',
        //       },
        //   ],
      },
      {
        name: 'ServicesOffered',
        label: 'swm.create.servicesOffered',
        // children: [serviceProvided],
        fields: [
          // {
          //   name: 'ChecBxGrp',
          //   jsonPath: ['vendors[0].supplier.collection', 'vendors[0].supplier.transportation','vendors[0].supplier.segregation','vendors[0].supplier.WasteTreatment', 'vendors[0].supplier.DisposalOfWaste', 'vendors[0].supplier.other'],
          //   label: ['Collection','Transportation','Segregation','Waste Treatment', 'Disposal Of Waste', 'Other'],
          //   pattern: '',
          //   type: 'checkBoxGroup',
          //   isRequired: false,
          //   isDisabled: false,
          //   defaultValue: false,
          //   requiredErrMsg: '',
          //   patternErrMsg: '',
          //   colSpan:4
          // },

          {
            name: 'ServicesOffered',
            label: 'swm.create.servicesOffered',
            jsonPath: 'vendors[0].servicesOffered[0].code',
            type: 'multiValueList',
            pattern: '',
            isRequired: true,
            isDisabled: false,
            maxLength: 128,
            url:'',
            minLength: 1,
            patternErrorMsg: '',
            mdms: {
              "moduleName": "swm",
              "masterName": "SwmProcess",
              "filter": "",
              "key": "$..code",
              "value": "$..name",
            },
            hasATOAATransform:true,
            aATransformInfo:{
              to:'vendors[0].servicesOffered',
              key:'code'
            }
          },

          {
            name: 'details',
            jsonPath: 'vendors[0].details',
            label: 'swm.create.details',
            pattern: '^([a-zA-Z0-9_-\\s]){10,500}$',
            type: 'textarea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            patternErrorMsg: 'length must be between 10 and 500',
          }
        ],
      },
    ],
    url: '/swm-services/vendors/_create',
    tenantIdRequired: true,
  },
  'swm.view': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'vendors',
    groups: [
      {
        name: 'vendors',
        label: 'swm.create.group.title.vendors',
        fields: [
          {
            name: 'vendorNo',
            jsonPath: 'vendors[0].vendorNo',
            label: 'swm.create.vendorNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 128,
            minLength: 1,
            patternErrorMsg: '',
          },
        ],
      },
      {
        name: 'VendorDetails',
        label: 'swm.create.group.title.VendorDetails',
        fields: [
          {
            name: 'name',
            jsonPath: 'vendors[0].name',
            label: 'swm.create.supplier.name',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'mobileNo',
            jsonPath: 'vendors[0].supplier.mobileNo',
            label: 'swm.create.supplier.mobileNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 10,
            minLength: 10,
            patternErrorMsg: '',
          },
          {
            name: 'registrationNo',
            jsonPath: 'vendors[0].registrationNo',
            label: 'swm.create.registrationNo',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'contactNo',
            jsonPath: 'vendors[0].supplier.contactNo',
            label: 'swm.create.supplier.contactNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 10,
            minLength: 10,
            patternErrorMsg: '',
          },
          {
            name: 'email',
            jsonPath: 'vendors[0].supplier.email',
            label: 'swm.create.supplier.email',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 100,
            minLength: 6,
            patternErrorMsg: '',
          },
          {
            name: 'faxNumber',
            jsonPath: 'vendors[0].supplier.faxNumber',
            label: 'swm.create.supplier.faxNumber',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 10,
            minLength: 10,
            patternErrorMsg: '',
          },
          {
            name: 'tinNumber',
            jsonPath: 'vendors[0].supplier.tinNumber',
            label: 'swm.create.supplier.tinNumber',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'address',
            jsonPath: 'vendors[0].supplier.address',
            label: 'swm.create.supplier.address',
            pattern: '',
            type: 'textarea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            patternErrorMsg: '',
          },
          {
            name: 'gst',
            jsonPath: 'vendors[0].supplier.gst',
            label: 'swm.create.supplier.gst',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
        ],
      },
      {
        name: 'LocationDetails',
        multiple:true,
        label: 'swm.collectionpoints.create.group.title.LocationDetails',
        jsonPath: "vendors[0].servicedLocations",
         "fields": [
          {
            "type": "boundary",
            "label": "",
            "hierarchyType": "REVENUE",
            "jsonPath": "vendors[0].servicedLocations[0].code",
            "isRequired": false,
            "patternErrorMsg": "",
            "multiple": true,
            "fullWidth": true,
          }
        ]
      },
      {
        name: 'ServicesOffered',
        label: 'swm.create.group.title.ServicesOffered',
        fields: [
          {
            name: 'details',
            jsonPath: 'vendors[0].details',
            label: 'swm.create.details',
            pattern: '',
            type: 'textarea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            patternErrorMsg: '',
          },
        ],
      },
    ],
    tenantIdRequired: true,
    url: '/swm-services/vendors/_search?vendorNo={vendorNo}',
  },
  'swm.update': {
    numCols: 3,
    useTimestamp: true,
    idJsonPath: 'vendors[0].vendorNo',
    objectName: 'vendors',
    groups: [
      // {
      //   name: 'vendors',
      //   label: 'swm.create.group.title.vendors',
      //   fields: [
      //     {
      //       name: 'vendorNo',
      //       jsonPath: 'vendors[0].vendorNo',
      //       label: 'swm.create.vendorNo',
      //       pattern: '',
      //       type: 'text',
      //       isRequired: false,
      //       isDisabled: false,
      //       defaultValue: '',
      //       maxLength: 128,
      //       minLength: 1,
      //       patternErrorMsg: '',
      //     },
      //   ],
      // },
      {
        name: 'VendorDetails',
        label: 'swm.create.group.title.VendorDetails',
        fields: [
          {
            name: 'name',
            jsonPath: 'vendors[0].name',
            label: 'swm.create.supplier.name',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'mobileNo',
            jsonPath: 'vendors[0].supplier.mobileNo',
            label: 'swm.create.supplier.mobileNo',
            pattern: '^([a-zA-Z0-9_-\\s]){10}$',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 10,
            minLength: 10,
            patternErrorMsg: 'length must be between 10 and 10',
          },
          {
            name: 'registrationNo',
            jsonPath: 'vendors[0].registrationNo',
            label: 'swm.create.registrationNo',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'contactNo',
            jsonPath: 'vendors[0].supplier.contactNo',
            label: 'swm.create.supplier.contactNo',
            pattern: '^([a-zA-Z0-9_-\\s]){10}$',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 10,
            minLength: 10,
            patternErrorMsg: 'length must be between 10 and 10',
          },
          {
            name: 'email',
            jsonPath: 'vendors[0].supplier.email',
            label: 'swm.create.supplier.email',
            pattern: '',
            type: 'email',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 100,
            minLength: 6,
            patternErrorMsg: '',
          },
          {
            name: 'faxNumber',
            jsonPath: 'vendors[0].supplier.faxNumber',
            label: 'swm.create.supplier.faxNumber',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 10,
            minLength: 10,
            patternErrorMsg: '',
          },
          {
            name: 'tinNumber',
            jsonPath: 'vendors[0].supplier.tinNumber',
            label: 'swm.create.supplier.tinNumber',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'address',
            jsonPath: 'vendors[0].supplier.address',
            label: 'swm.create.supplier.address',
            pattern: '([a-zA-Z0-9_-\\s]){10,500}$',
            type: 'textarea',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            patternErrorMsg: 'length must be between 10 and 500',
          },
          {
            name: 'gst',
            jsonPath: 'vendors[0].supplier.gst',
            label: 'swm.create.supplier.gst',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
        ],
      },
      {
        name: 'agreementCopyDetails',
        label: 'swm.vendors.create.group.title.agreementCopyDetails',
        fields: [
          {
            name: 'uploadAgreementCopy',
            jsonPath: 'vendors[0].agreementDocument.fileStoreId',
            label: 'swm.vendor.create.agreement.details',
            type: 'singleFileUpload',
            pathToArray: 'documentTypes',
            displayNameJsonPath: 'name',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
        ],
      },

      {

        name: 'LocationDetails',
        multiple:true,
        label: 'swm.collectionpoints.create.group.title.LocationDetails',
        jsonPath: "vendors[0].servicedLocations",
         "fields": [
          {
            "type": "boundary",
            "label": "",
            "hierarchyType": "REVENUE",
            "jsonPath": "vendors[0].servicedLocations[0].code",
            "isRequired": false,
            "patternErrorMsg": "",
            "multiple": true,
            "fullWidth": true,
          }
        ]

      },
      {
        name: 'ServicesOffered',
        label: 'swm.create.servicesOffered',
        // children: [serviceProvided],
        fields: [
          // {
          //   name: 'ChecBxGrp',
          //   jsonPath: ['vendors[0].supplier.collection', 'vendors[0].supplier.transportation','vendors[0].supplier.segregation','vendors[0].supplier.WasteTreatment', 'vendors[0].supplier.DisposalOfWaste', 'vendors[0].supplier.other'],
          //   label: ['Collection','Transportation','Segregation','Waste Treatment', 'Disposal Of Waste', 'Other'],
          //   pattern: '',
          //   type: 'checkBoxGroup',
          //   isRequired: false,
          //   isDisabled: false,
          //   defaultValue: false,
          //   requiredErrMsg: '',
          //   patternErrMsg: '',
          //   colSpan:4
          // },

          {
            name: 'ServicesOffered',
            label: 'swm.create.servicesOffered',
            jsonPath: 'vendors[0].servicesOffered[0].code',
            type: 'multiValueList',
            pattern: '',
            isRequired: true,
            isDisabled: false,
            maxLength: 128,
            url:'',
            minLength: 1,
            patternErrorMsg: '',
            mdms: {
              "moduleName": "swm",
              "masterName": "SwmProcess",
              "filter": "",
              "key": "$..code",
              "value": "$..name",
            },
            hasATOAATransform:true,
            aATransformInfo:{
              to:'vendors[0].servicesOffered',
              key:'code'
            }
          },

          {
            name: 'details',
            jsonPath: 'vendors[0].details',
            label: 'swm.create.details',
            pattern: '^([a-zA-Z0-9_-\\s]){10,500}$',
            type: 'textarea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 500,
            minLength: 10,
            patternErrorMsg: 'length must be between 10 and 500',
          }
        ],
      },
    ],
    url: '/swm-services/vendors/_update',
    tenantIdRequired: true,
    searchUrl: '/swm-services/vendors/_search?vendorNo={vendorNo}',
  },
};
export default dat;