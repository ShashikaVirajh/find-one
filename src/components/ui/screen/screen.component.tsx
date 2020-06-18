import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';

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
  description,
  rightContent,
  rightContentStyles,
  onRightContentPress,
  children,
  containerStyles,
  contentStyles,
  withScrollView,
  showNavigationHeader,
  screenOnRefresh,
  screenRefreshing,
  footer,
  footerStyles,
}: IProps) => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const renderNavigationHeader = () => {
    if (showNavigationHeader) {
      return (
        <SafeAreaView>
          <View style={[styles.navigationHeader]}>
            {renderLeftContent()}
            {renderRightContent()}
          </View>
        </SafeAreaView>
      );
    }

    return null;
  };

  const renderLeftContent = () => {
    if (leftContent && typeof leftContent === 'string') {
      return (
        <TouchableOpacity onPress={() => onLeftContentPress()}>
          <Label style={[leftContentStyles]} text={leftContent} />
        </TouchableOpacity>
      );
    }

    if (leftContent) return leftContent;

    return <Icon icon={icons.CHEVRON_LEFT} color={colors.FOREGROUND} size={18} onPress={goBack} />;
  };

  const renderRightContent = () => {
    if (rightContent && typeof rightContent === 'string') {
      return (
        <TouchableOpacity onPress={() => onRightContentPress()}>
          <Label style={[rightContentStyles]} text={rightContent} />
        </TouchableOpacity>
      );
    }

    if (leftContent) return leftContent;

    return null;
  };

  const renderTitle = () => {
    const desc = description ? (
      <Label style={styles.description} type={Label.Types.HINT} text={description} />
    ) : null;

    if (title) {
      return (
        <View style={{ flexDirection: 'row' }}>
          <View
            style={[styles.titleContainer, !showNavigationHeader ? styles.titleTopMargin : null]}>
            <Label type={Label.Types.DISPLAY} text={title} />
            {desc}
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
      {renderNavigationHeader()}
      {renderTitle()}
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
  containerStyles?: Object;
  contentStyles?: object;
  withScrollView?: boolean;
  hideLeftButton?: boolean;
  showNavigationHeader?: boolean;
  screenOnRefresh: Function;
  screenRefreshing: boolean;
  footer: Function;
  footerStyles?: Object;
}

Screen.defaultProps = {
  hideLeftButton: false,
  withScrollView: true,
  showNavigationHeader: true,
  screenRefreshing: false,
  onLeftContentPress: () => {},
  onRightContentPress: () => {},
  screenOnRefresh: () => {},
  footer: () => {},
};

export default Screen;
