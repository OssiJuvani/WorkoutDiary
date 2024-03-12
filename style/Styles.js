import { StyleSheet, StatusBar } from 'react-native';
import { Colors } from './Colors';

const Styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 20,
    alignItems: "center",
    flex: 1,
    paddingTop: 20,
  },
  button: {
    backgroundColor: Colors.primaryOne,
    marginTop: 5,
    padding: 2,
    borderRadius: 5,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignSelf: "center",
    
  },  
  exerciseButtons: {
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 2,
    backgroundColor: Colors.segmentedBackground,

  },
  header: {
    fontSize: 34,
    paddingBottom: 30,
  },
  cardStyle: {
    margin: 5,
    width: "80%",
  },

  /* Exercise list */
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  cardContent: {
    alignItems: "center",
  },
  
  sportListIcon: {
    backgroundColor: Colors.primaryOne,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 150,
    height: 50,
    width: 50,
  },

  /* Settings */
   settingContainer: {
     flex: 1,
     flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
   },
  
   settingsRadioBtnView: {
     flexDirection: "row",
     alignSelf: "flex-start",
   },
   radioBtnLabel: {
     flex: 0.3,
     alignSelf: "center",
   },
   radioBtnLabelText: {
     fontWeight: "bold",
   },
});

export default Styles;
