
import { ExerciseContext } from "./context/Contexts";
import { useState } from "react";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./components/Navigation";
import { SettingsUnitsContext } from "./context/Contexts";
import { exerciseData } from "./data/ExerciseData";
import { Colors } from "./style/Colors";

export default function App() {
  const [exercises, setExercises] = useState(exerciseData);
  const [selectedUnits, setSelectedUnits] = useState("km");

  const lightTheme = {
    ...MD3LightTheme,
    colors: Colors,
  };

  const theme = lightTheme;

  return (
    <ExerciseContext.Provider value={{exercises, setExercises}}>
      <SettingsUnitsContext.Provider value={{ selectedUnits, setSelectedUnits }}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </SettingsUnitsContext.Provider>
    </ExerciseContext.Provider>
  );
};
