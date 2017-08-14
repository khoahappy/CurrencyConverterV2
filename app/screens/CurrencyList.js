import React, { PropTypes } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { ListItem, Seperator } from '../components/List';
import currencies from '../data/currency';

const TEMP_CURRENT_CURRENCY = 'CAD';

export default class CurrencyList extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }
  handlePress = () => {
    this.props.navigation.goBack(null);
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
              checkmark
              visible
            />
          )}
          ItemSeparatorComponent={Seperator}
        />
      </View>
    );
  }
}
