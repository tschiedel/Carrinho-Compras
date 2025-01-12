import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Cart() {
    return(
        <View style={styles.container}>
            <Text>Pagina carrinho</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});