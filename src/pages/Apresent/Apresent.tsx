import { StyleSheet, Text, View } from 'react-native';

export default function Feed1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nesta tela usamos botões com propriedade Tab.Navigator tabBarIcon</Text>
      <Text style={styles.title}>Botões com estilo e simples de fazer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 25,
    textAlign: 'center'  }
});