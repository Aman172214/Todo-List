import React from "react";

interface CheckboxProps {
  label: string;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label>
      <input type="checkbox" onChange={handleCheckboxChange} />
      {label}
    </label>
  );
};

export default Checkbox;
