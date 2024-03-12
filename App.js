import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { ExerciseContextProvider } from './context/ExerciseContext';
import AddExerciseScreen from './screens/AddExerciseScreen';
import ExerciseListScreen from './screens/ExerciseListScreen';
import SettingsScreen from './screens/SettingsScreen';
import styles from './style/styles';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <ExerciseContextProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen 
              name="Add Exercise" 
              component={AddExerciseScreen}
               />
            <Tab.Screen 
              name="Exercise List" 
              component={ExerciseListScreen} />
            <Tab.Screen 
              name="Settings" 
              component={SettingsScreen} 
              />
          </Tab.Navigator>
        </NavigationContainer>
      </ExerciseContextProvider>
    </PaperProvider>
  );
};

export default App;
