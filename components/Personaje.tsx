import React, { useState } from 'react';
import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, Alert, View } from 'react-native';

export default function Personaje(props: any) {
    const [modalVisible, setModalVisible] = useState(false);

    const informacion = () => {
        Alert.alert("Información", props.data.description);
    }

    return (
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text>{props.data.title}</Text>
                <Image source={{ uri: props.data.image }} style={styles.img} />
         

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image source={{ uri: props.data.image }} style={styles.img2} />
                        <Text>{props.data.description}</Text>
                        <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
               </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
    },
    img2: {
        width: 200,
        height: 200,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
