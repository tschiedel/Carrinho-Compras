import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import { CartContext } from '../../context/CartContext';
import CardItem from '../../components/CardItem/CardItem';

export default function Cart() {

    const { cart, addItemCart, removeItemCart } = useContext(CartContext);
    return(
        <View style={styles.container}>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (
                    <CardItem
                        data={item}
                        addAmount={() => addItemCart(item)}
                        removeAmount={ () => removeItemCart(item)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop:14,
    }
});