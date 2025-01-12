import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ItemProduct({data, addToCart}) {
    return(
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>
                    {data.name}
                </Text>

                <Text style={styles.price}>
                    R$ {data.price}
                </Text>
            </View>

            <TouchableOpacity style={styles.btnAdd} onPress={addToCart}>
                <Text style={styles.btn}>+</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
        padding: 10,
        paddingBottom: 15,
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#A1525F',
    },
    btnAdd: {
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#c5757c',
        borderRadius: 5
    },
    btn: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
});