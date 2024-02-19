import { useEffect, useState } from "react";
import "./input-field.css";
const InputField = ({ formik, type, label, Icon }) => {
  const [value, setValue] = useState("");
  const firstValidValue =
    type === "email"
      ? formik.touched.email && formik.errors.email
      : formik.touched.password && formik.errors.password;

  const secondValidValue =
    type === "email"
      ? formik.touched.email && !formik.errors.email
      : formik.touched.password && !formik.errors.password;

  useEffect(() => {
    setValue(formik.getFieldProps(type).value);
    console.log(value);
  }, [formik, value, type]);
  return (
    <>
      <input
        className={`form-control bg-transparent input-field ${
          firstValidValue && "is-invalid"
        } ${secondValidValue && "is-valid"}`}
        type={type}
        name={type}
        autoComplete="off"
        {...formik.getFieldProps(type)}
      />
      <label
        className={`${
          value?.length > 0 ? "placeholder-field-only-top" : "placeholder-field"
        }`}
      >
        {label}
      </label>
      {/* input icon */}
      <span className="input-icon">
        <Icon />
      </span>
      {/* input icon */}
      {firstValidValue && (
        <div className="fv-plugins-message-container error-msg">
          <span role="alert" style={{ color: "red" }}>
            {type === "email" ? formik.errors.email : formik.errors.password}
          </span>
        </div>
      )}
    </>
  );
};

export default InputField;
