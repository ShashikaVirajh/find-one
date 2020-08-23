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
      controls={otherProps.controls}
      repeat={otherProps.repeat}
      onLoadStart={onLoadStart}
      onReadyForDisplay={onLoadEnd}
      resizeMode={otherProps.videoResizeMode}
      onError={(error: LoadError) => handleError(error)}
      style={styles.videoPlayer}
    />
  );
};

interface IProps {
  controls: boolean;
  source: string;
  repeat: false;
  videoResizeMode: 'stretch' | 'contain' | 'cover' | 'none' | undefined;
}

VideoPlayer.defaultProps = {
  videoResizeMode: 'stretch',
  repeat: true,
  controls: true,
};

export default VideoPlayer;
