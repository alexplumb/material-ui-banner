import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Grid, Card,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Banner, StaticBanner } from '../../index';

const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
});

@withStyles(styles)
export default class App extends React.Component {
  handleOpenSmall = () => StaticBanner.show({
    icon: <div />,
    body: 'This is an example of a static banner with one line of text.',
  });

  handleOpenLarge = () => StaticBanner.show({
    icon: <div />,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan eget erat non sagittis. Proin aliquam consequat orci et ultrices. Praesent scelerisque magna non libero mollis volutpat. Vestibulum posuere, eros ut dignissim imperdiet, urna nunc gravida sem, id pulvinar dui metus et tellus. In hac habitasse platea dictumst.',
  });

  render() {
    const { classes } = this.props;

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

            <Button color="inherit" onClick={this.handleOpenSmall}>
              Static Banner 1
            </Button>

            <Button color="inherit" onClick={this.handleOpenLarge}>
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
                body="This is an example of a banner that can be embedded anywhere in your page"
              />
            </Card>
          </Grid>
        </Grid>
      </>
    );
  }
}
