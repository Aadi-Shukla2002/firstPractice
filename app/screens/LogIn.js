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

export function LogIn({navigation}) {
  return (
    <View style={styles.main}>
      <ScrollView>
        <Pressable
          onPress={() => navigation.navigate('Create Account')}
          style={styles.arrow}>
          <SvgComponent />
        </Pressable>
        <Text style={styles.txt}>Welcome Back!</Text>
        <Text style={styles.txt2}>Enter Your Username & Password</Text>
        <View style={styles.inpContainer}>
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
        </View>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={styles.btn}>
          <Text style={styles.btnTxt}>Log in</Text>
        </Pressable>
        <View>
          <Text style={styles.txt3}>Forgot Password?</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: moderateScale(205, 0.1),
            }}>
            <Text style={styles.txt4}>Or </Text>
            <Pressable onPress={() => navigation.navigate('Create Account')}>
              <Text style={styles.txt5}>Create a New Account</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  main: {
    flex: 1,
    backgroundColor: '#E7F0FF',
  },
  txt: {
    fontFamily: 'Inter-Bold',
    fontSize: 35,
    color: 'black',
    marginTop: moderateScale(125, 0.1),
    marginLeft: moderateScale(23, 0.1),
  },
  txt2: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#565656',
    marginLeft: moderateScale(23, 0.1),
    marginTop: moderateScale(-2, 0.1),
  },
  inp: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: moderateScale(25, 0.1),
    paddingBottom: moderateScale(-5, 0.1),
    margin: moderateScale(8, 0.1),
    paddingLeft: moderateScale(-2, 0.1),
  },
  inpContainer: {
    marginTop: moderateScale(50, 0.1),
  },
  btn: {
    flex: 1,
    borderRadius: 40,
    marginHorizontal: moderateScale(25, 0.1),
    marginTop: moderateScale(25, 0.1),
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
  txt3: {
    color: '#6B6B6B',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  txt4: {
    textAlign: 'center',
    color: '#6B6B6B',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    marginTop: moderateScale(3, 0.1),
  },
  txt5: {
    fontFamily: 'Inter-Bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginTop: moderateScale(3, 0.1),
  },
});
