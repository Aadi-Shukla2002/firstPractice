import {Pressable} from 'react-native';
import {SvgComponent} from 'theme';

export const Button = props => {
    return (
      <Pressable onPress={props.nav} style={props.style}>
        <SvgComponent />
      </Pressable>
    );
  };
  