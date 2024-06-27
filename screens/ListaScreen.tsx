import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert, Button } from 'react-native';

interface Cartoon {
  title: string;
  description: string;
  image: string;
  episodes: number;
  year: number;
}

export default function ListaScreen() {
  const API_CARTOONS = "https://api.sampleapis.com/cartoons/cartoons2D";
  const [data, setData] = useState<Cartoon[]>([]);

  useEffect(() => {
    fetch(API_CARTOONS)
      .then(res => res.json())
      .then(datos => setData(datos))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const mensaje = (item: Cartoon) => {
    Alert.alert("Mensaje", `Episodios: ${item.episodes}\nAño: ${item.year}`);
  };

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleDescription = (cartoonTitle: string) => {
    setExpandedId(prevId => (prevId === cartoonTitle ? null : cartoonTitle));
  };

  const renderCartoonItem = ({ item }: { item: Cartoon }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => mensaje(item)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.itemImage}
        resizeMode="cover"
      />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        {expandedId === item.title ? (
          <>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Button title="Cerrar" onPress={() => toggleDescription(item.title)} />
          </>
        ) : (
          <Button title="Ver más" onPress={() => toggleDescription(item.title)} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Cartoons</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => renderCartoonItem({ item })}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemTextContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  itemDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
});
