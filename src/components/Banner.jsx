import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Paper, Card, Grid, Typography, Button, Divider, ButtonBase,
  CardActions, CardContent, Avatar, Hidden, Collapse, Container,
} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
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
}));

const MuiBanner = React.memo(({
  open,
  label,
  icon,
  iconProps,
  appBar,
  showDismissButton,
  dismissButtonLabel,
  dismissButtonProps,
  buttonOnClick,
  buttonLabel,
  buttonComponent,
  buttonProps,
  paperProps,
  cardProps,
  onClose,
}) => {
  const classes = useStyles();

  const hasButton = Boolean(showDismissButton || buttonLabel);
  const renderButtons = useMemo(() => (
    <>
      <span className={classes.flex} />

      <Grid item className={classes.buttons}>
        {showDismissButton && (
          <Button
            variant="text"
            onClick={onClose}
            {...dismissButtonProps}
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
  ), [showDismissButton, onClose, dismissButtonProps, dismissButtonLabel, buttonOnClick, buttonLabel, buttonComponent, buttonProps]);

  let containerProps = {};

  if (appBar) {
    containerProps = {
      component: Container,
      maxWidth: 'lg',
    };
  }

  return (
    <Collapse in={open}>
      <Paper elevation={0} className={classes.root} {...paperProps}>
        <Card elevation={0} {...containerProps} {...cardProps}>
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
                {appBar && hasButton && renderButtons}
              </Hidden>
            </Grid>
          </CardContent>

          {!appBar && hasButton && (
            <Hidden smDown>
              <CardActions>
                {renderButtons}
              </CardActions>
            </Hidden>
          )}

          {hasButton && (
            <Hidden mdUp>
              <CardActions>
                {renderButtons}
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
});

MuiBanner.propTypes = {
  open: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  buttonOnClick: PropTypes.func,
  buttonComponent: PropTypes.any,
  buttonProps: PropTypes.object,
  showDismissButton: PropTypes.bool,
  dismissButtonLabel: PropTypes.string,
  dismissButtonProps: PropTypes.object,
  onClose: PropTypes.func,
  icon: PropTypes.element,
  iconProps: PropTypes.object,
  appBar: PropTypes.bool,

  paperProps: PropTypes.object,
  cardProps: PropTypes.object,
};

MuiBanner.defaultProps = {
  open: true,
  buttonOnClick: () => {},
  showDismissButton: true,
  dismissButtonLabel: 'Dismiss',
  dismissButtonProps: {},
  appBar: false,
  buttonComponent: ButtonBase,
  buttonProps: {},
  iconProps: {},

  paperProps: {},
  cardProps: {},
};

MuiBanner.displayName = 'MuiBanner';

export default MuiBanner;
