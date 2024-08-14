import React from 'react';

const HabitItem = ({ habit, index, updateHabitProgress, deleteHabit }) => {
  const handleCheckboxChange = (day) => {
    updateHabitProgress(index, day);
  };

  const handleDelete = () => {
    deleteHabit(index);
  };

  const completedDays = habit.progress.filter(Boolean).length;
  const progressPercentage = Math.round((completedDays / habit.progress.length) * 100);

  return (
    <li className="mb-4 p-4 border rounded-lg">
      <div className="flex justify-between items-center">
        <span className="font-bold">{habit.name}</span>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded-full"
        >
          Delete
        </button>
      </div>
      <div className="flex space-x-2 mt-2">
        {habit.progress.map((completed, day) => (
          <input
            key={day}
            type="checkbox"
            checked={completed}
            onChange={() => handleCheckboxChange(day)}
            className="form-checkbox"
          />
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="mt-1 text-sm">{progressPercentage}% completed</p>
    </li>
  );
};

export default HabitItem;
