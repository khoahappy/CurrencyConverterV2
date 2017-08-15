import React, { PropTypes } from "react";
import { View, TouchableHighlight, Text, TextInput } from "react-native";
import styles from "./styles";
import color from "color";

const InputWithButton = props => {
  const { onPress, buttonText, editable = true, textColor } = props;
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModified
  );
  const buttonTextStyle = [
    styles.buttonText
  ];
  if(textColor){
    buttonTextStyle.push({
      color: textColor
    })
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        style={styles.buttonContainer}
        underlayColor={underlayColor}
        onPress={onPress}
      >
        <Text style={buttonTextStyle}>
          {buttonText}
        </Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

export default InputWithButton;
InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string
};
