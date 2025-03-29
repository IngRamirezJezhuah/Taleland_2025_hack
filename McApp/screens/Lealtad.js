import React from 'react';
import { StyleSheet, Text, View, Image ,ScrollView} from 'react-native';

const Lealtad = () =>{
    return (
        <ScrollView >
            <View style={styles.container}>
                <Text >MyMcDonald Recompensa</Text>
                <Image style={{ width: 100, height: 100 }} source={{ uri: "https://i.pinimg.com/736x/b5/e4/ba/b5e4ba0fa2f28394dc3bfb352a55f7b4.jpg" }} />            
                <Text style={styles.aguanten}>Tenganme paciencia sigo en proceso</Text>
                <Image style={styles.Imagen} source={{ uri: "https://i.pinimg.com/736x/f7/b4/df/f7b4dfde0c8a519df63faf119fd6c25c.jpg" }} />   
                <Text style={styles.aguanten}>En construccion</Text>
            </View>
        </ScrollView>
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

export default Lealtad;