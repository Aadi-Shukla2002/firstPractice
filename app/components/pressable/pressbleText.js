import {Pressable, Text} from 'react-native';

export const PressableText = props => {
  return (
    <Pressable onPress={props.nav} style={props.style}>
      <Text style={props.textStyle}>{props.text}</Text>
    </Pressable>
  );
};