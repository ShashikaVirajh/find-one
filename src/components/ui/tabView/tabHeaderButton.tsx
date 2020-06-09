import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Label } from 'components/ui';

import { colors } from 'constants/colors.constant';

const TabHeaderButton = ({
  headerLabel,
  borderBottomWidth,
  buttonOpacity,
  onTabHeaderPress,
}: IProps) => (
  <TouchableOpacity style={styles.container} onPress={() => onTabHeaderPress()}>
    <View style={[styles.tabText, { borderBottomWidth, opacity: buttonOpacity }]}>
      <Label type={Label.Types.DISPLAY} text={headerLabel} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    width: 140,
  },
  tabText: {
    borderBottomColor: colors.LIGHT_BLUE,
  },
});

interface IProps {
  headerLabel: string;
  borderBottomWidth: number;
  buttonOpacity: number;
  onTabHeaderPress: Function;
}

TabHeaderButton.defaultProps = {
  borderBottomWidth: 0,
  buttonOpacity: 0.5,
};

export default TabHeaderButton;
