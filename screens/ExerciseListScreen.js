// screens/ExerciseListScreen.js

import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ExerciseContext } from '../context/ExerciseContext';

const ExerciseListScreen = () => {
  const { exercises } = useContext(ExerciseContext);

  return (
    <View>
      {/* Display a list of exercises */}
      {exercises.map((exercise, index) => (
        <View key={index}>
          <Text>{`Sport Type: ${exercise.sportType}`}</Text>
          <Text>{`Distance: ${exercise.distance} km`}</Text>
          <Text>{`Duration: ${exercise.duration} minutes`}</Text>
          <Text>{`Date: ${exercise.date}`}</Text>
        </View>
      ))}
    </View>
  );
};

export default ExerciseListScreen;
