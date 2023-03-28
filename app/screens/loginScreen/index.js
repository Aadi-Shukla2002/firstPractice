import {View, Text, ScrollView, Alert} from 'react-native';
import {styles} from './style';
import {color} from 'theme';
import {Input} from 'components';
import { PressableText } from 'components';
import { Button } from 'components';

export function LogIn({navigation}) {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View>
          <Button
            nav={() => navigation.navigate('Create Account')}
            style={styles.arrow}
          />
        </View>
        <Text style={styles.txt}>Welcome Back!</Text>
        <Text style={styles.txt2}>Enter Your Username & Password</Text>
        <View style={styles.inpContainer}>
          <View>
            <Input
              style={styles.inp}
              name={'Username'}
              color={color.placeholderTextColor2}
            />
          </View>
          <View>
            <Input
              style={styles.inp}
              name={'Password'}
              color={color.placeholderTextColor2}
            />
          </View>
        </View>
        <View>
          <PressableText
            nav={()=> Alert.alert('Logged in successfully!!')}
            style={styles.btn}
            textStyle={styles.btnTxt}
            text={'Log in'}
          />
        </View>
        <View>
          <Text style={styles.txt3}>Forgot Password?</Text>
          <View style={styles.view}>
            <Text style={styles.txt4}>Or </Text>
            <PressableText
              nav={() => navigation.navigate('Create Account')}
              textStyle={styles.txt5}
              text={'Create a New Account'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}