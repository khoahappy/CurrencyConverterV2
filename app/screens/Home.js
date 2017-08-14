import React from "react";
import { View, Text, StatusBar, KeyboardAvoidingView } from "react-native";

import { Container } from "../components/Container";
import { Header } from "../components/Headers";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.94";
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

export default class Home extends React.Component {
  handlePressBaseCurrency = () => {
    console.log("clicked 1");
  };
  handlePressQuoteCurrency = () => {
    console.log("clicked 2");
  };
  handleChangeText = text => {
    console.log(text);
  };
  handleSwapCurrency = () => {
    console.log("Press swap currency");
  };
  handleOptionPress = () => {
    console.log("Press options");
  };
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency.bind(this)}
            keyboardType="numeric"
            defaultValue={TEMP_BASE_PRICE}
            onChangeText={this.handleChangeText.bind(this)}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency.bind(this)}
            keyboardType="numeric"
            value={TEMP_QUOTE_PRICE}
            onChangeText={this.handleChangeText.bind(this)}
            editable={false}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency.bind(this)}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
