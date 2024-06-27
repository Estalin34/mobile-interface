import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder='Ingresar nick'
        style={styles.input}
        placeholderTextColor='#ccc' // Color de marcador de posición personalizado
      />
      <TextInput
        placeholder='Ingresar contraseña'
        style={styles.input}
        secureTextEntry={true} // Campo de texto seguro para contraseñas
        placeholderTextColor='#ccc' // Color de marcador de posición personalizado
      />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bottom')}>
        <Text style={styles.btnText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f536e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 40,
    color: 'white',
    marginBottom: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 25,
    fontSize: 16,
    color: '#333',
  },
  btn: {
    backgroundColor: '#4EC5F1',
    height: 50,
    width: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
