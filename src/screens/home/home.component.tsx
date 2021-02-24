import React from 'react';

import { Icon, Screen } from 'components/ui';
import { colors } from 'constants/colors.constant';
import { icons } from 'constants/icons.constant';
import { getScaledNumber } from 'utils/common.utils';

const Home = ({ navigation }: Props) => {
  return (
    <Screen
      leftContent={
        <Icon
          icon={icons.MENU}
          color={colors.LIGHT_GREEN}
          size={getScaledNumber(25)}
          onPress={navigation.openDrawer}
        />
      }></Screen>
  );
};

interface Props {
  navigation: {
    navigate: (route: string) => void;
  };
}

export default Home;
