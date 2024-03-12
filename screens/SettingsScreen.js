import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from '../style/styles';

const SettingsScreen = () => {
  const [unit, setUnit] = useState('km'); // Default unit is kilometers

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.radioContainer}>
        <Text style={styles.radioLabel}>Select Unit:</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            value="km"
            status={unit === 'km' ? 'checked' : 'unchecked'}
            onPress={() => handleUnitChange('km')}
          />
          <Text style={styles.radioText}>Kilometers</Text>

          <RadioButton
            value="miles"
            status={unit === 'miles' ? 'checked' : 'unchecked'}
            onPress={() => handleUnitChange('miles')}
          />
          <Text style={styles.radioText}>Miles</Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
