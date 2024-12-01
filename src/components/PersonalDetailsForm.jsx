// import React from "react";
import CustomInput from "./CustomInput";
import CustomDropdown from "./CustomDropdown";
import { Form, Formik } from "formik";
import { Schemas } from "../utils/validationShema";
import CustomButton from "./CustomButton";

// eslint-disable-next-line react/prop-types
function PersonalDetailsForm({ initialValues, onSubmit }) {
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    onSubmit(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schemas.newHubUserSchema}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-4xl mx-auto mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6">
          <CustomInput
            name="fullName"
            type="text"
            label="Full Name"
            placeholder="Please enter your full name"
          />
          <CustomDropdown
            name="gender"
            label="Gender"
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
          />
          <CustomDropdown
            name="spaceAllocated"
            label="Space Allocated"
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
            <CustomButton
              type="submit"
              label="Continue"
              isLoading={isSubmitting}
              loadingText="Submitting..."
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PersonalDetailsForm;
