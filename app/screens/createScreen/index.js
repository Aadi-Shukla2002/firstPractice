import {
  View,
  Text,
  Alert,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import {color} from 'theme';
import { PressableText } from 'components';
import { Input } from 'components';
import { Button } from 'components';

export function CreateScreen({navigation}) {
  return (
    <View style={styles.main}>
      <ScrollView>
        <Button
          style={styles.arrow}
          nav={() => navigation.navigate('Get Started')}
        />
        <Text style={styles.head}>Create Account</Text>
        <View>
          <Input
            style={styles.inp}
            name={'Email Address'}
            color={color.placeholderTextColor2}
          />
          <Input
            style={styles.inp}
            name={'Username'}
            color={color.placeholderTextColor2}
          />
          <Input
            style={styles.inp}
            name={'Password'}
            color={color.placeholderTextColor2}
          />
          <Input
            style={styles.inp}
            name={'Re-write Password'}
            color={color.placeholderTextColor2}
          />
        </View>
        <PressableText
          nav={() => Alert.alert('Account Created Successfully!')}
          style={styles.btn}
          textStyle={styles.btnTxt}
          text={'Sign up'}
        />
        <View style={styles.view}>
          <Text style={styles.btn2}>Already have an account? </Text>
          <PressableText
            nav={() => navigation.navigate('Login')}
            textStyle={styles.btn3}
            text={'Login'}
          />
        </View>
      </ScrollView>
    </View>
  );
}