import React, { useState } from 'react';

interface BudgetInputProps {
    handleBudgetChange: React.ChangeEventHandler<HTMLInputElement>;
}

const BudgetInput: React.FC<BudgetInputProps> = ({ handleBudgetChange }) => {
    const [budget, setBudget] = useState<number | ''>('');

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        if (!isNaN(Number(value)) || value === '') {
            setBudget(Number(value));
            handleBudgetChange(e); // Appelle la fonction de gestion du changement de budget dans FilterPage
        }
    };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-1">Spécifier un budget (en euros) :</label>
      <input
        type="text"
        value={budget}
        onChange={handleInputChange}
        placeholder="Entrez votre budget"
        className="p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
        required
      />
    </div>
  );
};

export default BudgetInput;
