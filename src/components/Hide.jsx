import { useMediaQuery } from '@material-ui/core';

/**
 * Checks whether or not the current device is a mobile device, based on device width
 */
const useIsMobile = () => useMediaQuery((theme) => theme.breakpoints.down('md'), { noSsr: true });

export const Hide = ({ mdUp = false, mdDown = false, children }) => {
  const isMobile = useIsMobile();

  if (mdUp && isMobile) {
    return null;
  }

  if (mdDown && !isMobile) {
    return null;
  }

  return children;
};
