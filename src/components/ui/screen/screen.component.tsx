import React from 'react';
import { Pressable, RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Icon, Label } from 'components/ui';
import { icons } from 'constants/icons.constant';
import styles from './screen.styles';

import { colors } from 'constants/colors.constant';

const Screen = ({
  leftContent,
  onLeftContentPress,
  leftContentStyles,
  title,
  hideBackButton,
  description,
  rightContent,
  rightContentStyles,
  onRightContentPress,
  children,
  containerStyles,
  contentStyles,
  withScrollView,
  showHeader,
  screenOnRefresh,
  screenRefreshing,
  footer,
  footerStyles,
}: IProps) => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const renderHeader = () => {
    const desc = description ? (
      <Label size={14} style={styles.description} text={description} />
    ) : null;

    if (showHeader) {
      return (
        <SafeAreaView>
          <View style={[styles.navigationHeader]}>
            {renderLeftContent()}
            {renderTitle()}
            {renderRightContent()}
          </View>

          {desc}
        </SafeAreaView>
      );
    }

    return null;
  };

  const renderLeftContent = () => {
    if (leftContent && typeof leftContent === 'string') {
      return (
        <Pressable onPress={() => onLeftContentPress()}>
          <Label style={[leftContentStyles]} text={leftContent} />
        </Pressable>
      );
    }

    if (leftContent) return leftContent;

    if (!hideBackButton) {
      return (
        <Icon icon={icons.CHEVRON_LEFT} color={colors.FOREGROUND} size={18} onPress={goBack} />
      );
    }

    return <View />;
  };

  const renderRightContent = () => {
    if (rightContent && typeof rightContent === 'string') {
      return (
        <Pressable onPress={() => onRightContentPress()}>
          <Label style={[rightContentStyles]} text={rightContent} />
        </Pressable>
      );
    }

    if (rightContent) return rightContent;

    return <View />;
  };

  const renderTitle = () => {
    if (title) {
      return (
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.titleContainer, !showHeader ? styles.titleTopMargin : null]}>
            <Label size={28} text={title} />
          </View>
        </View>
      );
    }
  };

  const renderContent = () => {
    if (withScrollView) {
      return (
        <>
          <ScrollView
            style={contentStyles}
            scrollIndicatorInsets={{ right: 1 }}
            keyboardShouldPersistTaps='always'
            contentInsetAdjustmentBehavior='automatic'
            {...handleRefreshScreen()}>
            <SafeAreaView>{children}</SafeAreaView>
          </ScrollView>

          {renderFooter()}
        </>
      );
    }

    return <SafeAreaView style={[styles.content, contentStyles]}>{children}</SafeAreaView>;
  };

  const renderFooter = () => {
    if (footer) {
      return <SafeAreaView style={[styles.footer, footerStyles]}>{footer()}</SafeAreaView>;
    }

    return null;
  };

  const handleRefreshScreen = () => {
    if (screenOnRefresh) {
      return <RefreshControl refreshing={screenRefreshing} onRefresh={() => screenOnRefresh()} />;
    }

    return {};
  };

  return (
    <View style={[styles.container, containerStyles]}>
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

interface IProps {
  leftContent?: string | JSX.Element;
  onLeftContentPress: Function;
  leftContentStyles?: Object;
  title?: string;
  description?: string;
  rightContent?: string | JSX.Element;
  rightContentStyles?: Object;
  onRightContentPress: Function;
  children?: object;
  hideBackButton?: boolean;
  containerStyles?: Object;
  contentStyles?: object;
  withScrollView?: boolean;
  hideLeftButton?: boolean;
  showHeader?: boolean;
  screenOnRefresh: Function;
  screenRefreshing: boolean;
  footer: Function;
  footerStyles?: Object;
}

Screen.defaultProps = {
  hideLeftButton: false,
  withScrollView: true,
  showHeader: true,
  screenRefreshing: false,
  hideBackButton: false,
  onLeftContentPress: () => {},
  onRightContentPress: () => {},
  screenOnRefresh: () => {},
  footer: () => {},
};

export default Screen;
