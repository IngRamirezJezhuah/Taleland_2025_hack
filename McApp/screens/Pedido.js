import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Pedido = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.aguanten}>Esto es pedido!</Text>
            <Text >Tenganme paciencia sigo en proceso</Text>
            <Image style={styles.Imagen} source={{ uri: "https://i.pinimg.com/736x/f7/b4/df/f7b4dfde0c8a519df63faf119fd6c25c.jpg" }} />   
            <Text>En construccion</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    aguanten:{
        fontSize: 50,
    },
    Imagen:{
        width: 400, 
        height: 400 
    }
});

export default Pedido;