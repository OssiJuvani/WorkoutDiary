import React, { useState, useContext } from 'react';
import { View, Alert, ScrollView, Pressable, KeyboardAvoidingView, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ExerciseContext } from '../context/Contexts';
import { SegmentedButtons, Portal, Modal, Button, TextInput} from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import Styles from '../style/Styles';
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { SettingsUnitsContext } from '../context/Contexts';



export default function AddExerciseScreen() {

  const {setExercises} = useContext(ExerciseContext);
  const { selectedUnits } = useContext(SettingsUnitsContext);
  const [sport, setSport] = useState("");
  const [selectedDistance, setSelectedDistance] = useState();
  const [duration, setDuration] = useState();
  const [date, setDate] = useState();
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)

  const setDateSelected = (day) => {
    setIsCalendarVisible(false);
    setDate(day);
  };
  
  const AddExercise = () => {
    let distance=
    selectedUnits.value === "ml" ? (selectedDistance* 1.609344).toFixed(2) : selectedDistance;

    let uniqueId = uuidv4();

    let selectedExercise =
        {
            uniqueId,
            sport,
            distance,
            duration,
            date,

          }
        
    setExercises((prev) => [...prev, selectedExercise ]);
    setSport("");
    setSelectedDistance();
    setDuration();
    setDate("");
  };

  const VerifyInput = (input, isFloatAllowed) => {
    let errorText;
    let errorHeading;
    if (input < 0 || input === "-") {
      errorFound = true;
      errorHeading = "Negative input";
      errorText = "Only positive numbers are allowed";
    } else if (isNaN(input)) {
      errorFound = true;
      errorHeading = "Invalid input";
      errorText = "Only numbers are allowed";
    } else if (input.includes(".")) {
      if (isFloatAllowed) {
        if (input.split(".")[1].length > 2) {
          errorFound = true;
          errorHeading = "Decimal error";
          errorText = "Only numbers with two decimal places are allowed";
        } else {
          errorFound = false;
        }
      } else {
        errorFound = true;
        errorHeading = "Integer error";
        errorText = "Only whole numbers are allowed";
      }
    } else {
      errorFound = false;
    }
    return { errorFound, errorHeading, errorText };
  };

  const FormatDate = (date) => {
    newDateObject = new Date(date);
  
    let formattedDate =
      newDateObject.getDate() +
      "." +
      Number(newDateObject.getMonth() + 1) +
      "." +
      newDateObject.getFullYear();
  
    return formattedDate;
  };

  return (
    <SafeAreaProvider>
      <View >
        <ScrollView>
          <View style={Styles.exerciseButtons}>
          <SegmentedButtons
            
            value={sport}
            onValueChange={setSport}
            theme={{ roundness: 0 }}
            buttons={[
              {
                value: "Run",
                label: "Run",
                icon: "run",
              },
              {
                value: "Ski",
                label: "Ski",
                icon: "ski",
              },
              {
                value: "Swim",
                label: "Swim",
                icon: "swim",
              },
            ]}
          />
          </View>
            <TextInput
              label={`Distance (${selectedUnits})`}
              keyboardType="numeric"
              value={selectedDistance}
              maxLength={5}
              onChangeText={(selectedDistance) => {
                !VerifyInput(selectedDistance, (isFloatAllowed = true)).errorFound
                  ? setSelectedDistance(selectedDistance.trim())
                  : Alert.alert(
                      VerifyInput(selectedDistance, (isFloatAllowed = true))
                        .errorHeading,
                      VerifyInput(selectedDistance, (isFloatAllowed = true)).errorText
                    );
              }}
            />
          <TextInput
            label="Duration ( min )"
            keyboardType="numeric"
            value={duration}
            maxLength={5}
            onChangeText={(duration) => {
              !VerifyInput(duration, (isFloatAllowed = false)).errorFound
                ? setDuration(duration.trim())
                : Alert.alert(
                    VerifyInput(duration, (isFloatAllowed = false))
                      .errorHeading,
                    VerifyInput(duration, (isFloatAllowed = false)).errorText
                  );
            }}
          />
          <Portal>
            <Modal visible={isCalendarVisible}>
              <Calendar
                onDayPress={(day) => {
                  setDateSelected(day.dateString);
                }}
                markedDates={{
                  [date]: {
                    selected: true,
                  },
                }}
              ></Calendar>
            </Modal>
          </Portal>
            <Pressable onPress={() => setIsCalendarVisible(true)}>
              <Button
                mode="contained-tonal"
          
                icon={"calendar"}
              >
                {date ? FormatDate(date) : "Select Date"}
              </Button>
            </Pressable>
            <KeyboardAvoidingView >
            <Button
                style={Styles.button}
                mode="contained"
                title='Add exercise'
                onPress={AddExercise}
              >
              <Text>Add</Text>
              </Button>
            </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

