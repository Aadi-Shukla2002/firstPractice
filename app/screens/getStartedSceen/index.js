import {View, Text, ScrollView} from 'react-native';
import {styles} from './style';
import {Picture} from 'components';
import {PressableText} from 'components';

export function FirstScreen({navigation}) {
  return (
    <ScrollView style={styles.main}>
      <View >
        <Picture
          style={styles.image2}
          source={require('../../theme/image/images/image2.jpeg')}
        />

        <Picture
          style={styles.image1}
          source={require('../../theme/image/images/image1.jpeg')}
        />
        <Text style={styles.txt}>Let's Get</Text>
        <Text style={styles.txt3}>Started</Text>
        <Text style={styles.txt2}>Grow Together</Text>
        <PressableText
          style={styles.btn}
          text={'Join now'}
          textStyle={styles.btnTxt}
          nav={() => navigation.navigate('Create Account')}
        />
      </View>
    </ScrollView>
  );
}
