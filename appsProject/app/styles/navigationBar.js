import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const centuryFontName = 'Century Gothic';
const gt320 = '@media (min-width: 321)';

const navigationBar = EStyleSheet.create({
  SafeAreaView: {
    paddingVertical: 0,
  },
  header: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(250,250,250,0.5)',
    paddingTop: 0,
    height: 61,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontFamily: centuryFontName,
    justifyContent: 'flex-start',
    fontSize: 21,
    [gt320]: {
      fontSize: 22,
    },
  },
  titleImage: {
    height: 22,
    resizeMode: 'contain',
    width: '100%',
    ...Platform.select({
      android: {
        alignSelf: 'center',
      },
    }),
  },
  button: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0, // Required to override View overflow
    marginRight: 0, // Required to override View overflow
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 0,
  },
  iconWrapper: {
    width: 48,
  },
  icon: {
    textAlign: 'center',
  },
});

export default navigationBar;
