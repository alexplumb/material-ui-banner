import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper, Card, Grid, Typography, Button, Divider, ButtonBase,
  CardActions, CardContent, Avatar, Hidden, Collapse,
} from '@material-ui/core';
import withStyles from '@material-ui/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'block',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '100%',
    },
  },
  cardContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  flex: {
    flexGrow: 1,
  },
  buttons: {
    alignSelf: 'flex-end',
    paddingLeft: '90px !important',
  },
  label: {
    alignSelf: 'center',
  }
});

@withStyles(styles)
export default class Banner extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string,
    buttonOnClick: PropTypes.func,
    buttonComponent: PropTypes.any,
    buttonProps: PropTypes.object,
    showDismissButton: PropTypes.bool,
    dismissButtonLabel: PropTypes.string,
    onClose: PropTypes.func,
    icon: PropTypes.element,
    iconProps: PropTypes.object,
    appBar: PropTypes.bool,

    paperProps: PropTypes.object,
    cardProps: PropTypes.object,
  }

  static defaultProps = {
    open: true,
    buttonOnClick: () => {},
    showDismissButton: true,
    dismissButtonLabel: 'Dismiss',
    appBar: false,
    buttonComponent: ButtonBase,
    buttonProps: {},
    iconProps: {},

    paperProps: {},
    cardProps: {},
  }

  static displayName = 'MuiBanner'

  renderButtons() {
    const {
      classes,
      onClose,
      showDismissButton,
      dismissButtonLabel,
      buttonOnClick,
      buttonLabel,
      buttonComponent,
      buttonProps,
    } = this.props;

    return (
      <>
        <span className={classes.flex} />

        <Grid item className={classes.buttons}>
          {showDismissButton && (
            <Button
              variant="text"
              onClick={onClose}
            >
              {dismissButtonLabel}
            </Button>
          )}

          {!!buttonLabel && (
            <Button
              variant="text"
              onClick={buttonOnClick}
              component={buttonComponent}
              {...buttonProps}
            >
              {buttonLabel}
            </Button>
          )}
        </Grid>
      </>
    )
  }

  render() {
    const {
      open,
      classes,
      label,
      icon,
      iconProps,
      appBar,
      showDismissButton,
      buttonLabel,
      paperProps,
      cardProps,
    } = this.props;

    const hasButton = Boolean(showDismissButton || buttonLabel);

    return (
      <Collapse in={open}>
        <Paper elevation={0} className={classes.root} {...paperProps}>
          <Card elevation={0} className={appBar ? classes.appBar : ''} {...cardProps}>
            <CardContent className={classes.cardContent}>
              <Grid
                container
                wrap="nowrap"
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                {icon && (
                  <Grid item>
                    <Avatar className={classes.avatar} {...iconProps}>
                      {icon}
                    </Avatar>
                  </Grid>
                )}

                <Grid item className={classes.label}>
                  <Typography variant="body2">
                    {label}
                  </Typography>
                </Grid>

                <Hidden smDown>
                  {appBar && hasButton && this.renderButtons()}
                </Hidden>
              </Grid>
            </CardContent>

            {!appBar && hasButton && (
              <Hidden smDown>
                <CardActions>
                  {this.renderButtons()}
                </CardActions>
              </Hidden>
            )}

            {hasButton && (
              <Hidden mdUp>
                <CardActions>
                  {this.renderButtons()}
                </CardActions>
              </Hidden>
            )}

            <Hidden smDown>
              <div />
            </Hidden>
          </Card>

          <Divider />
        </Paper>
      </Collapse>
    );
  }
}
