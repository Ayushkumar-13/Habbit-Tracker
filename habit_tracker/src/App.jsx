import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HabitInput from './components/HabitInput';
import HabitList from './components/HabitList';
import ProgressSummary from './components/ProgressSummary';
import './App.css';

const App = () => {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    const newHabit = {
      name: habit,
      progress: Array(7).fill(false), // Track progress for the last 7 days
    };
    setHabits([...habits, newHabit]);
  };

  const updateHabitProgress = (index, day) => {
    const newHabits = [...habits];
    newHabits[index].progress[day] = !newHabits[index].progress[day];
    setHabits(newHabits);
  };

  const deleteHabit = (index) => {
    const newHabits = habits.filter((_, i) => i !== index);
    setHabits(newHabits);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gif { background-image: url('/background.gif'); background-size: cover; /* Cover the whole container */ background-repeat: no-repeat; /* Prevent r ">
      <div className="bg-white p-8 m-4 rounded-lg shadow-lg w-full max-w-lg">
        {/* Add padding to the main box */}
        <div className="p-4">
          <Header />
          <HabitInput addHabit={addHabit} />
          <HabitList habits={habits} updateHabitProgress={updateHabitProgress} deleteHabit={deleteHabit} />
          <ProgressSummary habits={habits} />
        </div>
      </div>
    </div>
  );
};

export default App;
