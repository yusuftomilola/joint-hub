import * as Yup from "yup";

export const initialValues = {
  newHubUser: {
    fullName: "",
    gender: "",
    subscriptionType: "",
    spaceAllocated: "",
    phoneNumber: "",
    email: "",
    contactAddress: "",
    identificationType: "",
    startDate: "",
    spaceAllocated: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
    paymentChannel: "",
    referralCode: "",
  },
  subscriptionUser: {
    fullName: "",
    gender: "",
    subscriptionType: "",
    spaceAllocated: "",
    phoneNumber: "",
    email: "",
    contactAddress: "",
    identificationType: "",
    startDate: "",
    spaceAllocated: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
    paymentChannel: "",
    referralCode: "",
  },
  staff: {
    fullName: "",
    role: "",
    department: "",
    startDate: "",
    email: "",
    phoneNumber: "",
    identificationType: "",
    contactAddress: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
  },
  teamUser: {
    companyName: "",
    gender: "",
    contactEmail: "",
    contactPhoneNumber: "",
    subscriptionType: "",
    spaceAllocated: "",
    paymentChannel: "",
    startDate: "",
    contactIdentificationType: "",
    contactAddress: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
    referralCode: "",
  },
};

export const Schemas = {
  newHubUserSchema: Yup.object().shape({
    fullName: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .required("Please enter your full name"),
    email: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .lowercase()
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must only contain digits")
      .min(10, "Phone number must be at least 10 digits")
      .required("Please enter your phone number"),
    subscriptionType: Yup.string().required(
      "Please select a subscription type"
    ),
    spaceAllocated: Yup.string().required("Please select a space"),
    paymentChannel: Yup.string().required("Please select a payment channel"),
    startDate: Yup.string().required("Please enter a start date"),
    gender: Yup.string().required("Please select a gender"),
    identificationType: Yup.string().required(
      "Please choose an identification type"
    ),
    contactAddress: Yup.string().required("Kindly enter a contact address"),
    nextOfKinName: Yup.string().required(
      "Kindly enter a name for your next of kin"
    ),
    nextOfKinPhone: Yup.string().required(
      "Kindly enter a contact for your next of kin"
    ),
  }),
  subscriptionUserSchema: Yup.object().shape({
    fullName: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .required("Please enter your full name"),
    email: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .lowercase()
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must only contain digits")
      .min(10, "Phone number must be at least 10 digits")
      .required("Please enter your phone number"),
    subscriptionType: Yup.string().required(
      "Please select a subscription type"
    ),
    spaceAllocated: Yup.string().required("Please select a space"),
    paymentChannel: Yup.string().required("Please select a payment channel"),
    gender: Yup.string().required("Please select a gender"),
    startDate: Yup.string().required("Please enter a start date"),
    identificationType: Yup.string().required(
      "Please choose an identification type"
    ),
    contactAddress: Yup.string().required("Kindly enter a contact address"),
    nextOfKinName: Yup.string().required(
      "Kindly enter a name for your next of kin"
    ),
    nextOfKinPhone: Yup.string().required(
      "Kindly enter a contact for your next of kin"
    ),
  }),
  staffSchema: Yup.object().shape({
    fullName: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .required("Please enter your full name"),
    role: Yup.string().required("Please select a your job role"),
    department: Yup.string().required("Please select your department"),
    startDate: Yup.string().required("Please enter a start date"),
    email: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .lowercase()
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must only contain digits")
      .min(10, "Phone number must be at least 10 digits")
      .required("Please enter your phone number"),
    identificationType: Yup.string().required(
      "Please choose an identification type"
    ),
    contactAddress: Yup.string().required("Kindly enter a contact address"),

    nextOfKinName: Yup.string().required(
      "Kindly enter a name for your next of kin"
    ),

    nextOfKinPhone: Yup.string().required(
      "Kindly enter a contact for your next of kin"
    ),
  }),
  teamUserSchema: Yup.object().shape({
    companyName: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .required("Please enter your full name"),
    startDate: Yup.string().required("Please enter a start date"),
    contactEmail: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .lowercase()
      .required("Email is required"),
    contactPhoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must only contain digits")
      .min(10, "Phone number must be at least 10 digits")
      .required("Please enter your phone number"),
    subscriptionType: Yup.string().required(
      "Please select a subscription type"
    ),
    gender: Yup.string().required("Please select a gender"),
    paymentChannel: Yup.string().required("Please select a payment channel"),
    spaceAllocated: Yup.string().required("Please select a space"),
    contactIdentificationType: Yup.string().required(
      "Please choose an identification type"
    ),
    contactAddress: Yup.string().required("Kindly enter a contact address"),

    nextOfKinName: Yup.string().required(
      "Kindly enter a name for your next of kin"
    ),

    nextOfKinPhone: Yup.string().required(
      "Kindly enter a contact for your next of kin"
    ),
  }),
};
