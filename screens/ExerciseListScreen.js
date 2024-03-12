import { ScrollView, View } from "react-native";
import { Card, Chip, Icon, Text } from "react-native-paper";
import { useContext } from "react";
import { ExerciseContext, SettingsUnitsContext } from "../context/Contexts";
import Styles from "../style/Styles";
import SportListIcon from "../components/SportListIcon";

export default function ExerciseListScreen() {
  const { exercises } = useContext(ExerciseContext);
  const { selectedUnits } = useContext(SettingsUnitsContext);

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
    <ScrollView>
      <View style={Styles.container}>
        {exercises.map((e, i) => (
          <Card key={i} style={Styles.cardStyle}>
            <Card.Content>
            <SportListIcon
                sport={e.sport}
              />
              <Text variant="titleLarge">{e.selectedSport}</Text>
              <Text variant="titleMedium">
              {selectedUnits === "km"
                ? e.distance + " km"
                : (e.distance / 1.609344).toFixed(2) +
                  " miles"}
              </Text>
              <Text>Duration: {e.duration} min</Text>
              <Text>Date: {FormatDate(e.date)}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

