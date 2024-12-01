import React, { useRef } from "react";
import CustomDropdown from "./CustomDropdown";
import CustomInput from "./CustomInput";
import { Formik } from "formik";
import { FileUpload } from "./CustomFileUpload";
import { Form } from "react-router-dom";
import { Schemas } from "../utils/validationShema";
import CustomButton from "./CustomButton";

function AdditionalDetailsForm({ initialValues, onSubmit, onBack }) {
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    onSubmit(values);
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schemas.additionalDetailsSchema}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-4xl mx-auto sm:gap-6 px-4 sm:px-6 ">
          <p className="text-[#3B3F49] text-sm font-semibold">
            Additional Information
          </p>
          <div className="mt-2 sm:mt-3 grid grid-cols-1 md:grid-cols-2 gap-6  ">
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
            <div className="col-span-1 md:col-span-2">
              <FileUpload name="ninDocument" label="Upload NIN document" />
            </div>
            <CustomInput
              name="nextOfKin"
              type="text"
              label="Next of Kin"
              placeholder="NOK name"
            />
            <CustomInput
              name="nextOfKinPhone"
              type="number"
              label="Next of Kin Phone"
              placeholder="Phone Number of NOK"
            />
            <FileUpload name="ninDocument" label="Passport/Profile Photo" />

            <FileUpload
              name="ninDocument"
              label="Signed Lease Agreement Copy"
            />

            <div className="col-span-1 md:col-span-2 mt-4 flex justify-between ">
              <CustomButton type="button" label="Back" onClick={handleBack} />
              <button
                type="submit"
                className=" bg-black md:w-[194px] text-white px-12 py-2 rounded-full"
              >
                {isSubmitting ? "Continuing.." : "Get In"}
                {/* Continue */}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AdditionalDetailsForm;
