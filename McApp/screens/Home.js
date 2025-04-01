import React, { useState } from "react";
import { View, Text, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
    { id: "1", title: "Hamburgesa", imageUrl: "https://i.pinimg.com/736x/3c/21/c2/3c21c27d83f5780aadc396ab4e2bd836.jpg" },
    { id: "2", title: "Helado", imageUrl: "https://i.pinimg.com/736x/cc/af/74/ccaf74fd55e11d91fe6c50fb8d0b6f38.jpg" },
    { id: "3", title: "Nuggets", imageUrl: "https://i.pinimg.com/736x/a2/60/e6/a260e668090c1bf3cf6bdb9292be9f4f.jpg" },
    { id: "4", title: "Cajita Feliz", imageUrl: "https://i.pinimg.com/736x/7c/1a/63/7c1a63f1f2e813ace26ce343a2b5f170.jpg" }
];

const carouselImages = [
    "https://i.pinimg.com/736x/d3/5b/fc/d35bfc4d3751193310bf373e836d9c02.jpg",
    "https://i.pinimg.com/736x/93/e2/ce/93e2ce3a6dbf45daa85b224975b86651.jpg",
    "https://i.pinimg.com/736x/ab/a2/4a/aba24a98aa039bfbb6813621cf8ea03e.jpg",

];

const imagen = [
   
]

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const goToNextImage = () => {
        if (currentImage < carouselImages.length - 1) {
        setCurrentImage(currentImage + 1);
        } else {
        setCurrentImage(0);
        }
    };

    const goToPrevImage = () => {
        if (currentImage > 0) {
        setCurrentImage(currentImage - 1);
        } else {
        setCurrentImage(carouselImages.length - 1);
        }
    };

    
    

    return (
        <ScrollView style={styles.container}>
            <View>
                <Ionicons name="person-outline" size={29} color={'#62bec0'}/>
            </View>
            <View style={styles.busqueda}>
                <Ionicons name="search-outline" size={29} />
                <TextInput 
                placeholder="Buscar tu comida favorita ..."/>
            </View>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Haz tu Pedido ⸜(｡˃ ᵕ ˂ )⸝♡!</Text>
            <Text style={styles.welcomeSubText}>ordena aqui facil y rapido sin necesidad de hacer fila ദ്ദി •⩊• ) </Text>
        </View>
        
        <Image source={{ uri: "https://i.pinimg.com/736x/36/55/81/3655816eba02dc176bcc098b8690e652.jpg" }} style={styles.carouselImage} />

        <Image source={{ uri: "https://i.pinimg.com/736x/36/55/81/3655816eba02dc176bcc098b8690e652.jpg" }} style={styles.carouselImage} />
        <Text style={styles.sectionTitle}>Explora nuestras Categorías</Text>
        <View>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                <View style={styles.categoryItem}>
                    <TouchableOpacity>
                        <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
                        <Text style={styles.categoryTitle}>{item.title}</Text>
                    </TouchableOpacity>
                </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesContainer}
            />
        </View>

        <Text style={styles.sectionTitle}>Promos</Text>
        <View style={styles.carouselContainer}>
            <TouchableOpacity onPress={goToPrevImage} style={styles.carouselButtonLeft}>
            <Text style={styles.carouselButtonText}>‹</Text>
            </TouchableOpacity>
            <Image source={{ uri: carouselImages[currentImage] }} style={styles.carouselImage} />
            <TouchableOpacity onPress={goToNextImage} style={styles.carouselButtonRight}>
            <Text style={styles.carouselButtonText}>›</Text>
            </TouchableOpacity>
        </View>
        
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    busqueda:{
        padding: 20,
        margin: 10,
        justifyContent: 'center',
        fontSize: 10,

    },
    categoryItem: {
        alignItems: "center",
        marginRight: 20,
    },
    categoryImage: {
        width: 110,
        height: 110,
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#ddd",
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#656568",
    },
    categoriesContainer: {
        marginBottom: 30,
    },
    carouselContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: 30,
    },
    carouselImage: {
        width: 300,
        height: 150,
        borderRadius: 15,
    },
    carouselButtonLeft: {
        position: 'absolute',
        top: "50%",
        left: 10,
        transform: [{ translateY: -20 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 15,
        borderRadius: 50,
        zIndex: 1,
    },
    carouselButtonRight: {
        position: 'absolute',
        top: "50%",
        right: 10,
        transform: [{ translateY: -20 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 15,
        borderRadius: 50,
    },
    carouselButtonText: {
        color: "white",
        fontSize: 24,
    },
    welcomeContainer: {
        backgroundColor: "#f43737",
        borderRadius: 15,
        paddingVertical: 25,
        paddingHorizontal: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5,
    },
    welcomeSubText: {
        fontSize: 18,
        color: "white",
        fontWeight: "500",
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "600",
        color: "#333",
        marginBottom: 10,
    },
});

export default Home;