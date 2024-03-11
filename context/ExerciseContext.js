// context/ExerciseContext.js

import React, { createContext, useState } from 'react';

const ExerciseContext = createContext();

const ExerciseContextProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  return (
    <ExerciseContext.Provider value={{ exercises, addExercise }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseContext, ExerciseContextProvider };
