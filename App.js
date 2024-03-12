
import { ExerciseContext } from "./context/Contexts";
import { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./components/Navigation";






export default function App() {
  const [exercises, setExercises] = useState([]);

  return (


    <ExerciseContext.Provider value={{exercises, setExercises}}>
      <PaperProvider>
        <SafeAreaProvider>
          <Navigation />
          

        </SafeAreaProvider>
      </PaperProvider>
    </ExerciseContext.Provider>
  );
};
