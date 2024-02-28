import React, { useState } from "react";
import "./select-input.css";

const SelectInput = ({ optionsArray, defaultValue }) => {
  const [optionMenuOpened, setOptionMenuOpened] = useState(false);
  const [optionValue, setOptionValue] = useState(defaultValue);

  console.log(optionMenuOpened);

  return (
    <div>
      <div className="select-box">
        <button
          className="select-button"
          onClick={(e) => {
            e.preventDefault();
            setOptionMenuOpened(!optionMenuOpened);
          }}
        >
          <span
            className={`${optionMenuOpened ? "menu-opened" : "menu-closed"}`}
          ></span>
          {optionValue}
        </button>
        <ul
          role="listbox"
          id="select-dropdown"
          className="select-dropdown"
          style={
            optionMenuOpened
              ? { height: "150px" }
              : {
                  height: "0px",
                  padding: "0px",
                  boxShadow: "0 0 0 0 #FFF",
                  border: "none",
                }
          }
        >
          {optionsArray.map((c) => (
            <li
              key={c.id}
              role="option"
              onClick={() => {
                setOptionMenuOpened(false);
                setOptionValue(c.country);
              }}
              className="option-item"
            >
              {c.country}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectInput;
