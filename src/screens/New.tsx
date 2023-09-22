import React from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';

import { Container } from 'native-base';



const App = () => {

  const bitcoinData = {
    "bitcoin": {
      "usd": 27092,
      "usd_market_cap": 527244337404.75903,
      "usd_24h_vol": 11457511159.45764,
      "usd_24h_change": -0.18541637772076122,
      "last_updated_at": 1695271400
    }
  };

  return (

    <View style={styles.container}>


      <View style={styles.column}>
      <Text style={styles.Titulo}>Valor de Criptomoedase e do Bitcoin</Text>

        <View>
          <Text style={styles.Texto}>Preço do Bitcoin (USD): {bitcoinData.bitcoin.usd}</Text>
          <Text style={styles.Texto}>Capitalização de Mercado (USD): {bitcoinData.bitcoin.usd_market_cap}</Text>
          <Text style={styles.Texto}>Volume das últimas 24 horas (USD): {bitcoinData.bitcoin.usd_24h_vol}</Text>
          <Text style={styles.Texto}>Variação das últimas 24 horas (USD): {bitcoinData.bitcoin.usd_24h_change}</Text>
          <Text style={styles.Texto}>Última atualização em: {bitcoinData.bitcoin.last_updated_at}</Text>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  Texto: {
    marginLeft: 40,
    color: "blue",
    alignItems: 'center',
    marginTop: 10,
    marginRight: 20,
  },
  Titulo:{
    fontSize: 22,
    marginBottom: 50,
  },

  container: {
    marginTop: 40,
    // margin: 10,
    // padding: 10,
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center', // para o texto
    // alignItems: 'center', // para o texto
  },
  column: {
    marginTop: 1,
    marginLeft: 2.5,
    marginRight: 2.5,
    marginBottom: 1,
    flex: 1,
    // borderRadius: 10,
    // borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomView: {
    width: 60, // Largura fixa de 60 pixels
    height: 60, // Altura fixa de 60 pixels
    backgroundColor: '#638f79', // Cor de fundo da parte inferior (opcional)
    opacity: 100,
    alignSelf: 'center', // Centraliza horizontalmente
    position: 'absolute', // Define a posição como absoluta
    bottom: 0, // Fixa na parte inferior
    borderWidth: 1,
    borderRadius: 50,
  },
});


export default App;