import React, { PropTypes } from "react";
import { View, ScrollView, Text, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { ListItem, Seperator } from "../components/List";

const styles = EStyleSheet.create({
  $blue: "$primaryBlue",
  $green: "$primaryGreen",
  $orange: "$primaryOrange",
  $purple: "$primaryPurple"
});

class Themes extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  handleThemesPress = color => {
    //console.log("Press theme: " + color);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handleThemesPress(styles.$blue)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Seperator />
        <ListItem
          text="Orange"
          onPress={() => this.handleThemesPress(styles.$orange)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Seperator />
        <ListItem
          text="Green"
          onPress={() => this.handleThemesPress(styles.$green)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Seperator />
        <ListItem
          text="Purple"
          onPress={() => this.handleThemesPress(styles.$purple)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Seperator />
      </ScrollView>
    );
  }
}
export default Themes;
