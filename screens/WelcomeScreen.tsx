import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function WelcomeScreen() {
  // Ruta de la imagen local
  const imageUrl = require('./assets/photo1719495928.jpeg');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pantalla de Bienvenida</Text>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.text}><Text style={styles.bold}>Nombre: </Text>Estalin Fuenmayor</Text>
      <Text style={styles.text}><Text style={styles.bold}>Hobbie: </Text>El gym</Text>
      <Text style={styles.text}><Text style={styles.bold}>Sobre Mi: </Text>Desarrollador apasionado por el software y el gym.</Text>
      <Text style={styles.text}><Text style={styles.bold}>Carrera: </Text>Desarrollo de software</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Color de fondo
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    textAlign: 'center', // Centrar el texto
  },
  bold: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
});
