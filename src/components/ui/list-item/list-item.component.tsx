import React from 'react';
import { Pressable, View } from 'react-native';

import { Label } from 'components/ui';

import { Utils } from 'library';
import styles from './list-item.styles';

const ListItem = ({
  containerStyles,
  hideBorder,
  leftContent,
  leftContentStyles,
  leftTextSize,
  mainContent,
  mainContentStyles,
  mainTextSize,
  onContainerPress,
  rightContent,
  rightContentStyles,
  rightTextSize,
  subContent,
  subContentStyles,
  subTextSize,
}: IProps) => {
  const height = hideBorder ? Utils.getScaledNumber(50) : Utils.getScaledNumber(80);
  const borderWidth = hideBorder ? Utils.getScaledNumber(0) : Utils.getScaledNumber(1);

  const _renderLeftContent = () => {
    if (leftContent && typeof leftContent === 'string') {
      return <Label size={leftTextSize} style={[leftContentStyles]} text={leftContent} />;
    }

    if (leftContent) return leftContent;

    return null;
  };

  const _renderMainContent = () => {
    if (mainContent && typeof mainContent === 'string') {
      return <Label size={mainTextSize} style={[mainContentStyles]} text={mainContent} />;
    }

    if (mainContent) return mainContent;

    return null;
  };

  const _renderRightContent = () => {
    if (rightContent && typeof rightContent === 'string') {
      return <Label size={rightTextSize} style={[rightContentStyles]} text={rightContent} />;
    }

    if (rightContent) return rightContent;

    return null;
  };

  const _renderSubContent = () => {
    if (subContent && typeof subContent === 'string') {
      return <Label size={subTextSize} style={[subContentStyles]} text={subContent} />;
    }

    if (subContent) return subContent;

    return null;
  };

  return (
    <Pressable
      style={[styles.container, { height, borderWidth }, containerStyles]}
      onPress={() => onContainerPress()}>
      <View style={[styles.leftContent, leftContentStyles]}>{_renderLeftContent()}</View>
      <View style={styles.mainContent}>
        <View>{_renderMainContent()}</View>
        <View>{_renderSubContent()}</View>
      </View>
      <View>{_renderRightContent()}</View>
    </Pressable>
  );
};

interface IProps {
  containerStyles?: Object;
  hideBorder?: boolean;
  leftContent?: string | JSX.Element;
  leftContentStyles?: Object;
  leftTextSize?: number;
  mainContent?: string | JSX.Element;
  mainContentStyles?: Object;
  mainTextSize?: number;
  onContainerPress: Function;
  rightContent?: string | JSX.Element;
  rightContentStyles?: Object;
  rightTextSize?: number;
  subContent?: string | JSX.Element;
  subContentStyles?: Object;
  subTextSize?: number;
}

ListItem.defaultProps = {
  hideBorder: false,
  leftTextSize: Utils.getScaledNumber(16),
  mainTextSize: Utils.getScaledNumber(16),
  subTextSize: Utils.getScaledNumber(14),
  rightTextSize: Utils.getScaledNumber(16),
  onContainerPress: () => {},
  onLeftContentPress: () => {},
  onMainContentPress: () => {},
  onRightContentPress: () => {},
  onSubContentPress: () => {},
};

export default ListItem;
