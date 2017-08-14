import React, { PropTypes } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";

const ClearButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={require("./images/icon.png")}
          resizeMode="contain"
          style={styles.icon}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClearButton;

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
};
