import React from "react";
import CustomDropdown from "./CustomDropdown";
import CustomInput from "./CustomInput";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { Schemas } from "../utils/validationShema";

function AdditionalDetailsForm({ initialValues, onSubmit, onBack }) {
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    // onSubmit(values);
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schemas.additionalDetailsSchema}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-4xl mx-auto mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6">
          <CustomDropdown
            name="identificationType"
            label="Identification Type"
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
          />
          <CustomDropdown
            name="contactAddress"
            label="Contact Address"
            options={[
              { value: "one", label: "One" },
              { value: "two", label: "Two" },
            ]}
          />
          <CustomInput
            name="phoneNumber"
            type="tel"
            label="Phone Number"
            placeholder="+234"
          />
          <CustomInput
            name="email"
            type="email"
            label="Email (Optional)"
            placeholder="Your email"
          />
          <CustomInput
            name="referralCode"
            type="text"
            label="Referral Code (Optional)"
            placeholder="Enter code"
          />
          <CustomDropdown
            name="subscriptionType"
            label="Subscription Type"
            options={[
              { value: "one", label: "One" },
              { value: "two", label: "Two" },
            ]}
          />
          <CustomDropdown
            name="howDidYouHear"
            label="How did you hear about us"
            defaultValue="Twitter, a friend..."
            options={[
              { value: "one", label: "One" },
              { value: "two", label: "Two" },
            ]}
          />
          <div className="col-span-1 md:col-span-2 mt-4 text-end ">
            <button
              type="submit"
              className=" bg-black md:w-[194px] text-white px-12 py-2 rounded-full"
            >
              {isSubmitting ? "Continuing.." : "Continue"}
              {/* Continue */}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AdditionalDetailsForm;
