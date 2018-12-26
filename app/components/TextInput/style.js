import EStyleSheet from 'react-native-extended-stylesheet';
import StyleSheet from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorTouching: 0.1,

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '$white',
    marginVertical: 12,
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
  },
  containerDisable: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    backgroundColor: '$white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    color: '$primaryBlue',
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
  },
  textInput: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputColor',
  },
  border: {
    height: INPUT_HEIGHT,
    backgroundColor: '$borderColor',
    width: StyleSheet.hairlineWidth,
  },
});
