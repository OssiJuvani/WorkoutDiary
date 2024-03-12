import { Icon } from "react-native-paper";

export default function SportListIcon({
  sport
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
    <Icon
    source={sportIcon}
    size={40}
  />
  );
}

