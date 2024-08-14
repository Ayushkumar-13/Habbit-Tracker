import React from 'react';
import HabitItem from './HabitItem';

const HabitList = ({ habits, updateHabitProgress, deleteHabit }) => {
  return (
    <ul>
      {habits.map((habit, index) => (
        <HabitItem
          key={index}
          habit={habit}
          index={index}
          updateHabitProgress={updateHabitProgress}
          deleteHabit={deleteHabit}
        />
      ))}
    </ul>
  );
};

export default HabitList;
