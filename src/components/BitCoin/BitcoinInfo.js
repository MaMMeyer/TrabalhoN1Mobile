import React from 'react';
import { View, Text } from 'react-native';
import BitcoinInfo from './BitcoinInfo'; // Importe o componente

const App = () => {
  return (
    <View>
      <Text>Informações do Bitcoin:</Text>
      <BitcoinInfo /> {/* Renderize o componente aqui */}
    </View>
  );
};

export default App;