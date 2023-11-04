// FilterPage.tsx
import { useState } from "react";
import CityFilter from "./CityFilter";

const FilterPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (selectedCity: string) => {
    setSelectedCity(selectedCity);
  };

  const handleSaveSelections = () => {
    //@TODO gestion de la sélection
    alert(`Vous avez sélectionné la ville ${selectedCity}`);
  };
  const handleCancel = () => {
    setSelectedCity("");
    history.back();
  };
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">
        Générer un parcours
      </h1>
      <CityFilter selectedCity={selectedCity} onCitySelected={handleCityChange} />
      <div className="mt-4 flex justify-between">
      <button  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md" onClick={handleCancel}>Annuler</button>
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
