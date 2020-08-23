import React from 'react';
import Video, { LoadError } from 'react-native-video';

import { ErrorTracker } from 'library';
import { toggleSpinner } from 'Redux/common/common.actions';
import { store } from 'Redux/store';
import styles from './video-player.styles';

const VideoPlayer = ({ source, ...otherProps }: IProps) => {
  const handleError = (error: LoadError) => {
    ErrorTracker.log('VIDEO_LOADING_ERROR', 'Error occured while loading the video', error);
  };

  const onLoadStart = () => {
    store.dispatch(toggleSpinner(true));
  };

  const onLoadEnd = () => {
    store.dispatch(toggleSpinner(false));
  };

  return (
    <Video
      source={{ uri: source }}
      controls
      onLoadStart={onLoadStart}
      onReadyForDisplay={onLoadEnd}
      resizeMode='stretch'
      onError={(error: LoadError) => handleError(error)}
      style={styles.videoPlayer}
    />
  );
};

interface IProps {
  source: string;
}

export default VideoPlayer;
