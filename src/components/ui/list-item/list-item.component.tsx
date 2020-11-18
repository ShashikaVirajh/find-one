import React from 'react';
import { Pressable, View } from 'react-native';

import { Label } from 'components/ui';

import { getScaledNumber } from 'utils/common.utils';
import styles from './list-item.styles';

const ListItem = ({
  testID,
  containerStyles,
  hideBorder,
  leftContent,
  leftContentStyles,
  leftTextSize,
  mainContent,
  mainContentStyles,
  mainTextSize,
  onPress,
  rightContent,
  rightContentStyles,
  rightTextSize,
  subContent,
  subContentStyles,
  subTextSize,
}: IProps) => {
  const height = hideBorder ? getScaledNumber(50) : getScaledNumber(80);
  const borderWidth = hideBorder ? 0 : 1;

  const _renderLeftContent = () => {
    if (leftContent && typeof leftContent === 'string') {
      return (
        <Label
          testID='leftContent'
          size={leftTextSize}
          style={[leftContentStyles]}
          text={leftContent}
        />
      );
    }

    if (leftContent) return leftContent;

    return null;
  };

  const _renderMainContent = () => {
    if (mainContent && typeof mainContent === 'string') {
      return (
        <Label
          testID='mainContent'
          size={mainTextSize}
          style={[mainContentStyles]}
          text={mainContent}
        />
      );
    }

    if (mainContent) return mainContent;

    return null;
  };

  const _renderRightContent = () => {
    if (rightContent && typeof rightContent === 'string') {
      return (
        <Label
          testID='rightContent'
          size={rightTextSize}
          style={[rightContentStyles]}
          text={rightContent}
        />
      );
    }

    if (rightContent) return rightContent;

    return null;
  };

  const _renderSubContent = () => {
    if (subContent && typeof subContent === 'string') {
      return (
        <Label
          testID='subContent'
          size={subTextSize}
          style={[subContentStyles]}
          text={subContent}
        />
      );
    }

    if (subContent) return subContent;

    return null;
  };

  return (
    <Pressable
      testID={testID}
      style={[styles.container, { height, borderWidth }, containerStyles]}
      onPress={() => onPress()}>
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
  testID: string;
  containerStyles?: Object;
  hideBorder?: boolean;
  leftContent?: string | JSX.Element;
  leftContentStyles?: Object;
  leftTextSize?: number;
  mainContent?: string | JSX.Element;
  mainContentStyles?: Object;
  mainTextSize?: number;
  onPress: Function;
  rightContent?: string | JSX.Element;
  rightContentStyles?: Object;
  rightTextSize?: number;
  subContent?: string | JSX.Element;
  subContentStyles?: Object;
  subTextSize?: number;
}

ListItem.defaultProps = {
  hideBorder: false,
  leftTextSize: 16,
  mainTextSize: 16,
  subTextSize: 14,
  rightTextSize: 16,
};

export default ListItem;
