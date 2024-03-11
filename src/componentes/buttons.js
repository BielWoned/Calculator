import { TouchableOpacity, Text, StyleSheet} from "react-native";



const InsertButton = ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(text)}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    );
};

const InsertSpecialButton = ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(text)}>
            <Text style={[styles.textButton, styles.specialTextButton]}>{text}</Text>
        </TouchableOpacity>
    );
};

export { InsertButton, InsertSpecialButton };

const styles= StyleSheet.create({
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
        fontWeight: "500",
        fontSize: 32,
    },

    specialTextButton: {
        color: "#FF6944",
        fontSize: 40,
    },
});

        

    