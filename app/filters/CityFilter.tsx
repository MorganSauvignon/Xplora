// CityFilter.tsx
import React from "react";

interface CityFilterProps {
  selectedCity: string;
  onCitySelected: (selectedCity: string) => void;
}

export const CityFilter: React.FC<CityFilterProps> = ({ selectedCity, onCitySelected }) => {
  const cities = ["Nice", "Paris", "Lyon", "Marseille", "Lille"];

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCitySelected(event.target.value);
  };

  return (
    <div className="mb-4">
    <label className="block text-gray-700">Sélectionnez une ville :</label>
    <select
      value={selectedCity}
      onChange={handleCityChange}
      className="w-full p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
    >
        <option value="">--Choisissez une ville--</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
