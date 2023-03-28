import {TextInput} from 'react-native';


export const Input = (props) => {
    return (
        <TextInput
            style={props.style}
            placeholder={props.name}
            placeholderTextColor={props.color}
          />
    )
}