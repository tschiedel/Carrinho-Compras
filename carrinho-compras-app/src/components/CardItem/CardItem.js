import React, {useState} from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

export default function CardItem({ data, addAmount, removeAmount }){

    const [amount, setAmount] = useState(data?.amount);

    function handleIncrease() {
        addAmount();
        setAmount(item => item + 1);
    }

    function handleDecrease() {
        removeAmount();
        
        if(amount === 0){
            setAmount(0);
            return;
        }
        
        setAmount(item => item - 1);
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text >R$ {data.price}</Text>
            </View>

            <View style={styles.amountContainer}>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={handleDecrease}
                >
                    <Text style={styles.btnTxt}>-</Text>
                </TouchableOpacity>

                <Text style={styles.amount}>{amount}</Text>

                <TouchableOpacity 
                    style={styles.btn} 
                    onPress={handleIncrease}
                >
                    <Text style={styles.btnTxt}>+</Text>
                </TouchableOpacity>

            </View>

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
    amountContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    btn: {
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#c5757c',
        borderRadius: 5
    },
    btnTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})