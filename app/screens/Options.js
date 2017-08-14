import React from "react";
import { ScrollView, StatusBar, Platform } from "react-native";
import { ListItem, Seperator } from "../components/List";
import { Ionicons } from "@expo/vector-icons";

const ICON_COLOR = "#868686";
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";

class Options extends React.Component {
  handleThemesPress = () => {
    console.log("Press theme");
  };
  handleSitePress = () => {
    console.log("Press site");
  };
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`} 
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Seperator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePressPress}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Seperator />
      </ScrollView>
    );
  }
}

export default Options;
