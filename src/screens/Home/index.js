import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { InsertButton, InsertSpecialButton } from "../../componentes/buttons";


export const Home = () => {

    const [result,setResult] = useState(0); 
    const [num,setNum] = useState(0);
    const [oldNum,setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    // Função de operadores
    function operatorHandler(value) {
        let operatorInput = value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    };
    // Função de calcular
    function calculate() {
        if (operator === "/") {
            let result = oldNum/num;
                if (result % 1!== 0) {                    
                    setResult(result.toFixed(3))
                } else {
                    setResult(result);
                };
              
        } else if (operator === "x") {
            let result = oldNum*num;
                if (result % 1!== 0) {                    
                    setResult(result.toFixed(3))
                } else {
                    setResult(result);
                };
        } else if (operator === "-") {
            let result = oldNum-num;
                if (result % 1!== 0) {                    
                    setResult(result.toFixed(3))
                } else {
                    setResult(result);
                };
        } else if (operator === "+") {
            let result = parseFloat(oldNum)+parseFloat(num);
                if (result % 1!== 0) {                    
                    setResult(result.toFixed(3))
                } else {
                    setResult(result);
                };
        };
        console.log("Calculou!");
        console.log(oldNum);
        console.log(operator);
        console.log(num);
    };
    // Função de limpar operação
    function clear() {
        setNum(0);
        setResult(0);
    };
    // Função de inserir valores
    function handlePress(value) {
        if (num === 0) { 
            if (value === ".") {
                setNum("0.");
            } else {
                setNum(value);
            };      
        } else {
            setNum( num + value);
        };
    };
    // função de porcentagem
    function porcentage() {
        setNum((num / 100));
    };
    // Função de mudar sinal
    function signHandler() {
            setNum(-num);
    };

    return (
        <View style={styles.container}>

            <View style={styles.showScreen}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Calculator </Text>
                    
                </View>
                <View style={styles.results}>
                    <Text style={styles.textResults}>{result} </Text>
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
                <InsertSpecialButton text="C" onPress={clear}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>()</Text>
                </TouchableOpacity>
                <InsertButton text="%" onPress={porcentage}/>
                <InsertButton text="/" onPress={operatorHandler}/>
                <InsertButton text="7" onPress={handlePress}/>
                <InsertButton text="8" onPress={handlePress}/>
                <InsertButton text="9" onPress={handlePress}/>          
                <InsertButton text="x" onPress={operatorHandler}/>
                <InsertButton text="4" onPress={handlePress}/>
                <InsertButton text="5" onPress={handlePress}/>
                <InsertButton text="6" onPress={handlePress}/>
                <InsertButton text="-" onPress={operatorHandler}/>
                <InsertButton text="1" onPress={handlePress}/>
                <InsertButton text="2" onPress={handlePress}/>
                <InsertButton text="3" onPress={handlePress}/>
                <InsertButton text="+" onPress={operatorHandler}/>         
                <InsertButton text="+/-" onPress={signHandler}/>
                <InsertButton text="0" onPress={handlePress}/>
                <InsertButton text="." onPress={handlePress}/>
                <InsertButton text="=" onPress={calculate}/>
                           
                    
                
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
        height: 96,
        marginBottom: 4,
        borderStyle: "solid",
        borderColor: "#FFFFFF",
        borderWidth: 0.25,
    },

    textButton: {
        fontSize: 32,
    },


});
