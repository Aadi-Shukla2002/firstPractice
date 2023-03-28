import {Image} from 'react-native';

export const Picture = props => {
  return <Image style={props.style} source={props.source} />;
};