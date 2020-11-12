import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { getScaledNumber } from 'utils/common.utils';
import TabHeaderButton from './tabHeaderButton';

const TabHeader = ({ tabHeaders, onHeaderButtonPress }: IProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabPress = (index: number) => {
    onHeaderButtonPress(index);
    setSelectedTab(index);
  };

  return (
    <View style={styles.container}>
      {tabHeaders.map((tabHeader, index) => {
        return (
          <TabHeaderButton
            key={index}
            headerLabel={tabHeader}
            buttonOpacity={index === selectedTab ? 1 : 0.5}
            borderBottomWidth={index === selectedTab ? 1 : 0}
            onTabHeaderPress={() => handleTabPress(index)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: getScaledNumber(20),
  },
});

interface IProps {
  tabHeaders: string[];
  onHeaderButtonPress: Function;
}

export default TabHeader;
