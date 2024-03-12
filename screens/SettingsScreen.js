import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Styles from '../style/Styles';
import { SettingsUnitsContext } from '../context/Contexts';


const SettingsScreen = () => {
  const { selectedUnits, setSelectedUnits } = useContext(SettingsUnitsContext); // Default unit is kilometers
  console.log(selectedUnits);
  const handleUnitChange = (newUnit) => {
    setSelectedUnits(newUnit);
  };

  return (
    <View style={Styles.container}>
      

      <View>
        <Text>Select Unit:</Text>
        <View>
          <RadioButton
            value="km"
            status={selectedUnits === 'km' ? 'checked' : 'unchecked'}
            onPress={() => handleUnitChange('km')}
          />
          <Text>Kilometers</Text>

          <RadioButton
            value="miles"
            status={selectedUnits === 'ml' ? 'checked' : 'unchecked'}
            onPress={() => handleUnitChange('ml')}
          />
          <Text>Miles</Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
