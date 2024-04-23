import { Button, SpecialTextButton, TextButton } from "../styled";


const InsertButton = ({text, onPress}) => {
    return (
        <Button onPress={() => onPress(text)}>
            <TextButton>{text}</TextButton>
        </Button>
    );
};

const InsertSpecialButton = ({text, onPress}) => {
    return (
        <Button onPress={() => onPress(text)}>
            <SpecialTextButton>{text}</SpecialTextButton>
        </Button>
    );
};

export { InsertButton, InsertSpecialButton };



        

    