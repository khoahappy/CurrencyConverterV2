import React, { PropTypes } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import Icon from "./Icon";

const ListItem = ({
  text,
  onPress,
  selected = false,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground
}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground}/> : <Icon />}
        {customIcon}
      </View>
    </TouchableHighlight>
  );
};
export default ListItem;
ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string
};
