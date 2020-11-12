import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

import TabBody from './tabBody';
import TabHeader from './tabHeader';

const TabView = ({ tabHeaders, children, handleCurrentTab }: IProps) => {
  const onClick = (index: number) => handleCurrentTab(index);

  return (
    <View style={styles.container}>
      <TabHeader tabHeaders={tabHeaders} onHeaderButtonPress={(index: number) => onClick(index)} />

      <TabBody>
        <View>{children}</View>
      </TabBody>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_GRAY,
    marginTop: getScaledNumber(30),
    marginHorizontal: getScaledNumber(-24),
    paddingHorizontal: getScaledNumber(24),
  },
});

interface IProps {
  tabHeaders: string[];
  children?: JSX.Element;
  handleCurrentTab: Function;
}

export default TabView;
