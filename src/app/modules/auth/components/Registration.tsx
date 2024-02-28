import { useState, useEffect } from "react";
import AuthNavbar from "../../../ui-components/authNavbar/AuthNavbar.jsx";
import AuthFooter from "../../../ui-components/authFooter/AuthFooter.jsx";
import SelectInput from "../../../ui-components/select-input/SelectInput.jsx";
import {
  RegisterStepOne,
  RegisterStepTwo,
  RegisterStepThree,
  RegisterStepFour,
} from "../../../ui-components/registration-steps/RegistrationSteps.jsx";
import "./registration.css";
import "../../../ui-components/select-input/select-input.css";

const CHECKOUT_STEPS = [
  {
    name: "University Details",
    component: <RegisterStepOne />,
    description: "Please select your university details",
  },
  {
    name: "Account Setting",
    component: <RegisterStepTwo />,
    description: "Setup Your Account Setting",
  },
  {
    name: "Bussiness Info",
    component: <RegisterStepThree />,
    description: "Your Bussiness Related Info",
  },
  {
    name: "Billing Details",
    component: <RegisterStepFour />,
    description: "Setup Your Payment Method",
  },
];

export function Registration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompelete, setIsComplete] = useState(false);

  const ActiveComponent = () => CHECKOUT_STEPS[currentStep - 1].component;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNextButton = (e: any) => {
    e.preventDefault();
    setCurrentStep((prev) => {
      if (prev === CHECKOUT_STEPS?.length) {
        setIsComplete(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
    console.log(currentStep);
  };

  const countries = [{}];

  return (
    <div className="register-parent">
      <AuthNavbar />
      <div className="register-form-container">
        {/* Steps container */}
        <div className="steps-container">
          {CHECKOUT_STEPS?.map((step, index) => {
            return (
              <div className="step" key={step.name}>
                <div
                  className={`step-number ${
                    currentStep > index + 1 || isCompelete
                      ? "step-completed"
                      : ""
                  } ${currentStep === index + 1 ? "step-active" : ""}`}
                >
                  {index + 1}
                </div>
                <div className="step-text-box">
                  <p>{step.name}</p>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Steps container */}

        <form action="" className="register-form">
          <div className="text-header-register">
            <h3 className="">{CHECKOUT_STEPS[currentStep - 1]?.name}</h3>
            <p>
              If you can not find your university/organization please send a
              request through our{" "}
              <span>
                <a href="">Contact Us</a>
              </span>
              page
            </p>
          </div>

          {/* Register-form */}

          <div className="transition-form-box">
            <ActiveComponent />
          </div>
          {/* Register-form */}

          {/* Buttons */}

          <div className="register-next-btn">
            {currentStep > 1 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentStep((prev) => prev - 1);
                }}
              >
                Previos
              </button>
            )}
            <button
              onClick={(e) => handleNextButton(e)}
              style={
                isCompelete ? { backgroundColor: "#36e9f7", color: "#fff" } : {}
              }
            >
              {CHECKOUT_STEPS?.length === currentStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
      <AuthFooter />
    </div>
  );
}
