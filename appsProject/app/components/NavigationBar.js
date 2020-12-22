import React from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
import { Header, Body, Left, Right, Button, Icon, Text } from 'native-base';
import PropTypes from 'prop-types';
import styles from '../styles/navigationBar';

const logo = require('../../images/logo_white.png');

const propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  left: PropTypes.node,
  leftIcon: PropTypes.string,
  onLeftButtonPress: PropTypes.func,
  right: PropTypes.node,
  rightIcon: PropTypes.string,
  onRightButtonPress: PropTypes.func,
  leftIconStyle: PropTypes.object,
  rightIconStyle: PropTypes.object,
};

const defaultProps = {
  title: null,
  subtitle: null,
  left: null,
  leftIcon: 'arrow-back',
  onLeftButtonPress: null,
  right: null,
  rightIcon: 'md-more',
  onRightButtonPress: null,
  leftIconStyle: null,
  rightIconStyle: null,
};

const generateIconButton = (icon, onPress, iconStyle) => (
  <Button transparent style={styles.button} onPress={onPress}>
    <View style={styles.iconWrapper}>
      <Icon style={iconStyle || styles.icon} name={icon} />
    </View>
  </Button>
);

const NavigationBar = (props) => {
  const {
    title,
    titleStyle,
    subtitle,
    subtitleStyle,
    onCenterComponentPressed,
    left,
    leftIcon,
    onLeftButtonPress,
    right,
    rightIcon,
    onRightButtonPress,
    leftIconStyle,
    rightIconStyle,
  } = props;

  let leftComponent = null;
  let rightComponent = null;
  let centerComponent = <Image style={styles.titleImage} source={logo} />;
  const showLeftComponent = !!left || (leftIcon && !!onLeftButtonPress);
  const showRightComponent = !!right || (rightIcon && !!onRightButtonPress);

  if (title || subtitle) {
    centerComponent = (
      <TouchableWithoutFeedback onPress={onCenterComponentPressed}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {title ? (
            <Text numberOfLines={1} style={[styles.title, titleStyle]}>
              {title}
            </Text>
          ) : null}
          {subtitle ? (
            <Text numberOfLines={1} style={[styles.subtitle, subtitleStyle]}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  if (showLeftComponent) {
    leftComponent =
      left || generateIconButton(leftIcon, onLeftButtonPress, leftIconStyle);
  }

  if (showRightComponent) {
    rightComponent =
      right ||
      generateIconButton(rightIcon, onRightButtonPress, rightIconStyle);
  }

  return (
    <Header style={styles.header}>
      <Left>{leftComponent}</Left>
      <Body style={styles.body}>{centerComponent}</Body>
      <Right>{rightComponent}</Right>
    </Header>
  );
};

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;

export default NavigationBar;
