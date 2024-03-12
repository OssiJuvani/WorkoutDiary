import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';




// const sportTypeOptions = ['Run', 'Ski', 'Gym'];

export default function AddExerciseScreen(){
  // const { addExercise } = useContext(ExerciseContext);
  // const [sportType, setSportType] = useState('');
  // const [distance, setDistance] = useState('');
  // const [duration, setDuration] = useState('');
  // const [date, setDate] = useState('');

  // const handleAddExercise = () => {
  //   if (!isNumeric(distance) || !isNumeric(duration) || distance < 0 || duration < 0) {
  //     Alert.alert('Invalid Input', 'Distance and Duration must be positive numeric values.');
  //     return;
  //   }

  //   const exercise = {
  //     sportType,
  //     distance: parseFloat(distance),
  //     duration: parseFloat(duration),
  //     date,
  //   };

  //   addExercise(exercise);
  //   setSportType('');
  //   setDistance('');
  //   setDuration('');
  //   setDate('');
  // };

  // const isNumeric = (value) => {
  //   return !isNaN(parseFloat(value)) && isFinite(value);
  // };

  // return (
  //   <View>
  //     <Picker
  //       selectedValue={sportType}
  //       onValueChange={(itemValue) => setSportType(itemValue)}
  //     >
  //       <Picker.Item label="Select Sport Type" value="" />
  //       {sportTypeOptions.map((option) => (
  //         <Picker.Item key={option} label={option} value={option} />
  //       ))}
  //     </Picker>

  //     <TextInput
  //       placeholder="Distance (in km)"
  //       value={distance}
  //       onChangeText={(text) => setDistance(text)}
  //       keyboardType="numeric"
  //     />
  //     <TextInput
  //       placeholder="Duration (in minutes)"
  //       value={duration}
  //       onChangeText={(text) => setDuration(text)}
  //       keyboardType="numeric"
  //     />
  //     <TextInput
  //       placeholder="Date"
  //       value={date}
  //       onChangeText={(text) => setDate(text)}
  //       onFocus={() => {
  //       }}
  //     />
  //     <Button title="Add Exercise" onPress={handleAddExercise} />
      
  //   </View>
  // );
};
