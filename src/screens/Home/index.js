import React, { useState } from "react";
import { InsertButton, InsertSpecialButton } from "../../componentes/buttons";
import { Container, ShowScreen, Header, TextHeader, Results, TextResults, Operation, TextOperation, History, TextHistory, TextInternHistory, TextHistoryOperation, OperatorContainer } from "../../styled";

export const Home = () => {

    const [result,setResult] = useState(0); 
    const [num,setNum] = useState(0);
    const [oldNum,setOldNum] = useState(0);
    const [operator, setOperator] = useState();
    const [displayCount, setDisplayCount] = useState("");

    // Função que mostra a operação no formato de uma string
    
    function display() {
        let displayText = "";
    
        if (operator) {
            displayText += oldNum + " " + operator + " " ;       
        }
        displayText += num;
        return displayText;
    };

    function displayH() {
        let displayHist = display(); 
        setDisplayCount(displayHist); 
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

    // Função de operadores
    function operatorHandler(value) {
        setOperator(value);
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
        displayH();   
    };
    // Função de limpar operação
    function clear() {
        setNum(0);
        setResult(0);
        setOperator(null);
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
        <Container>

            <ShowScreen>
                <Header>
                    <TextHeader>Calculator</TextHeader>                    
                </Header>
                <Results>
                    <TextResults>{result}</TextResults>
                </Results>
                <Operation>
                    <TextOperation>{display()}</TextOperation>
                </Operation>
                <History>
                    <TextHistory>
                        <TextInternHistory>History</TextInternHistory>
                    </TextHistory>
                    <TextHistoryOperation>
                        <TextInternHistory>{displayCount}</TextInternHistory>
                    </TextHistoryOperation>
                </History>
            </ShowScreen>

            <OperatorContainer>
                <InsertSpecialButton text="C" onPress={clear}/>
                <InsertButton text="()" onPress={handlePress}/> 
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
                           
                    
                
            </OperatorContainer>
        </Container>
    );
};


