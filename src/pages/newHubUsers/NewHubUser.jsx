import { useReducer, useState } from "react";
import { roundClockLogo, hamburgerIcon } from "../../assets";
// import { Formik, Form } from "formik";
// import CustomInput from "../../components/CustomInput";
// import CustomDropdown from "../../components/CustomDropdown";
// import EmailVerification from "../../components/EmailVerification";
// import { Schemas, initialValues } from "../../utils/validationShema";
import { IoMdClose } from "react-icons/io";
import { overlayBgImage } from "../../assets";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import PersonalDetailsForm from "../../components/PersonalDetailsForm";
import { initialValues } from "../../utils/validationShema";
import {
  initialState,
  newHubUserReducer,
  NEXT_STEP,
  PREV_STEP,
  UPDATE_FORM_VALUES,
  // SUBMIT_FORM,
} from "../../reducers/newHubUserReducer";
import AdditionalDetailsForm from "../../components/AdditionalDetailsForm";

const NewHubUser = () => {
  const [state, dispatch] = useReducer(newHubUserReducer, initialState);
  // const [openEmailVerification, setOpenEmailVerification] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleSubmit() {
    // setOpenEmailVerification(true);
  }

  const handleNextStep = (values) => {
    dispatch({
      type: UPDATE_FORM_VALUES,
      payload: {
        field: state.step === 1 ? "personalDetails" : "additionalInformation",
        values,
      },
    });
    dispatch({ type: NEXT_STEP });
  };

  const handlePrevStep = () => {
    dispatch({ type: PREV_STEP });
  };

  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <div className="p-2 sm:p-4 mx-auto container">
        <header className="flex justify-between p-2 sm:p-4">
          <Link to={"/"}>
            <img
              src={roundClockLogo}
              alt="Round o' Clock Logo"
              className="w-24 sm:w-32"
            />
          </Link>

          <img
            src={hamburgerIcon}
            className="w-5 cursor-pointer"
            onClick={toggleMenu}
          />
        </header>

        <div className="p-[3px] bg-gradient-to-r from-[#FF9B3E] to-[#0f98e0] rounded-2xl border mt-8 mb-12 sm:mb-0 sm:mt-5 max-w-[1295px] mx-auto ">
          <section className="p-3 sm:p-4 min-h-[600px] sm:min-h-[732px] bg-[#F7F7F6] rounded-xl">
            <div className="text-center mt-5 sm:mt-10">
              <h1 className="font-caslon text-black acaslonpro font-semibold text-2xl sm:text-3xl md:text-4xl px-2">
                Hello, Welcome to{" "}
                <span className="bg-gradient-to-br from-[#0DA932] to-[#C29608] bg-clip-text text-transparent text-nowrap">
                  Nexus Hub
                </span>
              </h1>
              <p className="text-[#3B3F49] text-lg sm:text-xl font-semibold">
                Create Account
              </p>
            </div>

            <div className="">
              {state.step === 1 && (
                <PersonalDetailsForm
                  onSubmit={handleNextStep}
                  initialValues={state.formValues.personalDetails}
                />
              )}

              {state.step === 2 && (
                <AdditionalDetailsForm
                  initialValues={state.formValues.additionalInformation}
                  onSubmit={handleSubmit}
                  onBack={handlePrevStep}
                />
              )}

              {/* {state.step === 3 && <EmailVerification email="ibinola" />} */}
            </div>
          </section>
        </div>
      </div>

      {/* OVERLAY SECTION */}
      {isOpen && (
        <div className="fixed inset-0 overflow-auto  bg-gradient-to-b from-green-800 to-yellow-50 duration-300">
          <div className="bg-transparent w-full h-full flex flex-col items-center justify-center p-8 relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <IoMdClose />
            </button>

            {/* Overlay Content */}
            <div className=" w-full max-w-5xl mx-auto ">
              <div className="grid grid-cols-1  sm:grid-cols-2 gap-6 w-full mt-[280px]   min-[500px]:mt-[480px]   sm:mt-0">
                {/* Left side with image and welcome text */}
                <div className="relative h-full">
                  <img
                    src={overlayBgImage}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <h2
                    className="text-[#4FA83D] text-5xl font-normal absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 acaslonpro 
                "
                  >
                    Welcome
                    <br />
                    to Nexus
                  </h2>
                </div>

                {/* Right side content */}
                <div className="flex flex-col gap-6 mb-12 sm:mb-0">
                  {/* Top cards container */}
                  <div className="grid grid-cols-1 gap-6">
                    {/* New Hub User Card */}
                    <Link
                      to={"/new-user"}
                      className="bg-white rounded-md 
                      py-3 px-4 hover:scale-105 transition-transform cursor-pointer flex flex-col gap-[90px]"
                    >
                      <h3 className="text-[#EEEEEF] font-semibold text-5xl mb-2 flex flex-col">
                        New <span className="">Hub</span> User
                      </h3>

                      <div className="flex justify-between items-center">
                        <p className="text-[#434641] text-[16px]">
                          New Hub User?
                        </p>
                        <IoArrowForwardOutline />
                      </div>
                    </Link>
                  </div>

                  {/* Admin Card */}
                  <div className="bg-white rounded-md   py-3 px-4 hover:scale-105 transition-transform cursor-pointer ">
                    <Link to={"/dashboard"} className="flex flex-col gap-12">
                      <h3 className="text-[#EEEEEF] font-semibold text-5xl">
                        Admin
                      </h3>
                      <div className="flex justify-between items-center">
                        <p className="text-[#434641] text-[16px]">
                          Admin Login
                        </p>
                        <IoArrowForwardOutline />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewHubUser;
