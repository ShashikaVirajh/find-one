import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Label } from 'components/ui';

import styles from './list-item.styles';

const ListItem = ({
  leftContent,
  mainContent,
  subContent,
  rightContent,
  leftTextType,
  mainTextType,
  subTextType,
  rightTextType,
  containerStyles,
  leftContentStyles,
  mainContentStyles,
  subContentStyles,
  rightContentStyles,
  onContainerPress,
  // onLeftContentPress,
  // onMainContentPress,
  // onSubContentPress,
  // onRightContentPress,
  hideBorder,
}: IProps) => {
  const height = hideBorder ? 50 : 80;
  const borderWidth = hideBorder ? 0 : 1;

  const _renderLeftContent = () => {
    if (leftContent && typeof leftContent === 'string') {
      return <Label style={[leftContentStyles]} type={leftTextType} text={leftContent} />;
    }

    if (leftContent) return leftContent;

    return null;
  };

  const _renderMainContent = () => {
    if (mainContent && typeof mainContent === 'string') {
      return <Label style={[mainContentStyles]} type={mainTextType} text={mainContent} />;
    }

    if (mainContent) return mainContent;

    return null;
  };

  const _renderRightContent = () => {
    if (rightContent && typeof rightContent === 'string') {
      return <Label style={[rightContentStyles]} type={rightTextType} text={rightContent} />;
    }

    if (rightContent) return rightContent;

    return null;
  };

  const _renderSubContent = () => {
    if (subContent && typeof subContent === 'string') {
      return <Label style={[subContentStyles]} type={subTextType} text={subContent} />;
    }

    if (subContent) return subContent;

    return null;
  };

  return (
    <TouchableOpacity
      style={[styles.container, { height, borderWidth }, containerStyles]}
      onPress={() => onContainerPress()}>
      <View style={[styles.leftContent, leftContentStyles]}>{_renderLeftContent()}</View>
      <View style={styles.mainContent}>
        <View>{_renderMainContent()}</View>
        <View>{_renderSubContent()}</View>
      </View>
      <View>{_renderRightContent()}</View>
    </TouchableOpacity>
  );
};

export interface IProps {
  leftContent?: string | JSX.Element;
  leftTextType?: string;
  leftContentStyles?: Object;
  mainContent?: string | JSX.Element;
  subContent?: string | JSX.Element;
  rightContent?: string | JSX.Element;
  mainTextType?: string;
  subTextType?: string;
  rightTextType?: string;
  containerStyles?: Object;
  mainContentStyles?: Object;
  subContentStyles?: Object;
  rightContentStyles?: Object;
  onContainerPress: Function;
  // onLeftContentPress?: Function;
  // onMainContentPress?: Function;
  // onSubContentPress?: Function;
  // onRightContentPress?: Function;
  hideBorder?: boolean;
}

ListItem.defaultProps = {
  hideBorder: false,
  leftTextType: Label.Types.MEDIUM,
  mainTextType: Label.Types.MEDIUM,
  subTextType: Label.Types.SMALL,
  rightTextType: Label.Types.SMALL,
  onContainerPress: () => {},
  onLeftContentPress: () => {},
  onMainContentPress: () => {},
  onSubContentPress: () => {},
  onRightContentPress: () => {},
};

export default ListItem;
