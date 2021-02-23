import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

import Deactivate from 'screens/deactivate/deactivate.component';
import Home from 'screens/home/home.container';
import Invite from 'screens/invite/invite.comonent';
import Profile from 'screens/profile/profile.comonent';
import Support from 'screens/support/support.component';

import { CustomDrawer } from 'components';
import { routes } from 'constants/routes.constant';

const Drawer = createDrawerNavigator();

const renderCustomDrawer = (props: DrawerContentComponentProps) => (
  <CustomDrawer drawerProps={props} />
);

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={renderCustomDrawer}>
    <Drawer.Screen name={routes.HOME_SCREEN} component={Home} />
    <Drawer.Screen name={routes.PROFILE_SCREEN} component={Profile} />
    <Drawer.Screen name={routes.INVITE_SCREEN} component={Invite} />
    <Drawer.Screen name={routes.SUPPORT_SCREEN} component={Support} />
    <Drawer.Screen name={routes.DEACTIVATE_SCREEN} component={Deactivate}/>
  </Drawer.Navigator>
);

export default DrawerNavigator;
