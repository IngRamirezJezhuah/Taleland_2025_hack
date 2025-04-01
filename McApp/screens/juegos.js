import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Juegos = () =>{
    const image = {}
    return (
        <View style={styles.container}>
            <SafeAreaProvider>
                <SafeAreaView>
                    <ImageBackground source={{uri: './assets/mcfondo.png'}} resizeMode='cover'/>
                    <Text style={styles.aguanten}>Esto es Juego!</Text>
                    <Text>Tenganme paciencia sigo en proceso</Text>
                    <Image style={styles.Imagen} source={{ uri: "https://i.pinimg.com/736x/f7/b4/df/f7b4dfde0c8a519df63faf119fd6c25c.jpg" }} />   
                    <Text>En construccion</Text>
                </SafeAreaView>
            </SafeAreaProvider>
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

export default Juegos;