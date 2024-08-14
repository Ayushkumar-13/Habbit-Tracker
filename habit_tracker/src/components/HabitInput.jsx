import React, { useState } from 'react';

const HabitInput = ({ addHabit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addHabit(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between mb-4 w-full">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-2/3 mr-2"
        placeholder="New Habit"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-1/3">
        Add Habit
      </button>
    </form>
  );
};

export default HabitInput;


