
import { ExerciseContext } from "./context/Contexts";
import { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./components/Navigation";
import { SettingsUnitsContext } from "./context/Contexts";
import { exerciseData } from "./data/ExerciseData";

export default function App() {
  const [exercises, setExercises] = useState(exerciseData);
  const [selectedUnits, setSelectedUnits] = useState("km");

  console.log(selectedUnits);

  return (
    <ExerciseContext.Provider value={{exercises, setExercises}}>
      <SettingsUnitsContext.Provider value={{ selectedUnits, setSelectedUnits }}>
        <PaperProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </SettingsUnitsContext.Provider>
    </ExerciseContext.Provider>
  );
};
