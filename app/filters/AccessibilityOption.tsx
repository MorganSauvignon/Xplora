import React from 'react';

interface AccessibilityOptionProps {
  handleAccessibilityChange: (isChecked: boolean) => void;
}

const AccessibilityOption: React.FC<AccessibilityOptionProps> = ({ handleAccessibilityChange }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    handleAccessibilityChange(isChecked);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">
        Souhaitez-vous des lieux accessibles ?
      </label>
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        className="rounded border-gray-300 text-gray-700 focus:ring-gray-500"
      />
      <span className="ml-2">Oui, uniquement des lieux accessibles</span>
    </div>
  );
};

export default AccessibilityOption;
