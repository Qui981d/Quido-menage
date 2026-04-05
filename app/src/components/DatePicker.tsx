import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
  value: string;
  onChange: (val: string) => void;
}

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  // Adjust so Monday is 0 instead of Sunday being 0
  const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const dayNames = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleDayClick = (day: number) => {
    // Format YYYY-MM-DD
    const m = (month + 1).toString().padStart(2, '0');
    const d = day.toString().padStart(2, '0');
    onChange(`${year}-${m}-${d}`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm select-none">
      <div className="flex items-center justify-between mb-4">
        <button type="button" onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={18} />
        </button>
        <span className="font-display font-bold text-black">{monthNames[month]} {year}</span>
        <button type="button" onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {dayNames.map(d => (
          <div key={d} className="text-xs font-bold text-gray-400 py-1">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {blanks.map(b => (
          <div key={`blank-${b}`} className="aspect-square" />
        ))}
        {days.map(day => {
          const formattedDate = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
          const isSelected = value.startsWith(formattedDate);
          
          // Disable past dates
          const dateObj = new Date(year, month, day);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const isPast = dateObj < today;

          return (
            <button
              key={day}
              type="button"
              disabled={isPast}
              onClick={() => handleDayClick(day)}
              className={`aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                isSelected 
                  ? "bg-black text-white" 
                  : isPast 
                    ? "text-gray-300 cursor-not-allowed" 
                    : "text-black hover:bg-gray-100"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
