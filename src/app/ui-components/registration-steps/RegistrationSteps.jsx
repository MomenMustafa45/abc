import React from "react";
import "./registration-steps.css";
import SelectInput from "../select-input/SelectInput";

const countries = [
  { id: 1, country: "Egypt" },
  { id: 2, country: "United Arab Emirates" },
  { id: 3, country: "Bahrain" },
  { id: 4, country: "Saudi" },
];

const cities = [
  { id: 1, country: "Cairo" },
  { id: 2, country: "Giza" },
  { id: 3, country: "Aswan" },
  { id: 4, country: "Luxor" },
];

export const RegisterStepOne = () => {
  return (
    <div className="stepOne-container">
      <SelectInput optionsArray={countries} defaultValue="Country" />
      <SelectInput optionsArray={cities} defaultValue="City" />
      <SelectInput optionsArray={cities} defaultValue="Alumni University" />
      <SelectInput optionsArray={cities} defaultValue="Faculty" />
    </div>
  );
};

export const RegisterStepTwo = () => {
  return (
    <div className="stepTwo-container">
      <div className="register-radio-box">
        <div>
          <input type="radio" id="yes" name="haveEmail" value={true} />
          <label htmlFor="">Yes</label>
        </div>
        <div>
          <input type="radio" id="no" name="haveEmail" value={false} />
          <label htmlFor="">No</label>
        </div>
      </div>
    </div>
  );
};

export const RegisterStepThree = () => {
  return <div className="stepThree-container">StepThree</div>;
};
export const RegisterStepFour = () => {
  return <div className="stepFive-container">StepFour</div>;
};
