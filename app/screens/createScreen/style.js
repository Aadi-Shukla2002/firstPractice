import { StyleSheet } from "react-native";
import { color, fontSize } from "theme";
import { fonts } from "theme";
import { size } from "theme";


export const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: color.backgroundOne,
    },
    head: {
      fontSize: fontSize.medium,
      fontFamily: fonts.bold,
      marginLeft: size.moderateScale(25, 0.1),
      marginTop: size.moderateScale(115, 0.1),
      color: color.black,
      marginBottom: size.moderateScale(15, 0.1),
    },
    inp: {
      borderBottomWidth: 1,
      borderBottomColor: color.black,
      marginHorizontal: size.moderateScale(32, 0.1),
      paddingBottom: size.moderateScale(-5, 0.1),
      margin: size.moderateScale(8, 0.1),
      paddingLeft: size.moderateScale(-2, 0.1),
    },
    btn: {
      flex: 1,
      borderRadius: 40,
      marginHorizontal: size.moderateScale(25, 0.1),
      marginTop: size.moderateScale(20, 0.1),
      marginBottom: size.moderateScale(10, 0.1),
      borderWidth: 1,
      backgroundColor: color.black,
      justifyContent: 'center',
      padding: size.moderateScale(5, 0.1),
    },
    btnTxt: {
      textAlign: 'center',
      color: color.white,
      fontFamily: fonts.regular,
      fontSize: fontSize.small,
      paddingBottom: size.moderateScale(5, 0.1),
    },
    btn2: {
      textAlign: 'center',
      fontSize: fontSize.extraSmall,
      fontFamily: fonts.regular,
      color: color.placeholderTextColor2,
    },
    btn3: {
      textAlign: 'center',
      fontSize: fontSize.extraSmall,
      fontFamily: fonts.bold,
      color: color.black,
      textDecorationLine: 'underline',
    },
    arrow: {
      marginLeft: size.moderateScale(20, 0.1),
      marginTop: size.moderateScale(23, 0.1),
      backgroundColor: color.black,
      height: size.verticalScale(25),
      width: size.scale(25),
      padding: size.moderateScale(7, 0.1),
      borderRadius: 25,
      justifyContent: 'center',
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: size.moderateScale(170, 0.1),
      },
  });
  

