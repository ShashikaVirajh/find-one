import React from 'react';

import { Icon, Screen } from 'components/ui';
import { colors } from 'constants/colors.constant';
import { iconNames } from 'constants/icon-names.constant';

const Home = ({ navigation }: IProps) => {
  return (
    <Screen
      leftContent={
        <Icon
          icon={iconNames.MENU}
          color={colors.LIGHT_GREEN}
          size={25}
          onPress={navigation.openDrawer}
        />
      }></Screen>
  );
};

interface IProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

export default Home;
