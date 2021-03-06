import React from "react";

const Dropdown = ({ setFontSizeValue, setFontFamilyValue }) => {
  const handleOnFontSizeChange = e => {
    setFontSizeValue(e.target.value);
  };
  const handleOnFontFamilyChange = e => {
    setFontFamilyValue(e.target.value);
  };

  return (
    <div className="dropdown-button">
      <label className="dropdown">
        <div className="dd-button">Aa</div>

        <input type="checkbox" className="dd-input" />

        <ul className="dd-menu">
          <li className="dd-title">
            <h3>Display Settings</h3>
          </li>
          <li className="dd-select-fonts">
            <label>
              <input
                onChange={handleOnFontSizeChange}
                type="radio"
                name="font-size"
                value="12"
              />
              <p className="small-font">Aa</p>
            </label>
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
          <li className='dd-select-family'>
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
            <label>
              <input
                onChange={handleOnFontFamilyChange}
                type="radio"
                name="font-family"
                value="'Times New Roman', Times, serif"
              />
              <p className="times-new-roman-font">Times New Roman</p>
            </label>
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
  );
};

export default Dropdown;
