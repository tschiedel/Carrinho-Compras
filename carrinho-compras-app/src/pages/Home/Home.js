import React, {useContext, useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import ItemProduct from '../../components/ItemProduct/ItemProduct';

import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../context/CartContext';

export default function Home() {

    const { cart, addItemCart } = useContext(CartContext);

    const navigation = useNavigation();

    const [products, setProducts] = useState([
        {
            id: '1',
            name: 'Keychain Poodle',
            price: 11.40
        },
        {
            id: '2',
            name: 'Pulseira Missangas',
            price: 7.90
        },
        {
            id: '3',
            name: 'Lip Balm Vivai',
            price: 9.90
        },
        {
            id: '4',
            name: 'Blush Panvel',
            price: 49.00
        },
        {
            id: '5',
            name: 'Agulha Crochê 2.5mm',
            price: 15.00
        },
        {
            id: '6',
            name: 'Borracha Ninja',
            price: 3.00
        }
    ])

    function handleAddCart(item){
        addItemCart(item);
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de Produtos</Text>

                <TouchableOpacity 
                    style={styles.cartButton} 
                    onPress={ () => navigation.navigate('Cart') }
                >
                    {cart.length > 0 && (
                        <View style={styles.dot}>
                            <Text style={styles.dotText}>{cart?.length}</Text>
                        </View>
                    )}
                    <Feather name='shopping-cart' size={30} color="#121212"/>
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <ItemProduct data={item} addToCart={() => handleAddCart(item) } />}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#FAFAFA',
        paddingEnd: 14, 
        paddingStart: 14
    },
    cartContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A1525F',
        borderRadius: '50%',
        width: 20,
        height: 20,
        position: 'absolute',
        zIndex: 5,
        bottom: -2,
        left: -4
    },
    dotText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold'
    }
});