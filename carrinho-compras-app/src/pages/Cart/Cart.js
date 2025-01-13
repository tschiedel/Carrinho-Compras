import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import { CartContext } from '../../context/CartContext';
import CardItem from '../../components/CardItem/CardItem';

export default function Cart() {

    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);
    return(
        <View style={styles.container}>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={() => 
                    <Text style={styles.empty}>
                        Nenhum item no carrinho!
                    </Text>
                }
                renderItem={({item}) => (
                    <CardItem
                        data={item}
                        addAmount={() => addItemCart(item)}
                        removeAmount={ () => removeItemCart(item)}
                    />
                )}
                ListFooterComponent={() => 
                    <Text style={styles.footer}>Total: R$ {total.toFixed(2)}</Text>
                }
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
    },
    empty: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#606060',
        fontSize: 18,
        marginTop: 30
    },
    footer: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#A1525F',
        fontSize: 18,
        marginTop: 14,
        marginBottom: 24
    }
});