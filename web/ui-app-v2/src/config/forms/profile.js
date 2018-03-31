const formConfig = {
  name: "profile",
  fields: {
    name: {
      id: "profile-form-name",
      jsonPath: "user.name",
      required: true,
      floatingLabelText: "CORE_COMMON_NAME",
      errorMessage: "CORE_COMMON_NAME_VALIDMSG",
      hintText: "CORE_COMMON_NAME_PLACEHOLDER",
      pattern: "^[A-z]+\\s?[A-z]*$",
    },
    city: {
      id: "profile-form-city",
      jsonPath: "user.location.city",
      required: true,
      floatingLabelText: "CORE_COMMON_CITY",
      hintText: "CORE_COMMON_CITY_PLACEHOLDER",
    },
    email: {
      id: "profile-form-email",
      required: true,
      jsonPath: "user.contact.email",
      floatingLabelText: "CS_PROFILE_EMAIL",
      hintText: "CS_PROFILE_EMAIL_PLACEHOLDER",
      errorMessage: "CS_PROFILE_EMAIL_ERRORMSG",
      pattern: "^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(.\\w{2,3})+$",
      value: "",
    },
  },
  submit: {
    label: "CS_PROFILE_SAVE",
    id: "profile-save-action",
  },
  saveUrl: "/user/register",
};

export default formConfig;