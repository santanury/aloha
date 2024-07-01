import {Dimensions, StatusBar} from 'react-native';
import normalize from '../utils/helpers/normalize';
const {width, height, fontScale} = Dimensions.get('window');
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const FONTS = {
  IBMPlexMonoBold: 'IBMPlexMono-Bold',
  IBMPlexMonoBoldItalic: 'IBMPlexMono-BoldItalic',
  IBMPlexMonoExtraLight: 'IBMPlexMono-ExtraLight',
  IBMPlexMonoExtraLightItalic: 'IBMPlexMono-ExtraLightItalic',
  IBMPlexMonoItalic: 'IBMPlexMono-Italic',
  IBMPlexMonoLight: 'IBMPlexMono-Light',
  IBMPlexMonoLightItalic: 'IBMPlexMono-LightItalic',
  IBMPlexMonoMedium: 'IBMPlexMono-Medium',
  IBMPlexMonoMediumItalic: 'IBMPlexMono-MediumItalic',
  IBMPlexMonoRegular: 'IBMPlexMono-Regular',
  IBMPlexMonoSemiBold: 'IBMPlexMono-SemiBold',
  IBMPlexMonoSemiBoldItalic: 'IBMPlexMono-SemiBoldItalic',
  IBMPlexMonoThin: 'IBMPlexMono-Thin',
  IBMPlexMonoThinItalic: 'IBMPlexMono-ThinItalic',
};

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
  primary: '#008080',
  secondary: '#001A1A',
};

export const SIZES = {
  width,
  height,
  fontScale,
  STATUSBAR_HEIGHT,
  paddingSm: normalize(15),
  paddingMd: normalize(20),
  paddingLg: normalize(25),
  paddingHuge: normalize(30),
};

const appTheme = {
  FONTS,
  COLORS,
  SIZES,
};

export default appTheme;
