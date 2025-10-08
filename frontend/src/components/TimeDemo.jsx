import React from 'react';
import { Sun, Moon, Cloud, Sunrise } from 'lucide-react';

const TimeDemo = ({ onTimeChange, currentTime }) => {
  const times = [
    { id: 'morning', label: 'Morning (6am-12pm)', icon: Sunrise, color: 'bg-yellow-100 text-yellow-700' },
    { id: 'noon', label: 'Noon (12pm-6pm)', icon: Sun, color: 'bg-blue-100 text-blue-700' },
    { id: 'evening', label: 'Evening (6pm-9pm)', icon: Cloud, color: 'bg-orange-100 text-orange-700' },
    { id: 'night', label: 'Night (9pm-6am)', icon: Moon, color: 'bg-indigo-100 text-indigo-700' }
  ];

  return (
    <div className="fixed bottom-24 left-6 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-gray-200">
      <h3 className="text-sm font-bold text-gray-800 mb-3">🕐 Time Preview (Dev Mode)</h3>
      <div className="space-y-2">
        {times.map((time) => {
          const IconComponent = time.icon;
          return (
            <button
              key={time.id}
              onClick={() => onTimeChange(time.id)}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentTime === time.id
                  ? `${time.color} scale-105 shadow-lg`
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <IconComponent size={18} />
              <span className="text-sm font-medium">{time.label}</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        💡 Auto-detects viewer's local time
      </p>
    </div>
  );
};

export default TimeDemo;
