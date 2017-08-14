import React, { PropTypes } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";

import { connect } from "react-redux";

import { Container } from "../components/Container";
import { Header } from "../components/Headers";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";

import { swapCurrency, changeCurrencyAmount } from "../actions/currencies";

const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConversionDate: PropTypes.object
  };
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate("CurrencyList", { title: "Base Currency", type: "base" });
  };
  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate("CurrencyList", { title: "Quote Currency", type: "quote" });
  };
  handleChangeText = amount => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };
  handleSwapCurrency = () => {
    //console.log("Press swap currency");
    this.props.dispatch(swapCurrency());
  };
  handleOptionPress = () => {
    this.props.navigation.navigate("Options", { title: "Options" });
  };
  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = "...";
    }

    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            keyboardType="numeric"
            defaultValue={this.props.amount.toString()}
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            keyboardType="numeric"
            value={quotePrice}
            onChangeText={this.handleChangeText}
            editable={false}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConversionDate}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const amount = state.currencies.amount;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConversionDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date()
  };
};

export default connect(mapStateToProps)(Home);
