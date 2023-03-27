import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import SvgComponent from '../../transform/SVGARROW';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export function CreateScreen({navigation}) {
  return (
    <View style={styles.main}>
      <ScrollView>
        <Pressable
          onPress={() => navigation.navigate('Get Started')}
          style={styles.arrow}>
          <SvgComponent />
        </Pressable>
        <Text style={styles.head}>Create Account</Text>
        <View>
          <TextInput
            style={styles.inp}
            placeholder="Email Address"
            placeholderTextColor={'#6B6B6B'}
          />
          <TextInput
            style={styles.inp}
            placeholder="Username"
            placeholderTextColor={'#6B6B6B'}
          />
          <TextInput
            style={styles.inp}
            placeholder="Password"
            placeholderTextColor={'#6B6B6B'}
          />
          <TextInput
            style={styles.inp}
            placeholder="Re-write Password"
            placeholderTextColor={'#6B6B6B'}
          />
        </View>
        <Pressable
          onPress={() => Alert.alert('Account Created Successfully!')}
          style={styles.btn}>
          <Text style={styles.btnTxt}>Sign up</Text>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: moderateScale(170, 0.1),
          }}>
          <Text style={styles.btn2}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btn3}>Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FF23651F',
  },
  head: {
    fontSize: 35,
    fontFamily: 'Inter-Bold',
    marginLeft: moderateScale(25, 0.1),
    marginTop: moderateScale(115, 0.1),
    color: 'black',
    marginBottom: moderateScale(15, 0.1),
  },
  inp: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: moderateScale(32, 0.1),
    paddingBottom: moderateScale(-5, 0.1),
    margin: moderateScale(8, 0.1),
    paddingLeft: moderateScale(-2, 0.1),
  },
  btn: {
    flex: 1,
    borderRadius: 40,
    marginHorizontal: moderateScale(25, 0.1),
    marginTop: moderateScale(20, 0.1),
    marginBottom: moderateScale(10, 0.1),
    borderWidth: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: moderateScale(5, 0.1),
  },
  btnTxt: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: moderateScale(5, 0.1),
  },
  btn2: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    color: '#6B6B6B',
  },
  btn3: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Inter-Bold',
    color: 'black',
    textDecorationLine: 'underline',
  },
  arrow: {
    marginLeft: moderateScale(20, 0.1),
    marginTop: moderateScale(23, 0.1),
    backgroundColor: 'black',
    height: verticalScale(25),
    width: scale(25),
    padding: moderateScale(7, 0.1),
    borderRadius: 25,
    justifyContent: 'center',
  },
});
