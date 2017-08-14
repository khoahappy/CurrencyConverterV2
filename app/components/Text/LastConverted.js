import React, { PropTypes } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import moment from "moment";

import styles from "./styles";

const LastConverted = ({ base, quote, conversionRate, date }) =>
(<Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as  of {moment(date).format('L')}
</Text>);

export default LastConverted;

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number
};
