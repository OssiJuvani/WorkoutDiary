import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 20,
  },
  picker: {
    height: 250,
    width: 200,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: 200,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },  
});

export default styles;
