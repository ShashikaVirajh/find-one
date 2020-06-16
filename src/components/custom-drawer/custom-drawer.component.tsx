import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { DrawerContentComponentProps } from '@react-navigation/drawer';

import { CustomImage, Icon, Label, ListItem } from 'components/ui';
import { colors } from 'constants/colors.constant';
import { icons } from 'constants/icons.constant';
import { HomeLogo } from 'constants/images.constants';
import { IDrawerItem } from 'types/data.types';

import styles from './custom-drawer.styles';

const CustomDrawer = React.memo(({ firstName, lastName, drawerProps, signOut }: IProps) => {
  const navigateToRoute = (route: string, options: Object) => {
    drawerProps.navigation.navigate(route, options);
    drawerProps.navigation.closeDrawer();
  };

  const _renderDrawerItems = () =>
    DRAWER_ITEMS.map(({ key, icon, text, screen, options }) => (
      <ListItem
        key={key}
        hideBorder
        leftContent={icon}
        mainContent={text}
        onContainerPress={() => navigateToRoute(screen, options)}
      />
    ));

  const handleSignOut = () => signOut();

  return (
    <SafeAreaView style={styles.container}>
      <CustomImage
        containerStyle={styles.imageContainer}
        imageStyle={styles.image}
        source={HomeLogo}
      />

      <ScrollView style={styles.itemContainer}>
        <Label
          text={`Hi, ${firstName} ${lastName}`}
          type={Label.Types.MEDIUM}
          style={styles.header}
        />

        {_renderDrawerItems()}
        <ListItem
          hideBorder
          leftContent={<Icon icon={icons.SIGN_OUT} color={colors.LIGHT_GREEN} size={25} />}
          mainContent='Log Out'
          onContainerPress={handleSignOut}
        />
      </ScrollView>
    </SafeAreaView>
  );
});

interface IProps {
  drawerProps: DrawerContentComponentProps;
  firstName?: string;
  lastName?: string;
  signOut: Function;
}

const DRAWER_ITEMS: IDrawerItem[] = [
  {
    key: 'Profile',
    icon: <Icon icon={icons.USER} color={colors.LIGHT_GREEN} size={25} />,
    text: 'My Profile',
    screen: 'Profile',
    options: {},
  },
  {
    key: 'Invite',
    icon: <Icon icon={icons.INVITE} color={colors.LIGHT_GREEN} size={25} />,
    text: 'Invite People',
    screen: 'Invite',
    options: {},
  },
  {
    key: 'Support',
    icon: <Icon icon={icons.SUPPORT} color={colors.LIGHT_GREEN} size={25} />,
    text: 'Contact Support',
    screen: 'Support',
    options: {},
  },
  {
    key: 'Deactivate',
    icon: <Icon icon={icons.DEACTIVATE} color={colors.LIGHT_GREEN} size={25} />,
    text: 'Deactivate Account',
    screen: 'Deactivate',
    options: {},
  },
];

export default CustomDrawer;
