import staticBanner from './components/StaticBanner';
import banner from './components/Banner';

export const StaticBanner = staticBanner;
export const Banner = banner;

if (__DEV__) require('./demo/index.js');
