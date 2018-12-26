import React from 'react';
import PropTypes from 'prop-types';
import color from 'color';
import {
  View, Text, TextInput, TouchableHighlight,
} from 'react-native';
import styles from './style';

const InputWidthButton = (props) => {
  const { onPress, buttonText, editable = true } = props;
  const containerStyles = [styles.container];
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorTouching,
  );

  if (editable === false) {
    containerStyles.push(styles.containerDisable);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.textInput} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWidthButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWidthButton;
