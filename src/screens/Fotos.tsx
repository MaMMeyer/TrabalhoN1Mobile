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
      <View style={styles.row}>
        <View style={styles.column}>

          <View style={styles.imageContainer}>
            <Image
              source={require('../pages/fotos/fot1/foto.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Manutenção preventiva 1</Text>
          </View>

        </View>
        <View style={styles.column}>
          <View style={styles.imageContainer}/* Inicio da imagem */ >
            <Image
              source={require('../pages/fotos/fot2/foto.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Manutenção preventiva 2</Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.imageContainer}/* Inicio da imagem */ >
            <Image
              source={require('../pages/fotos/fot3/foto.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Manutenção preventiva 3</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../pages/fotos/fot4/foto.png')}
              style={styles.image}
              resizeMode="cover"
            />

            <Text style={styles.text}>Manutenção preventiva 4 s</Text>

          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>

          <View>
            <Text style={styles.Texto1}>Aguardando</Text>
          </View>

        </View>
        <View style={styles.column}>
          <View>
            <Text style={styles.Texto1}>Aguardando</Text>
          </View>
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
  Texto1: {

  },

  imageContainer: {
    // width: 200,
    // height: 200,
    // backgroundColor: 'lightgray', // Cor de fundo da View da imagem (opcional)
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1, // A View da imagem ocupará todo o espaço disponível
    width: '100%', // Ocupará toda a largura disponível
    height: '100%', // Ocupará toda a altura disponível
    justifyContent: 'center',
    // alignItems: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 10,
    alignSelf: 'center',
  },
  fundoTexto: {
    backgroundColor: '#0060ff',
  },

  image: {
    borderRadius: 10,
    borderColor: 'black',
    flex: 1,
    width: null,
    height: null,
    // width: 150,
    // height: 150,
    // resizeMode: 'cover', // Pode ser 'cover', 'contain', 'stretch', etc., dependendo do comportamento desejado
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
  row: {
    flex: 1,
    flexDirection: 'row',
    margin: 1,
  },
  column: {
    marginTop: 1,
    marginLeft: 2.5,
    marginRight: 2.5,
    marginBottom: 1,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;