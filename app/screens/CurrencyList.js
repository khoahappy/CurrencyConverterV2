import React from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import { ListItem, Seperator } from "../components/List";
import currencies from "../data/currency";

const TEMP_CURRENT_CURRENCY = "CAD";

export default class CurrencyList extends React.Component {
  handlePress = () => {
    console.log("row pressed");
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
              checkmark={true}
              visible={true}
            />
          )}
          ItemSeparatorComponent={Seperator}
        />
      </View>
    );
  }
}
