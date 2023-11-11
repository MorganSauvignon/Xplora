import React, { useState } from "react";
import CityFilter from "./CityFilter";
import ScheduleSelector from "./ScheduleSelector";
import { ScheduleSelectorProps } from "./ScheduleSelector";
import BudgetInput from "./BudgetInput";
import AccessibilityOption from "./AccessibilityOption";
import tabActivite from '@/app/lib/activite.json';

const FilterPage: React.FC = () => {
  const activites = tabActivite;
  const [afficherBoutonIniteraire, setAfficherBoutonIniteraire] = useState(false);
  const [route, setRoute] = useState([]); // Tableau d'objets JSON
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

      return selections;
    }
  };

  const filterActivities = () => {
    let activitesFiltrees;
    if(budget) {
      activitesFiltrees = activites.filter(
            (activite) => activite.ville === selectedCity && activite.budget < budget/2
          );
    } else {
      activitesFiltrees = activites.filter(
        (activite) => activite.ville === selectedCity
      );
    }
    const activitesMelangees = [...activitesFiltrees];
    activitesMelangees.sort(() => Math.random() - 0.5);
    return activitesMelangees;
  }

  const createParcours = (activitesFiltrees: any[]) => {
    const newRoute: any[] = [];
    let totalBudget = 0;
    let totalTime = 0;
  
    // Convertir les heures en nombres
    const startHour = parseInt(selectedStartTime, 10);
    const endHour = parseInt(selectedEndTime, 10);
  
    for (let i = 0; i < activitesFiltrees.length; i++) {
      const activite = activitesFiltrees[i];
  
      // Vérifier si la plage horaire 12h-14h est incluse
      const isTimeSlot12to14Included =
        startHour <= 12 && endHour >= 14;
  
      // Retirer 2 heures si la plage horaire est incluse
      const adjustedMaxEndTime = isTimeSlot12to14Included
        ? endHour - 2
        : endHour;
  
      // Vérifier si l'ajout de l'activité dépasse le budget et le temps disponibles
      if (
        budget && totalBudget + activite.budget <= budget &&
        totalTime + activite.time <= (adjustedMaxEndTime - startHour) * 60
      ) {
        // Ajouter l'activité au parcours
        newRoute.push({ ...activite });
  
        // Mettre à jour le total du budget et du temps
        totalBudget += activite.budget;
        totalTime += activite.time;
      }

    }
    setRoute((prevRoute) => [...prevRoute, ...newRoute]);
    if(newRoute.length > 0) {
      setAfficherBoutonIniteraire(true);
    }
  };
  
  
  const generateParcours = () => {
    const selections = handleSaveSelections();
    alert(selections);
    let activitesFiltrees = filterActivities();
    createParcours(activitesFiltrees);
  }

  const openGoogleMaps = () => {
    console.log("opening gmap")
    console.log(route)
    if (route.length > 0) {
      // Construire l'URL Google Maps avec les coordonnées de chaque activité
      const coordinates = route.map((activity) => `${activity.latitude},${activity.longitude}`);
      const googleMapsURL = `https://www.google.com/maps/dir/${coordinates.join('/')}`;

      // Ouvrir un nouvel onglet avec l'URL Google Maps
      open(googleMapsURL);
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
          onClick={generateParcours}
        >
          Valider
        </button>
        {afficherBoutonIniteraire && (
        <button className="bg-gray-800 text-white py-2 px-4 rounded-md" onClick={openGoogleMaps}>
          Itinéraire
        </button>
      )}
      </div>
    </div>
  );
};

export default FilterPage;
