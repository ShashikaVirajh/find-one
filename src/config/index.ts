/* istanbul ignore file */
import ENV from '../../env/env.json';

export const DEV_APP = __DEV__;

export const ENVIRONMENT = ENV.ENVIRONMENT;

export const BASE_URL = ENV.BASE_URL;

export const SENTRY_DSN = ENV.SENTRY_DSN;

export const REMOTE_CONFIG_MINIMUM_FETCH_INTERVAL = ENV.REMOTE_CONFIG_MINIMUM_FETCH_INTERVAL;
