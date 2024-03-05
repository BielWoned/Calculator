import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export const Home = () => {

    const [result,setNum] = useState(0);
    const [num,serNum] = useState(0);

    // Função de limpar operação
    function clear() {
        setNum(0)
    };
    function handlePress(value) {
        setNum(num + value);
    };

    return (
        <View style={styles.container}>
            <View style={styles.showScreen}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Calculator</Text>
                </View>
                <View style={styles.results}>
                    <Text style={styles.textResults}>{result}</Text>
                </View>
                <View style={styles.operation}>
                    <Text style={styles.textOperation}>{num}</Text>
                </View>
                <View style={styles.history}>
                    <View style={styles.textHistory}>
                        <Text style={styles.textInternHistory}>History</Text>
                    </View>
                    <View style={styles.textHistoryOperation}>
                        <Text style={styles.textInternHistory}>56 + 768</Text>
                    </View>
                </View>
            </View>

            <View style={styles.operatorContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.textButton, styles.specialTextButton]} onPress={() => clear()}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>()</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("7")}>
                    <Text style={styles.textButton}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("8")}>
                    <Text style={styles.textButton}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("9")}>
                    <Text style={styles.textButton}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("4")}>
                    <Text style={styles.textButton}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("5")}>
                    <Text style={styles.textButton}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("6")}>
                    <Text style={styles.textButton}>6</Text >
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("1")}>
                    <Text style={styles.textButton}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("2")}>
                    <Text style={styles.textButton}>2</Text>
                </TouchableOpacity>                                           
                <TouchableOpacity style={styles.button} onPress={() => handlePress("3")}>
                    <Text style={styles.textButton}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("0")}>
                    <Text style={styles.textButton}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.textButton, styles.specialTextButton]}>=</Text>
                </TouchableOpacity>
                           
                    
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
    },

    showScreen:{
        
        width: '100%',
        backgroundColor: "#FF6944",
    },

    header: {
        width: '100%',
        marginTop: 70,
        alignItems: "center",
        justifyContent: "center",
    },

    textHeader: {
        fontSize: 20,
        color: "#FAFAFA",
    },  

    results: {
        width: "100%",
        marginTop: 32,
        paddingRight: 40,
        flexDirection: "row",
        justifyContent: "flex-end",
        
    },

    textResults: {
        fontSize: 60,
        color: "#FAFAFA",
        fontWeight: "bold",
         
    },

    operation: {
        width: "100%",
        justifyContent: "flex-end",
        flexDirection: "row",
        paddingRight: 40,
    },

    textOperation: {
        fontSize: 20,
        color: "#FAFAFA",
    },      

    history: {
        flexDirection: "row",
        marginTop: 16,
        marginBottom: 16,
    },

    textHistory: {
        width: "50%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: 36,
    },

    textHistoryOperation: {
        width: "50%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 36,
    },

    textInternHistory: {
        color: "#FAFAFA",
        fontSize: 16,
    },

    operatorContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
        
        
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
        height: 100,
        marginBottom: 4,
        borderStyle: "solid",
        borderColor: "#FFFFFF",
        borderWidth: 0.25,
    },

    textButton: {
        fontSize: 32,
    },

    specialTextButton: {
        color: "#FF6944",
        fontSize: 40,
    },
});
