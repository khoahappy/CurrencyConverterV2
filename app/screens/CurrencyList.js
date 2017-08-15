import React, { PropTypes } from "react";
import { View, FlatList, StatusBar } from "react-native";
import { connect } from "react-redux";

import { ListItem, Seperator } from "../components/List";

import currencies from "../data/currency";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

const TEMP_CURRENT_CURRENCY = "CAD";

class CurrencyList extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string
  };
  handlePress = currency => {
    const { type } = this.props.navigation.state.params;
    if (type === "base") {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };
  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === "quote") {
      comparisonCurrency = this.props.quoteCurrency;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          keyExtractor={item => item}
          renderItem={({ item }) =>
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              checkmark
              visible
              iconBackground={this.props.primaryColor}
            />}
          ItemSeparatorComponent={Seperator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.themes.primaryColor
  };
};
export default connect(mapStateToProps)(CurrencyList);
