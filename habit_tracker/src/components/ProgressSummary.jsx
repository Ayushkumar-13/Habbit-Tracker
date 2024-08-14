// src/components/ProgressSummary.js
import React from 'react';

const ProgressSummary = ({ habits }) => {
  const totalDays = habits.reduce((sum, habit) => sum + habit.progress.length, 0);
  const completedDays = habits.reduce(
    (sum, habit) => sum + habit.progress.filter(Boolean).length,
    0
  );
  const overallProgressPercentage = totalDays ? Math.round((completedDays / totalDays) * 100) : 0;

  return (
    <div className="mt-4">
      <h2 className="text-2xl mb-2">Overall Progress Summary</h2>
      <div className="w-full bg-gray-200 rounded-full h-6 mb-2">
        <div
          className="bg-green-600 h-6 rounded-full"
          style={{ width: `${overallProgressPercentage}%` }}
        ></div>
      </div>
      <p>{overallProgressPercentage}% completed</p>
    </div>
  );
};

export default ProgressSummary;
