import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: 'FAFAFA';
`;

export const ShowScreen = styled.View`
    width: 100%;
    background-color: #FF6944;
`;

export const Header = styled.View`
    width: 100%;
    margin-top: 70px;
    align-items: center;
    justify-content: center;
`;

export const TextHeader = styled.Text`
    font-size: 20px;
    color: #FAFAFA;
`;

export const Results = styled.View`
    width: 100%;
    margin-top: 32px;
    padding-right: 40px;
    flex-direction: row;
    justify-content: flex-end;
`;

export const TextResults = styled.Text`
    font-size: 60px;
    color: #fafafa;
    font-weight: bold;
`
export const Operation = styled.View`
    width: 100%;
    justify-content: flex-end;
    flex-direction: row;
    padding-right: 40px;
`;

export const TextOperation = styled.Text`
    font-size: 20px;
    color: #fafafa;
`;

export const History = styled.View`
    flex-direction: row;
    margin-top: 16px;
    margin-bottom: 16px;
`;

export const TextHistory = styled.View`
    width: 50%;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 36px;
`;

export const TextInternHistory = styled.Text`
    color: #fafafa;
    font-size: 16px;
`;

export const TextHistoryOperation = styled.View`
    width: 50%;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 36px;
`;

export const OperatorContainer = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 96px;
    margin-bottom: 4px;
    border-style: solid;
    border-color: #FFFFFF;
    border-width: 0.25px;
`;

export const TextButton = styled.Text`
    font-weight: 500;
    font-size: 32px;
`;

export const SpecialTextButton = styled.Text`
    font-weight: 500;
    font-size: 40px;
    color: #ff6944;
`;





