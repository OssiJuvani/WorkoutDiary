import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Styles from '../style/Styles';
import { SettingsUnitsContext } from '../context/Contexts';


const SettingsScreen = () => {
  const { selectedUnits, setSelectedUnits } = useContext(SettingsUnitsContext); // Default unit is kilometers
  const handleUnitChange = (newUnit) => {
    setSelectedUnits(newUnit);
  };

  return (
    
      <View>
        <Text>Select Unit:</Text>
        <View>
        <Text>Kilometers</Text>
          <RadioButton
            value="km"
            // uncheckedColor={"#F0F0F0"}
            color={'black'}
            status={selectedUnits === 'km' ? 'checked' : 'unchecked'}
            onPress={() => handleUnitChange('km')}
          />
          <Text>Miles</Text>
          <RadioButton
            value="miles"
            // uncheckedColor={"#F0F0F0"}
            color={'black'}
            status={selectedUnits === 'ml' ? 'checked' : 'unchecked'}
            onPress={() => handleUnitChange('ml')}
          />
        </View>
      </View>

  );
};

export default SettingsScreen;
