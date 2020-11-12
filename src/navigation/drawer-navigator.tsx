import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

import Deactivate from 'screens/deactivate/deactivate.component';
import Home from 'screens/home/home.container';
import Invite from 'screens/invite/invite.comonent';
import Profile from 'screens/profile/profile.comonent';
import Support from 'screens/support/support.component';

import { CustomDrawer } from 'components';

const DrawerStack = createDrawerNavigator();

const _renderCustomDrawer = (props: DrawerContentComponentProps) => (
  <CustomDrawer drawerProps={props} />
);

const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator drawerContent={_renderCustomDrawer}>
      <DrawerStack.Screen name='Home' component={Home} options={{ drawerLabel: 'Home' }} />
      <DrawerStack.Screen name='Profile' component={Profile} options={{ drawerLabel: 'Profile' }} />
      <DrawerStack.Screen name='Invite' component={Invite} options={{ drawerLabel: 'Invite' }} />
      <DrawerStack.Screen name='Support' component={Support} options={{ drawerLabel: 'Support' }} />
      <DrawerStack.Screen
        name='Deactivate'
        component={Deactivate}
        options={{ drawerLabel: 'Deactivate' }}
      />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
