import { Icon } from "react-native-paper";
import { View } from 'react-native';

export default function SportListIcon({
  sport, style
}) {
  let sportIcon;
  switch (sport) {
    case "Run":
      sportIcon = "run"
      break;
    case "Ski":
        sportIcon = "ski"
      break;
    case "Swim":
        sportIcon = "swim"
    break;
   
  }
  return (
    <View style={style}>
        <Icon
        source={sportIcon}
        size={40}
    />
  </View>
  );
}

