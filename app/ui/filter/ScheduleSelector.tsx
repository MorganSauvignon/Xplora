import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import fr from 'date-fns/locale/fr';
export interface ScheduleSelectorProps {
  selectedDate: Date;
  selectedStartTime: string;
  selectedEndTime: string;
  handleDateChange: (date: Date) => void;
  handleStartTimeChange: (time: Date | string | null) => void;
  handleEndTimeChange: (time: Date | string | null) => void;
}

const ScheduleSelector: React.FC<ScheduleSelectorProps> = ({
  selectedDate,
  selectedStartTime,
  selectedEndTime,
  handleDateChange,
  handleStartTimeChange,
  handleEndTimeChange
}) => {
  const [shouldRender, setShouldRender] = useState(false);
// utilisé pour éviter un bug de DatePicker
  useEffect(() => {
    setShouldRender(true);
  }, []);
  // utilisé pour éviter un bug de DatePicker lors d'un reload de la page
  if (!shouldRender) {
    return null; 
  }

  return (
    <div className="mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Sélectionnez une date :</label>
        <div className="flex items-center">
          <DatePicker 
            selected={selectedDate} 
            onChange={handleDateChange} 
            dateFormat="dd/MM/yyyy" 
            locale={fr} 
            className="p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Heure de début :</label>
        <div className="flex items-center">
          <TimePicker 
            onChange={handleStartTimeChange} 
            value={selectedStartTime} 
            locale="fr"
            disableClock 
            className="p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Heure de fin :</label>
        <div className="flex items-center">
          <TimePicker 
            onChange={handleEndTimeChange} 
            value={selectedEndTime} 
            locale="fr"
            disableClock 
            className="p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleSelector;
