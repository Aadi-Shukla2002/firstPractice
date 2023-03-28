import {StyleSheet} from 'react-native';
import { color, fontSize } from 'theme';
import { fonts } from 'theme';
import { size } from 'theme';


export const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: color.backgroundTwo,
    },
    image1: {
      width: size.scale(150),
      height: size.verticalScale(150),
      marginTop: size.moderateScale(-50, 0.1),
      marginLeft: 'auto',
      marginRight: size.moderateScale(40,0.1),
      borderRadius: 250,
    },
    image2: {
      width: size.scale(80),
      height: size.verticalScale(80),
      marginTop: size.moderateScale(30, 0.1),
      marginLeft: 'auto',
      marginRight: size.moderateScale(25, 0.1),
      borderRadius: 250,
    },
    txt: {
      color: color.black,
      fontSize: fontSize.large,
      fontFamily: fonts.extraBold,
      letterSpacing: 0.01,
      marginLeft: size.moderateScale(20, 0.1),
      marginTop: size.moderateScale(135, 0.1),
      marginBottom: size.moderateScale(-28, 0.1),
    },
    txt2: {
      fontSize: fontSize.verySmall,
      fontFamily: fonts.regular,
      fontWeight: 600,
      marginLeft: size.moderateScale(25, 0.1),
      color: color.black,
    },
    txt3: {
      color: color.black,
      fontSize: fontSize.large,
      fontFamily: fonts.extraBold,
      marginLeft: size.moderateScale(20, 0.1),
      marginBottom: size.moderateScale(-8, 0.1),
    },
    btn: {
      flex: 1,
      borderRadius: 40,
      marginHorizontal: size.moderateScale(30, 0.1),
      marginTop: size.moderateScale(60, 0.1),
      marginBottom: size.moderateScale(80, 0.1),
      borderWidth: 1,
      backgroundColor: color.black,
      justifyContent: 'center',
    },
    btnTxt: {
      textAlign: 'center',
      color: color.white,
      fontFamily: fonts.regular,
      fontWeight: 'bold',
      fontSize: fontSize.small,
      paddingVertical: size.moderateScale(7, 0.1),
    },
  });
  