import React, { useCallback } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Grid, Card,
} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Banner, StaticBanner } from '../../index';

const useStyles = makeStyles((theme) => ({
  flex: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default React.memo(() => {
  const classes = useStyles();

  const handleOpenSmall = useCallback(() => StaticBanner.show({
    icon: <div />,
    label: 'This is an example of a static banner with one line of text.',
  }), []);

  const handleOpenLarge = useCallback(() => StaticBanner.show({
    buttonLabel: 'Tell me more...',
    buttonProps: {
      target: '_blank',
      rel: 'noopener noreferrer',
      href: 'https://www.google.com',
      style: {
        whiteSpace: 'nowrap',
      },
    },
    icon: <div />,
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan eget erat non sagittis. Proin aliquam consequat orci et ultrices. Praesent scelerisque magna non libero mollis volutpat. Vestibulum posuere, eros ut dignissim imperdiet, urna nunc gravida sem, id pulvinar dui metus et tellus. In hac habitasse platea dictumst.',
  }), []);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.flex}
          >
            Dashboard
          </Typography>

          <Button color="inherit" onClick={handleOpenSmall}>
            Static Banner 1
          </Button>

          <Button color="inherit" onClick={handleOpenLarge}>
            Static Banner 2
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.appBarSpacer} />

      <StaticBanner />

      <Grid container justify="center">
        <Grid item xs={3}>
          <Card>
            <Banner
              icon={<div />}
              iconProps={{
                className: classes.avatar,
              }}
              label="This is an example of a banner that can be embedded anywhere in your page"
              buttonLabel="Other"
              buttonProps={{
                variant: 'contained',
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
});
