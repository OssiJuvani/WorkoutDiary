// screens/AddExerciseScreen.js

import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { ExerciseContext } from '../context/ExerciseContext';

const AddExerciseScreen = () => {
  const { addExercise } = useContext(ExerciseContext);
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  const handleAddExercise = () => {
    if (!isNumeric(distance) || !isNumeric(duration) || distance < 0 || duration < 0) {
      Alert.alert('Invalid Input', 'Distance and Duration must be positive numeric values.');
      return;
    }

    const exercise = {
      sportType,
      distance: parseFloat(distance),
      duration: parseFloat(duration),
      date,
    };

    addExercise(exercise);

    // Reset input fields
    setSportType('');
    setDistance('');
    setDuration('');
    setDate('');
  };

  const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };

  return (
    <View>
      {/* UI for exercise input fields, date picker, and add button */}
      <TextInput
        placeholder="Sport Type"
        value={sportType}
        onChangeText={(text) => setSportType(text)}
      />
      <TextInput
        placeholder="Distance (in km)"
        value={distance}
        onChangeText={(text) => setDistance(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Duration (in minutes)"
        value={duration}
        onChangeText={(text) => setDuration(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={(text) => setDate(text)}
        onFocus={() => {
          // Implement date picker here
        }}
      />
      <Button title="Add Exercise" onPress={handleAddExercise} />
    </View>
  );
};

export default AddExerciseScreen;
