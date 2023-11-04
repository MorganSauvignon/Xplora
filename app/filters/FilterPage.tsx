import React, { useState } from "react";
import CityFilter from "./CityFilter";
import ScheduleSelector from "./ScheduleSelector";
import { ScheduleSelectorProps } from "./ScheduleSelector";

const FilterPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState<string>('09:00');
  const [selectedEndTime, setSelectedEndTime] = useState<string>('17:00');

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

  const handleSaveSelections = () => {
    if (selectedCity === "") {
      alert("Veuillez sélectionner une ville");
      return;
    }
    else {
        alert("Ville sélectionnée : " + selectedCity + "\nDate sélectionnée : " + selectedDate + "\nHeure de début : " + selectedStartTime + "\nHeure de fin : " + selectedEndTime);    
    }
  };

  const handleCancel = () => {
    setSelectedCity("");
    history.back();
  };

  const scheduleSelectorProps: ScheduleSelectorProps = {
    selectedDate,
    selectedStartTime,
    selectedEndTime,
    handleDateChange,
    handleStartTimeChange,
    handleEndTimeChange,
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">
        Générer un parcours
      </h1>
      <CityFilter selectedCity={selectedCity} onCitySelected={handleCityChange} />
      <ScheduleSelector {...scheduleSelectorProps} /> 
      <div className="mt-4 flex justify-between">
        <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md" onClick={handleCancel}>Annuler</button>
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
