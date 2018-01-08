var dat = {
  'swm.search': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'sanitationStaffSchedules',
    url: '/swm-services/sanitationstaffschedules/_search',
    groups: [{
      name: 'search',
      label: 'swm.sanitationstaffschedules.search.title',
      fields: [{
          name: 'employeeName',
          jsonPath: 'targetNo',
          label: 'swm.create.sanitationstaffschedules.targetNo',
          type: 'singleValueList',
          isDisabled: false,
          patternErrorMsg: 'swm.create.field.message.transactionNo',
          url: '/swm-services/sanitationstafftargets/_search?|$..targetNo|$..targetNo',
        },
        {
          name: 'name',
          jsonPath: 'shiftCode',
          label: 'swm.create.sanitationstaffschedules.shift',
          type: 'singleValueList',
          isDisabled: false,
          patternErrorMsg: 'swm.create.field.message.name',
          url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=Shift|$..Shift.*.code|$..Shift.*.name'
        },
        // {
        //   name: 'targetNo',
        //   jsonPath: 'targetNo',
        //   label: 'swm.create.sanitationStaffTargets.targetNumber',
        //   type: 'text',
        //   isDisabled: false
        // }
      ],
    }, ],
    result: {
      header: [{
          label: 'swm.create.sanitationstaffschedules.targetNo',
        },
        {
          label: 'swm.create.sanitationstaffschedules.shift',
        },
      ],
      values: ['sanitationStaffTarget.targetNo', 'shift.shiftType.name'],
      resultPath: 'sanitationStaffSchedules',
      rowClickUrlUpdate: '/update/swm/sanitationstaffschedules/{transactionNo}',
      rowClickUrlView: '/view/swm/sanitationstaffschedules/{transactionNo}',
    },
  },
  'swm.create': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'sanitationStaffSchedules',
    idJsonPath: 'sanitationStaffSchedules[0].transactionNo',
    groups: [{
      name: 'staffScheduleDetails',
      label: 'swm.create.group.title.staffScheduleDetails',
      fields: [{
          name: 'targetNo',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.targetNo',
          label: 'swm.create.sanitationstaffschedules.targetNo',
          pattern: '',
          type: 'autoCompelete',
          isRequired: true,
          isDisabled: false,
          defaultValue: '',
          maxLength: 256,
          minLength: 1,
          patternErrorMsg: '',
          url: '/swm-services/sanitationstafftargets/_search?|$..targetNo|$..targetNo',
          autoCompleteDependancy: {
            autoCompleteUrl: '/swm-services/sanitationstafftargets/_search?targetNo={sanitationStaffSchedules[0].sanitationStaffTarget.targetNo}',
            autoFillFields: {
              'sanitationStaffSchedules[0].sanitationStaffTarget.targetFrom': 'sanitationStaffTargets[0].targetFrom',
              'sanitationStaffSchedules[0].sanitationStaffTarget.targetTo': 'sanitationStaffTargets[0].targetTo',
              'sanitationStaffSchedules[0].sanitationStaffTarget.route.name': 'sanitationStaffTargets[0].route.name',
              'sanitationStaffSchedules[0].sanitationStaffTarget.dumpingGround.name': 'sanitationStaffTargets[0].dumpingGround.name',
              'sanitationStaffSchedules[0].sanitationStaffTarget.employeeName': 'sanitationStaffTargets[0].employee.name',
              'sanitationStaffSchedules[0].sanitationStaffTarget.departmentName': 'sanitationStaffTargets[0].employee.assignments[0].department'
            },
          },
        },
        {
          name: 'code',
          jsonPath: 'sanitationStaffSchedules[0].shift.code',
          label: 'swm.create.sanitationstaffschedules.shift',
          pattern: '',
          type: 'singleValueList',
          isRequired: true,
          isDisabled: false,
          defaultValue: '',
          maxLength: 256,
          minLength: 1,
          patternErrorMsg: '',
          url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=Shift|$..Shift.*.code|$..Shift.*.name'
        },
        {
          name: 'targetFrom',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.targetFrom',
          label: 'swm.create.sanitationstaffschedules.targetfrom',
          pattern: '',
          type: 'datePicker',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          patternErrorMsg: '',
        },
        {
          name: 'targetTo',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.targetTo',
          label: 'swm.create.sanitationstaffschedules.targetto',
          pattern: '',
          type: 'datePicker',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          patternErrorMsg: '',
        },
        {
          name: 'departmentName',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.departmentName',
          label: 'swm.create.sanitationstaffschedules.departmentName',
          pattern: '',
          type: 'singleValueList',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
          url: "/egov-mdms-service/v1/_get?tenantId=default&moduleName=common-masters&masterName=Department|$..id|$..name",
          hasIdConverion: true
        },
        {
          name: 'employeeName',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.employeeName',
          label: 'swm.create.sanitationstaffschedules.employeeName',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
        },
        {
          name: 'routeName',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.route.name',
          label: 'swm.create.sanitationstaffschedules.route',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
        },
        {
          name: 'dumpingGroundName',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.dumpingGround.name',
          label: 'swm.create.sanitationstaffschedules.dumpingground',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
        },
      ],
    }, ],
    url: '/swm-services/sanitationstaffschedules/_create',
    tenantIdRequired: true,
  },
  'swm.view': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'sanitationStaffSchedules',
    idJsonPath: 'sanitationStaffSchedules[0].transactionNo',
    groups: [{
      name: 'staffScheduleDetails',
      label: 'swm.create.group.title.staffScheduleDetails',
      fields: [{
          name: 'targetNo',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.targetNo',
          label: 'swm.create.sanitationstaffschedules.targetNo',
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
          name: 'code',
          jsonPath: 'sanitationStaffSchedules[0].shift.shiftType.name',
          label: 'swm.create.sanitationstaffschedules.shift',
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
          name: 'targetFrom',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.targetFrom',
          label: 'swm.create.sanitationstaffschedules.targetfrom',
          pattern: '',
          type: 'datePicker',
          isRequired: false,
          isDisabled: false,
          defaultValue: '',
          patternErrorMsg: '',
        },
        {
          name: 'targetTo',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.targetTo',
          label: 'swm.create.sanitationstaffschedules.targetto',
          pattern: '',
          type: 'datePicker',
          isRequired: false,
          isDisabled: false,
          defaultValue: '',
          patternErrorMsg: '',
        },
        {
          name: 'departmentName',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.employee.assignments[0].department',
          label: 'swm.create.sanitationstaffschedules.departmentName',
          pattern: '',
          type: 'singleValueList',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
          url: "/egov-mdms-service/v1/_get?tenantId=default&moduleName=common-masters&masterName=Department|$..id|$..name",
          hasIdConverion: true
        },
        {
          name: 'employeeName',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.employee.name',
          label: 'swm.create.sanitationstaffschedules.employeeName',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
        },
        {
          name: 'name',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.route.name',
          label: 'swm.create.sanitationstaffschedules.route',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
        },
        {
          name: 'name',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.dumpingGround.name',
          label: 'swm.create.sanitationstaffschedules.dumpingground',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
        }

      ],
    }, ],
    tenantIdRequired: true,
    url: '/swm-services/sanitationstaffschedules/_search?transactionNo={transactionNo}',
  },
  'swm.update': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'sanitationStaffSchedules',
    idJsonPath: 'sanitationStaffSchedules[0].transactionNo',
    groups: [{
      name: 'staffScheduleDetails',
      label: 'swm.create.group.title.staffScheduleDetails',
      fields: [{
          name: 'targetNo',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.targetNo',
          label: 'swm.create.sanitationstaffschedules.targetNo',
          pattern: '',
          type: 'autoCompelete',
          isRequired: true,
          isDisabled: false,
          defaultValue: '',
          maxLength: 256,
          minLength: 1,
          patternErrorMsg: '',
          url: '/swm-services/sanitationstafftargets/_search?|$..targetNo|$..targetNo',
          autoCompleteDependancy: {
            autoCompleteUrl: '/swm-services/sanitationstafftargets/_search?targetNo={sanitationStaffSchedules[0].sanitationStaffTarget.targetNo}',
            autoFillFields: {
              'sanitationStaffSchedules[0].sanitationStaffTarget.targetFrom': 'sanitationStaffTargets[0].targetFrom',
              'sanitationStaffSchedules[0].sanitationStaffTarget.targetTo': 'sanitationStaffTargets[0].targetTo',
              'sanitationStaffSchedules[0].sanitationStaffTarget.route.name': 'sanitationStaffTargets[0].route.name',
              'sanitationStaffSchedules[0].sanitationStaffTarget.dumpingGround.name': 'sanitationStaffTargets[0].dumpingGround.name',
              'sanitationStaffSchedules[0].sanitationStaffTarget.employeeName': 'sanitationStaffTargets[0].employee.name',
              'sanitationStaffSchedules[0].sanitationStaffTarget.departmentName': 'sanitationStaffTargets[0].employee.assignments[0].department'
            },
          },
        },
        {
          name: 'code',
          jsonPath: 'sanitationStaffSchedules[0].shift.code',
          label: 'swm.create.sanitationstaffschedules.shift',
          pattern: '',
          type: 'singleValueList',
          isRequired: false,
          isDisabled: false,
          defaultValue: '',
          maxLength: 256,
          minLength: 1,
          patternErrorMsg: '',
          url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=Shift|$..code|$..code',
        },
        {
          name: 'targetFrom',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.targetFrom',
          label: 'swm.create.sanitationstaffschedules.targetfrom',
          pattern: '',
          type: 'datePicker',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          patternErrorMsg: '',
        },
        {
          name: 'targetTo',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.targetTo',
          label: 'swm.create.sanitationstaffschedules.targetto',
          pattern: '',
          type: 'datePicker',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          patternErrorMsg: '',
        },
        {
          name: 'departmentName',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.employee.assignments[0].department',
          label: 'swm.create.sanitationstaffschedules.departmentName',
          pattern: '',
          type: 'singleValueList',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
          url: "/egov-mdms-service/v1/_get?tenantId=default&moduleName=common-masters&masterName=Department|$..id|$..name",
          hasIdConverion: true
        },
        {
          name: 'employeeName',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.employee.name',
          label: 'swm.create.sanitationstaffschedules.employeeName',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
        },
        {
          name: 'routeName',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.route.name',
          label: 'swm.create.sanitationstaffschedules.route',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
        },
        {
          name: 'dumpingGroundName',
          jsonPath: 'sanitationStaffSchedules[0].sanitationStaffTarget.dumpingGround.name',
          label: 'swm.create.sanitationstaffschedules.dumpingground',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          minLength: 1,
          patternErrorMsg: '',
        },
      ],
    }, ],
    url: '/swm-services/sanitationstaffschedules/_update',
    tenantIdRequired: true,
    searchUrl: '/swm-services/sanitationstaffschedules/_search?transactionNo={transactionNo}',
  },
};
export default dat;