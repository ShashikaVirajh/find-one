import React from 'react';
import { Text, View } from 'react-native';

import { VideoPlayer } from 'components';
import { VIDEO_URLS } from 'constants/common.constant';

const Profile = () => (
  <View style={{ flex: 1 }}>
    <Text>Profile</Text>
    <Text>Video Player</Text>
    <VideoPlayer source={VIDEO_URLS.APP_INTRO_VIDEO} />
  </View>
);

export default Profile;
