import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { routes } from 'constants/routes.constant';
import { Analytics } from 'library';

import { CustomImage, Icon, Label, ListItem } from 'components/ui';
import { colors } from 'constants/colors.constant';
import { icons } from 'constants/icons.constant';
import { HomeLogo } from 'constants/images.constants';
import { DrawerItem } from 'types/data.types';

import styles from './custom-drawer.styles';

const CustomDrawer = React.memo(({ userName, drawerProps, signOut }: Props) => {
  const handleDrawerNavigation = (route: string, options: Object) => {
    drawerProps.navigation.navigate(route, options);
    drawerProps.navigation.closeDrawer();
  };

  const renderDrawerItems = () =>
    DRAWER_ITEMS.map(({ key, icon, text, screen, options }) => (
      <ListItem
        testID={key}
        key={key}
        hideBorder
        leftContent={icon}
        mainContent={text}
        onPress={() => handleDrawerNavigation(screen, options)}
      />
    ));

  const handleSignOut = () => {
    signOut();
    Analytics.endSession();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomImage
        testID='homeLogo'
        containerStyle={styles.imageContainer}
        imageStyle={styles.image}
        source={HomeLogo}
      />

      <ScrollView style={styles.itemContainer}>
        <Label size={18} text={`Hi, ${userName}`} style={styles.header} />

        {renderDrawerItems()}
        <ListItem
          testID='signOut'
          hideBorder
          leftContent={
            <Icon testID='signOut' icon={icons.SIGN_OUT} color={colors.LIGHT_GREEN} size={25} />
          }
          mainContent='Log Out'
          onPress={handleSignOut}
        />
      </ScrollView>
    </SafeAreaView>
  );
});

interface Props {
  drawerProps: DrawerContentComponentProps;
  userName?: string;
  signOut: Function;
}

const DRAWER_ITEMS: DrawerItem[] = [
  {
    key: 'home',
    icon: <Icon icon={icons.PASSWORD} color={colors.LIGHT_GREEN} size={25} />,
    text: 'Home',
    screen: routes.HOME_SCREEN,
    options: {},
  },
  {
    key: 'profile',
    icon: <Icon icon={icons.USER} color={colors.LIGHT_GREEN} size={25} />,
    text: 'My Profile',
    screen: routes.PROFILE_SCREEN,
    options: {},
  },
  {
    key: 'invite',
    icon: <Icon icon={icons.INVITE} color={colors.LIGHT_GREEN} size={25} />,
    text: 'Invite People',
    screen: routes.INVITE_SCREEN,
    options: {},
  },
  {
    key: 'support',
    icon: <Icon icon={icons.SUPPORT} color={colors.LIGHT_GREEN} size={25} />,
    text: 'Contact Support',
    screen: routes.SUPPORT_SCREEN,
    options: {},
  },
  {
    key: 'deactivate',
    icon: <Icon icon={icons.DEACTIVATE} color={colors.LIGHT_GREEN} size={25} />,
    text: 'Deactivate Account',
    screen: routes.DEACTIVATE_SCREEN,
    options: {},
  },
];

export default CustomDrawer;
