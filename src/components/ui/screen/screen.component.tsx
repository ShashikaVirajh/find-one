import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Icon, Label } from 'components/ui';
import { iconNames } from 'constants/icon-names.constant';
import styles from './screen.styles';

import { colors } from 'constants/colors.constant';

const Screen = ({
  leftContent,
  onLeftContentPress,
  leftContentStyles,
  title,
  description,
  rightButtonText,
  rightButtonLabelStyles,
  rightButtonOnPress,
  children,
  containerStyles,
  contentStyles,
  withScrollView,
  showNavigationHeader,
  screenOnRefresh,
  screenRefreshing,
  footer,
}: IProps) => {
  const navigation = useNavigation();
  const _goBack = () => navigation.goBack();

  const _renderNavigationHeader = () => {
    if (showNavigationHeader) {
      return (
        <SafeAreaView>
          <View style={[styles.navigationHeader]}>
            {_renderLeftContent()}
            {_renderRightButton()}
          </View>
        </SafeAreaView>
      );
    }

    return null;
  };

  const _renderLeftContent = () => {
    if (leftContent && typeof leftContent === 'string') {
      return (
        <TouchableOpacity onPress={() => onLeftContentPress()}>
          <Label style={[leftContentStyles]} text={leftContent} />
        </TouchableOpacity>
      );
    }

    if (leftContent) return leftContent;

    return (
      <Icon icon={iconNames.CHEVRON_LEFT} color={colors.FOREGROUND} size={18} onPress={_goBack} />
    );
  };

  const _renderRightButton = () => (
    <TouchableOpacity style={styles.rightButton} onPress={() => rightButtonOnPress()}>
      <Label
        type={Label.Types.DISPLAY}
        text={rightButtonText}
        style={[{ color: colors.DARK_GRAY }, rightButtonLabelStyles]}
      />
    </TouchableOpacity>
  );

  const _renderTitle = () => {
    const desc = description ? (
      <Label style={styles.description} type={Label.Types.HINT} text={description} />
    ) : null;

    if (title) {
      return (
        <View style={[styles.titleContainer, !showNavigationHeader ? styles.titleTopMargin : null]}>
          <Label type={Label.Types.DISPLAY} text={title} />
          {desc}
        </View>
      );
    }
  };

  const _renderContent = () => {
    if (withScrollView) {
      return (
        <>
          <ScrollView
            style={contentStyles}
            scrollIndicatorInsets={{ right: 1 }}
            contentInsetAdjustmentBehavior='automatic'
            {..._handleRefreshScreen()}>
            <SafeAreaView>{children}</SafeAreaView>
          </ScrollView>
          {_renderFooter()}
        </>
      );
    }

    return <SafeAreaView style={[styles.content, contentStyles]}>{children}</SafeAreaView>;
  };

  const _renderFooter = () => {
    if (footer) return <SafeAreaView>{footer()}</SafeAreaView>;
    return null;
  };

  const _handleRefreshScreen = () => {
    if (screenOnRefresh) {
      return <RefreshControl refreshing={screenRefreshing} onRefresh={() => screenOnRefresh()} />;
    }

    return {};
  };

  return (
    <View style={[styles.container, containerStyles]}>
      {_renderNavigationHeader()}
      {_renderTitle()}
      {_renderContent()}
    </View>
  );
};

interface IProps {
  leftContent?: string | JSX.Element;
  onLeftContentPress: Function;
  leftContentStyles?: Object;
  title?: string;
  description?: string;
  rightButtonText?: string;
  rightButtonLabelStyles?: Object;
  rightButtonOnPress: Function;
  children?: object;
  containerStyles?: Object;
  contentStyles?: object;
  withScrollView?: boolean;
  hideLeftButton?: boolean;
  showNavigationHeader?: boolean;
  screenOnRefresh: Function;
  screenRefreshing: boolean;
  footer: Function;
}

Screen.defaultProps = {
  hideLeftButton: false,
  withScrollView: true,
  showNavigationHeader: true,
  screenRefreshing: false,
  onLeftContentPress: () => {},
  rightButtonOnPress: () => {},
  screenOnRefresh: () => {},
  footer: () => {},
};

export default Screen;
