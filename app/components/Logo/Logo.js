import React, { PropTypes } from "react";
import { View, Image, Text, Keyboard, Animated, Platform } from "react-native";
import styles from "./styles";
const ANIMATION_DURATION = 250;

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    let showListener = "keyboardWillShow", hideListener = "keyboardWillHide";
    if (Platform.OS === "android") {
      showListener = "keyboardDidShow";
      hideListener = "keyboardDidHide";
    }
    //keyboardWillShow will not fire on Android device
    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow
    );

    //keyboardWillHide will not fire on Android device
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide
    );
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    //console.log("kb show");
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };
  keyboardHide = () => {
    //console.log("kb hide");
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };
  render() {
    const containerImageStyle = [
      styles.containerImage,
      {
        width: this.containerImageWidth,
        height: this.containerImageWidth
      }
    ];
    const imageStyle = [
      styles.image,
      {
        width: this.imageWidth,
        height: this.imageWidth,       
      },
      this.props.tintColor? {tintColor: this.props.tintColor}:null
    ];
    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          source={require("./images/background.png")}
          style={containerImageStyle}
        >
          <Animated.Image
            resizeMode="contain"
            source={require("./images/logo.png")}
            style={imageStyle}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}
