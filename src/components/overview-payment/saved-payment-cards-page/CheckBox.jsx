import React from 'react';

const CheckboxWithText = ({ text, isChecked, onChange }) => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <div>{text}</div>
    </div>
  );
};

// Sử dụng trong component cha
const CheckBox = () => {
  const [isChecked, setChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      <CheckboxWithText
        isChecked={isChecked}
        onChange={handleCheckboxChange}
      />
      <button onClick={handleCheckboxChange}>
        <p>Save card for future one-time purchases and subscriptions. 
          This won't affect how you pay for existing subscriptions 
          and can be managed anytime in your Account page.</p>
      </button>
    </div>
  );
};

export default CheckBox;
