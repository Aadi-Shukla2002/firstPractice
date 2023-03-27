import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export function FirstScreen({navigation}) {
  return (
    <View style={styles.main}>
      <Image style={styles.image2} source={require('../theme/images/image2.jpeg')} />
      <Image style={styles.image1} source={require('../theme/images/image1.jpeg')} />
      <Text style={styles.txt}>Let's Get</Text>
      <Text style={styles.txt3}>Started</Text>
      <Text style={styles.txt2}>Grow Together</Text>
      <Pressable
        onPress={() => navigation.navigate('Create Account')}
        style={styles.btn}
        android_ripple={{color: 'white'}}>
        <Text style={styles.btnTxt}>Join now</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E7F0FF',
  },
  image1: {
    width: scale(150),
    height: verticalScale(150),
    marginLeft: moderateScale(170, 0.1),
    marginTop: moderateScale(69, 0.1),
    borderRadius: 250,
  },
  image2: {
    position: 'absolute',
    width: scale(80),
    height: verticalScale(80),
    marginTop: moderateScale(30, 0.1),
    marginLeft: moderateScale(250, 0.1),
    borderRadius: 250,
  },
  txt: {
    color: 'black',
    fontSize: 63,
    fontFamily: 'Inter-ExtraBold',
    letterSpacing: 0.01,
    marginLeft: moderateScale(20, 0.1),
    marginTop: moderateScale(135, 0.1),
    marginBottom: moderateScale(-28, 0.1),
  },
  txt2: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    fontWeight: 600,
    marginLeft: moderateScale(25, 0.1),
    color: 'black',
  },
  txt3: {
    color: 'black',
    fontSize: 63,
    fontFamily: 'Inter-ExtraBold',
    marginLeft: moderateScale(20, 0.1),
    marginBottom: moderateScale(-8, 0.1),
  },
  btn: {
    flex: 1,
    borderRadius: 40,
    marginHorizontal: moderateScale(30, 0.1),
    marginTop: moderateScale(61, 0.1),
    marginBottom: moderateScale(81, 0.1),
    borderWidth: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  btnTxt: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: moderateScale(5, 0.1),
  },
});
