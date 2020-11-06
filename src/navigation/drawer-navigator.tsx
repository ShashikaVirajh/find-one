import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

import Deactivate from 'screens/deactivate/deactivate.component';
import Home from 'screens/home/home.container';
import Invite from 'screens/invite/invite.comonent';
import Profile from 'screens/profile/profile.comonent';
import Support from 'screens/support/support.component';

import { CustomDrawer } from 'components';

const Drawer = createDrawerNavigator();

const _renderCustomDrawer = (props: DrawerContentComponentProps) => (
  <CustomDrawer drawerProps={props} />
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={_renderCustomDrawer}>
      <Drawer.Screen name='Home' component={Home} options={{ drawerLabel: 'Home' }} />
      <Drawer.Screen name='Profile' component={Profile} options={{ drawerLabel: 'Profile' }} />
      <Drawer.Screen name='Invite' component={Invite} options={{ drawerLabel: 'Invite' }} />
      <Drawer.Screen name='Support' component={Support} options={{ drawerLabel: 'Support' }} />
      <Drawer.Screen
        name='Deactivate'
        component={Deactivate}
        options={{ drawerLabel: 'Deactivate' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
