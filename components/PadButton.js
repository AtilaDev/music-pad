import React, { useState } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PadButton = ({ height, onPress }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <View
      onTouchStart={() => {
        setIsOn(true);
        onPress();
      }}
      onTouchEnd={() => {
        setIsOn(false);
      }}>
      <LinearGradient
        colors={isOn ? ['#55efc4', '#00b894'] : ['#2d3436', '#636e72']}
        style={{ height }}
      />
    </View>
  );
};

export default PadButton;
