import React, { useState } from "react";
import CityFilter from "./CityFilter";
import ScheduleSelector from "./ScheduleSelector";
import { ScheduleSelectorProps } from "./ScheduleSelector";
import BudgetInput from "./BudgetInput";
import AccessibilityOption from "./AccessibilityOption";
const FilterPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState<string>("09:00");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("17:00");
  const [budget, setBudget] = useState<number | null>(null);
  const [isAccessibleOnly, setIsAccessibleOnly] = useState(false);

  const handleCityChange = (selectedCity: string) => {
    setSelectedCity(selectedCity);
  };
 
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleStartTimeChange = (time: Date | string | null) => {
    setSelectedStartTime(time as string);
  };

  const handleEndTimeChange = (time: Date | string | null) => {
    setSelectedEndTime(time as string);
  };
  const scheduleSelectorProps: ScheduleSelectorProps = {
    selectedDate,
    selectedStartTime,
    selectedEndTime,
    handleDateChange,
    handleStartTimeChange,
    handleEndTimeChange,
  };
  const handleBudgetChange = (value: string) => {
    setBudget(value !== "" ? Number(value) : null);
  };
const handleAccessibilityChange = (isChecked: boolean) => {
    setIsAccessibleOnly(isChecked);
  };
  const handleSaveSelections = () => {
    if (selectedCity === "") {
        alert("Veuillez sélectionner une ville");
        return;
      } else if (budget === null || budget < 0) {
        alert("Veuillez spécifier un budget valide en euros");
        return;
      } else {
        let selections = `Ville sélectionnée : ${selectedCity}\nDate sélectionnée : ${selectedDate}\nHeure de début : ${selectedStartTime}\nHeure de fin : ${selectedEndTime}\nBudget : ${budget}€`;
    
        if (isAccessibleOnly) {
          selections += "\nLieux accessibles uniquement : Oui";
        }
    
        alert(selections);
      }
    };
  const handleCancel = () => {
    setSelectedCity("");
    history.back();
  };

  return (
    <div>
      <h1>Générer un parcours</h1>
      <CityFilter
        selectedCity={selectedCity}
        onCitySelected={handleCityChange}
      />
      <ScheduleSelector {...scheduleSelectorProps} />
      <BudgetInput
        handleBudgetChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleBudgetChange(event.target.value)
        }
      />
       <AccessibilityOption handleAccessibilityChange={handleAccessibilityChange} />
      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
          onClick={handleCancel}
        >
          Annuler
        </button>
        <button
          className="bg-gray-800 text-white py-2 px-4 rounded-md"
          onClick={handleSaveSelections}
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default FilterPage;
