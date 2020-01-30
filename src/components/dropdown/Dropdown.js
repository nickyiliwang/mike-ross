import React from "react";
import "./dropdown.scss";

const Dropdown = ({ setFontSizeValue, setFontFamilyValue }) => {
  const handleOnFontSizeChange = e => {
    setFontSizeValue(e.target.value);
  };
  const handleOnFontFamilyChange = e => {
    setFontFamilyValue(e.target.value);
  };

  return (
    <div>
      <div>
        <label className="dropdown">
          <div className="dd-button">Aa</div>

          <input type="checkbox" className="dd-input" />

          <ul className="dd-menu">
            <li>
              <h3>Display Settings</h3>
            </li>
            <li>
              <label>
                <input
                  onChange={handleOnFontSizeChange}
                  type="radio"
                  name="font-size"
                  value="12"
                />
                <p className="small-font">Aa</p>
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={handleOnFontSizeChange}
                  type="radio"
                  name="font-size"
                  value="16"
                  defaultChecked
                />
                <p className="medium-font">Aa</p>
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={handleOnFontSizeChange}
                  type="radio"
                  name="font-size"
                  value="20"
                />
                <p className="large-font">Aa</p>
              </label>
            </li>
            <li className="divider"></li>
            <li>
              <label>
                <input
                  onChange={handleOnFontFamilyChange}
                  type="radio"
                  name="font-family"
                  value="'Helvetica', 'Arial', sans-serif"
                  defaultChecked
                />
                <p className="helvetic-font">Helvetica</p>
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={handleOnFontFamilyChange}
                  type="radio"
                  name="font-family"
                  value="'Times New Roman', Times, serif"
                />
                <p className="times-new-roman-font">Times New Roman</p>
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={handleOnFontFamilyChange}
                  type="radio"
                  name="font-family"
                  value="Arial, Helvetica, sans-serif"
                />
                <p className="arial-font">Arial</p>
              </label>
            </li>
          </ul>
        </label>
      </div>
    </div>
  );
};

export default Dropdown;
