var dat = {
  'swm.search': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'vehicleFuellingDetails',
    url: '/swm-services/vehiclefuellingdetails/_search',
    title:'swm.vehiclefuellingdetails.search.title',
    groups: [
      {
        name: 'searchtype',
        label: 'swm.vehiclefuellingdetails.search.searchtype',
        fields: [
          {
            name: 'transactionNo',
            jsonPath: 'transactionNo',
            label: 'swm.vehiclefuellingdetails.create.transactionNo',
            type: 'autoCompelete',
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vehiclefuellingdetails/_search?|$.vehicleFuellingDetails.*.transactionNo|$.vehicleFuellingDetails.*.transactionNo',
          },
          {
            name: 'VehicleRegs',
            jsonPath: 'regNumber',
            label: 'swm.vehicles.create.regNumber',
            type: 'autoCompelete',
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vehicles/_search?|$.vehicles.*.regNumber|$.vehicles.*.regNumber',
          },
           // {
          //   name: 'vehicleTypes',
          //   jsonPath: 'vehicleTypeCode',
          //   label: 'swm.vehiclefuellingdetails.create.Vehicletypes',
          //   type: 'singleValueList',
          //   isDisabled: false,
          //   patternErrorMsg: '',
          //   url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=VehicleType|$..code|$..name',
          // },
          {
            name: 'name',
            jsonPath: 'refuellingStationName',
            label: 'vehiclefuellingdetails.search.result.refuellingStation',
            type: 'autoCompelete',
            isDisabled: false,
            patternErrorMsg: '',
            url: '/swm-services/refillingpumpstations/_search?|$.refillingPumpStations.*.code|$.refillingPumpStations.*.name',
          },
          // {
          //   name: 'fueltype',
          //   jsonPath: 'fuelTypeCode',
          //   label: 'swm.vehicles.create.fuelType',
          //   type: 'singleValueList',
          //   isDisabled: false,
          //   patternErrorMsg: '',
          //   url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=FuelType|$..code|$..name',
          // },
          {
            name: 'transactionFromDate',
            jsonPath: 'transactionFromDate',
            label: 'swm.vehiclefuellingdetails.create.transactionfromDate',
            type: 'datePicker',
            isDisabled: false,
            patternErrorMsg: 'swm.create.field.message.transactionNo',
          },
          {
            name: 'transactionToDate',
            jsonPath: 'transactionToDate',
            label: 'swm.vehiclefuellingdetails.create.transactionToDate',
            type: 'datePicker',
            isDisabled: false,
            patternErrorMsg: '',
          },
          // {
          //   name: 'name',
          //   jsonPath: 'totalCostIncurred',
          //   label: 'vehiclefuellingdetails.create.totalCostIncurred',
          //   type: 'number',
          //   isDisabled: false,
          //   patternErrorMsg: '',
          // },
        ],
      },
    ],
    result: {
      header: [
        {
          label: 'vehiclefuellingdetails.create.transactionNo',
        },
        {
          label: 'vehiclefuellingdetails.create.transactionDate',
          isDate:true
        },
        {
          label: 'vehiclefuellingdetails.create.vehicleType',
        },
        {
          label: 'swm.vehicles.create.regNumber',
        },
        {
        label:'vehiclefuellingdetails.create.vehicleReadingDuringFuelling'
        },
        {
          label: 'vehiclefuellingdetails.search.result.refuellingStation',
        },
        {
          label:'vehiclefuellingdetails.create.fuelFilled'
        },
        {
          label:'vehiclefuellingdetails.create.typeOfFuel'
        },
        {
          label:'vehiclefuellingdetails.create.totalCostIncurred'
        },
        {
          label:'vehiclefuellingdetails.search.result.receiptNo'
        },
        {
          label:'vehiclefuellingdetails.search.result.receiptDate',
          isDate:true
        }
      ],
      values: ['transactionNo', 'transactionDate', 'vehicle.vehicleType.name', 'vehicle.regNumber', 'vehicleReadingDuringFuelling', 'refuellingStation.name','fuelFilled','vehicle.fuelType.name','totalCostIncurred','receiptNo','receiptDate'],
      resultPath: 'vehicleFuellingDetails',
      rowClickUrlUpdate: '/update/swm/vehiclefuellingdetails/{transactionNo}',
      rowClickUrlView: '/view/swm/vehiclefuellingdetails/{transactionNo}',
    },
  },
  'swm.create': {
    numCols: 12 / 3,
    useTimestamp: true,
    objectName: 'vehicleFuellingDetails',
    idJsonPath: 'vehicleFuellingDetails[0].transactionNo',
    title: 'vehiclefuellingdetails.create.group.title.VehicleDetails1',
    groups: [
      {
        name: 'VehicleDetails1',
        label: '',
        fields: [
          {
            name: 'transactionNo',
            jsonPath: '',
            label: 'vehiclefuellingdetails.create.transactionNo',
            type: 'text',
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: '',
          },
          {
            name: 'transactionDate',
            jsonPath: 'vehicleFuellingDetails[0].transactionDate',
            label: 'vehiclefuellingdetails.create.transactionDate',
            type: 'datePicker',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            defaultDate:true,
            maxDate: 'today',
          },
        ],
      },
      {
        name: 'VehicleDetails2',
        label: 'vehiclefuellingdetails.create.group.title.VehicleDetails2',
        fields: [
          {
            name: 'regNumber',
            jsonPath: 'vehicleFuellingDetails[0].vehicle.regNumber',
            label: 'swm.vehicles.create.regNumber',
            pattern: '',
            type: 'autoCompelete',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 12,
            minLength: 6,
            patternErrorMsg: '',
            url: 'swm-services/vehicles/_search?|$.vehicles.*.regNumber|$.vehicles.*.regNumber',
            autoCompleteDependancy: {
              autoCompleteUrl: '/swm-services/vehicles/_search?regNumber={vehicleFuellingDetails[0].vehicle.regNumber}',
              autoFillFields: {
                'vehicleFuellingDetails[0].vehicle.vehicleType.name': 'vehicles[0].vehicleType.name',
                'vehicleFuellingDetails[0].fuelType.name':'vehicles[0].fuelType.name'
              },
            },
          },
          {
            name: 'name',
            jsonPath: 'vehicleFuellingDetails[0].vehicle.vehicleType.name',
            label: 'vehiclefuellingdetails.create.vehicleType',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: true,
            defaultValue: '',
            maxLength: 128,
            minLength: 1,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'vehicleReadingDuringFuelling',
            jsonPath: 'vehicleFuellingDetails[0].vehicleReadingDuringFuelling',
            label: 'vehiclefuellingdetails.create.vehicleReadingDuringFuelling',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
          },
        ],
      },
      {
        name: 'VehicleDetails3',
        label: 'vehiclefuellingdetails.create.group.title.VehicleDetails3',
        fields: [
          {
            name: 'name',
            jsonPath: 'vehicleFuellingDetails[0].refuellingStation.code',
            label: 'vehiclefuellingdetails.search.result.refuellingStation',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
            url: '/swm-services/refillingpumpstations/_search?|$.refillingPumpStations.*.code|$.refillingPumpStations.*.name',
          },
          {
            name: 'typeOfFuel',
            jsonPath: 'vehicleFuellingDetails[0].fuelType.name',
            label: 'vehiclefuellingdetails.search.result.typeOfFuel',
            type: 'text',
            isRequired: true,
            isDisabled: true,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
            //isStateLevel: true,
          //  url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=FuelType|$..code|$..name',
          },
          {
            name: 'fuelFilled',
            jsonPath: 'vehicleFuellingDetails[0].fuelFilled',
            label: 'vehiclefuellingdetails.search.result.fuelFilled',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'totalCostIncurred',
            jsonPath: 'vehicleFuellingDetails[0].totalCostIncurred',
            label: 'vehiclefuellingdetails.search.result.totalCostIncurred',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'receiptNo',
            jsonPath: 'vehicleFuellingDetails[0].receiptNo',
            label: 'vehiclefuellingdetails.search.result.receiptNo',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'receiptDate',
            jsonPath: 'vehicleFuellingDetails[0].receiptDate',
            label: 'vehiclefuellingdetails.search.result.receiptDate',
            type: 'datePicker',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
          },
        ],
      },
    ],
    url: '/swm-services/vehiclefuellingdetails/_create',
    tenantIdRequired: true,
  },
  'swm.view': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'vehicleFuellingDetails',
    searchUrl: 'swm-services/vehiclefuellingdetails/_search?transactionNo={transactionNo}',
    groups: [
      {
        name: 'VehicleDetails2',
        label: 'vehiclefuellingdetails.create.group.title.VehicleDetails2',
        fields: [
          {
            name: 'transactionNo',
            jsonPath: 'vehicleFuellingDetails[0].transactionNo',
            label: 'vehiclefuellingdetails.create.transactionNo',
            type: 'number',
            isRequired: true,
            isDisabled: true,
            patternErrorMsg: '',
          },
          {
            name: 'transactionDate',
            jsonPath: 'vehicleFuellingDetails[0].transactionDate',
            label: 'vehiclefuellingdetails.create.transactionDate',
            type: 'datePicker',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'name',
            jsonPath: 'vehicleFuellingDetails[0].vehicle.vehicleType.name',
            label: 'vehiclefuellingdetails.create.vehicleType',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            maxLength: 128,
            minLength: 4,
            patternErrorMsg: '',
          },
          {
            name: 'regNumber',
            jsonPath: 'vehicleFuellingDetails[0].vehicle.regNumber',
            label: 'swm.vehicles.create.regNumber',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            maxLength: 12,
            minLength: 6,
            patternErrorMsg: '',
          },
          {
            name: 'vehicleReadingDuringFuelling',
            jsonPath: 'vehicleFuellingDetails[0].vehicleReadingDuringFuelling',
            label: 'vehiclefuellingdetails.create.vehicleReadingDuringFuelling',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
          },
        ],
      },
      {
        name: 'VehicleDetails3',
        label: 'vehiclefuellingdetails.create.group.title.VehicleDetails3',
        fields: [
          {
            name: 'name',
            jsonPath: 'vehicleFuellingDetails[0].refuellingStation.name',
            label: 'vehiclefuellingdetails.search.result.refuellingStation',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'fuelFilled',
            jsonPath: 'vehicleFuellingDetails[0].fuelFilled',
            label: 'vehiclefuellingdetails.search.result.fuelFilled',
            type: 'textArea',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'typeOfFuel',
            jsonPath: 'vehicleFuellingDetails[0].vehicle.fuelType.name',
            label: 'vehiclefuellingdetails.search.result.typeOfFuel',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'totalCostIncurred',
            jsonPath: 'vehicleFuellingDetails[0].totalCostIncurred',
            label: 'vehiclefuellingdetails.search.result.totalCostIncurred',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'receiptNo',
            jsonPath: 'vehicleFuellingDetails[0].receiptNo',
            label: 'vehiclefuellingdetails.search.result.receiptNo',
            type: 'textArea',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'receiptDate',
            jsonPath: 'vehicleFuellingDetails[0].receiptDate',
            label: 'vehiclefuellingdetails.search.result.receiptDate',
            type: 'datePicker',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
          },
        ],
      },
    ],
    tenantIdRequired: true,
    url: 'swm-services/vehiclefuellingdetails/_search?transactionNo={transactionNo}',
  },
  'swm.update': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'vehicleFuellingDetails',
    idJsonPath: 'vehicleFuellingDetails[0].transactionNo',
    title:'vehiclefuellingdetails.create.group.title.VehicleDetails1',
    groups: [
      {
        name: 'VehicleDetails1',
        label: '',
        fields: [
           {
            name: 'transactionNo',
            jsonPath: 'vehicleFuellingDetails[0].transactionNo',
            label: 'vehiclefuellingdetails.create.transactionNo',
            type: 'text',
            isRequired: true,
            isDisabled: true,
            patternErrorMsg: '',
          },{
            name: 'transactionDate',
            jsonPath: 'vehicleFuellingDetails[0].transactionDate',
            label: 'vehiclefuellingdetails.create.transactionDate',
            type: 'datePicker',
            isRequired: true,
            isDisabled: true,
            patternErrorMsg: '',
          },
        ],
      },
      {
        name: 'VehicleDetails2',
        label: 'vehiclefuellingdetails.create.group.title.VehicleDetails2',
        fields: [
          {
            name: 'regNumber',
            jsonPath: 'vehicleFuellingDetails[0].vehicle.regNumber',
            label: 'swm.vehicles.create.regNumber',
            pattern: '',
            type: 'autoCompelete',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 12,
            minLength: 6,
            patternErrorMsg: '',
            url: 'swm-services/vehicles/_search?|$.vehicles.*.regNumber|$.vehicles.*.regNumber',
            autoCompleteDependancy: {
              autoCompleteUrl: '/swm-services/vehicles/_search?regNumber={vehicleFuellingDetails[0].vehicle.regNumber}',
              autoFillFields: {
                'vehicleFuellingDetails[0].vehicle.vehicleType.name': 'vehicles[0].vehicleType.name',
                'vehicleFuellingDetails[0].fuelType.name':'vehicles[0].fuelType.name'
              },
            },
          },
          {
            name: 'name',
            jsonPath: 'vehicleFuellingDetails[0].vehicle.vehicleType.name',
            label: 'vehiclefuellingdetails.create.vehicleType',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: true,
            defaultValue: '',
            maxLength: 128,
            minLength: 1,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'vehicleReadingDuringFuelling',
            jsonPath: 'vehicleFuellingDetails[0].vehicleReadingDuringFuelling',
            label: 'vehiclefuellingdetails.create.vehicleReadingDuringFuelling',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
          },
        ],
      },
      {
        name: 'VehicleDetails3',
        label: 'vehiclefuellingdetails.create.group.title.VehicleDetails3',
        fields: [
          {
            name: 'name',
            jsonPath: 'vehicleFuellingDetails[0].refuellingStation.code',
            label: 'vehiclefuellingdetails.search.result.refuellingStation',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
            url: '/swm-services/refillingpumpstations/_search?|$.refillingPumpStations.*.code|$.refillingPumpStations.*.name',
          },
          {
            name: 'typeOfFuel',
            jsonPath: 'vehicleFuellingDetails[0].vehicle.fuelType.name',
            label: 'vehiclefuellingdetails.search.result.typeOfFuel',
            type: 'text',
            isRequired: true,
            isDisabled: true,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
           // isStateLevel: true,
           // url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=FuelType|$..code|$..name',
          },
          {
            name: 'fuelFilled',
            jsonPath: 'vehicleFuellingDetails[0].fuelFilled',
            label: 'vehiclefuellingdetails.search.result.fuelFilled',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'totalCostIncurred',
            jsonPath: 'vehicleFuellingDetails[0].totalCostIncurred',
            label: 'vehiclefuellingdetails.search.result.totalCostIncurred',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'receiptNo',
            jsonPath: 'vehicleFuellingDetails[0].receiptNo',
            label: 'vehiclefuellingdetails.search.result.receiptNo',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            maxLength: 256,
            minLength: 1,
            patternErrorMsg: '',
          },
          {
            name: 'receiptDate',
            jsonPath: 'vehicleFuellingDetails[0].receiptDate',
            label: 'vehiclefuellingdetails.search.result.receiptDate',
            type: 'datePicker',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
          },
        ],
      },
    ],
    url: '/swm-services/vehiclefuellingdetails/_update',
    tenantIdRequired: true,
    searchUrl: '/swm-services/vehiclefuellingdetails/_search?transactionNo={transactionNo}',
  },
};
export default dat;