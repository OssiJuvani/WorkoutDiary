import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { ExerciseContext } from '../context/ExerciseContext';
import styles from '../style/styles';
import { Picker } from '@react-native-picker/picker';

const sportTypeOptions = ['Run', 'Ski', 'Gym'];

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
    setSportType('');
    setDistance('');
    setDuration('');
    setDate('');
  };

  const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={sportType}
        onValueChange={(itemValue) => setSportType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Sport Type" value="" />
        {sportTypeOptions.map((option) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Distance (in km)"
        value={distance}
        onChangeText={(text) => setDistance(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (in minutes)"
        value={duration}
        onChangeText={(text) => setDuration(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={(text) => setDate(text)}
        onFocus={() => {
        }}
      />
      <Button title="Add Exercise" onPress={handleAddExercise} style={styles.button} />
      
    </View>
  );
};

export default AddExerciseScreen;
