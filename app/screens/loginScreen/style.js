import {StyleSheet} from 'react-native';
import { color, fontSize } from 'theme';
import { fonts } from 'theme';
import { size } from 'theme';

export const styles = StyleSheet.create({
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
  main: {
    flex: 1,
    backgroundColor: color.backgroundTwo,
  },
  txt: {
    fontFamily: fonts.bold,
    fontSize: fontSize.medium,
    color: color.black,
    marginTop: size.moderateScale(125, 0.1),
    marginLeft: size.moderateScale(23, 0.1),
  },
  txt2: {
    fontFamily: fonts.regular,
    fontSize: fontSize.verySmall,
    color: color.gray,
    marginLeft: size.moderateScale(23, 0.1),
    marginTop: size.moderateScale(-2, 0.1),
  },
  inp: {
    borderBottomWidth: 1,
    borderBottomColor: color.black,
    marginHorizontal: size.moderateScale(25, 0.1),
    paddingBottom: size.moderateScale(-5, 0.1),
    margin: size.moderateScale(8, 0.1),
    paddingLeft: size.moderateScale(-2, 0.1),
  },
  inpContainer: {
    marginTop: size.moderateScale(50, 0.1),
  },
  btn: {
    flex: 1,
    borderRadius: 40,
    marginHorizontal: size.moderateScale(25, 0.1),
    marginTop: size.moderateScale(25, 0.1),
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
  txt3: {
    color: color.backgroundFont,
    fontFamily: fonts.regular,
    fontSize: fontSize.extraSmall,
    textAlign: 'center',
  },
  txt4: {
    textAlign: 'center',
    color: color.backgroundFont,
    fontFamily: fonts.regular,
    fontSize: fontSize.extraSmall,
    marginTop: size.moderateScale(3, 0.1),
  },
  txt5: {
    fontFamily: fonts.bold,
    color: color.black,
    textAlign: 'center',
    fontSize: fontSize.extraSmall,
    textDecorationLine: 'underline',
    marginTop: size.moderateScale(3, 0.1),
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: size.moderateScale(205, 0.1),
  },
});
