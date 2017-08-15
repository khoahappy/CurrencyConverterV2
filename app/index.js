import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";

import Navigator from "./config/routes";
import store from "./config/store";

import { AlertProvider } from "./components/Alert";

EStyleSheet.build({
  $primaryBlue: "#4f6d7a",
  $primaryOrange: "#d57a66",
  $primaryGreen: "#00bd9d",
  $primaryPurple: "#9e768f",

  $white: "#fff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $lightGray: "#f0f0f0",
  $darkText: "#343434"
});
const App = ({ dispatch, nav }) =>
  <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;
const mapStateToProps = state => ({
  nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App);
export default () =>
  <Provider store={store}>
    <AlertProvider>
      <AppWithNavigation />
    </AlertProvider>
  </Provider>;
