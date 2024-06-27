import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Personaje from '../components/Personaje';


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Lista2Screen() {
  const API_PRODUCTS = "https://fakestoreapi.com/products";
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch(API_PRODUCTS)
      .then(res => res.json())
      .then((datos: Product[]) => {
        setData(datos);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const mensaje = (product: Product) => {
    Alert.alert("Producto", `Nombre: ${product.title}\nPrecio: $${product.price}`);
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <View>
      <Personaje data={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Productos</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
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
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#00f',
  },
  itemDescription: {
    fontSize: 16,
    color: '#666',
  },
});
