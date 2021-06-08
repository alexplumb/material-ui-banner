import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Paper, Card, Grid, Typography,
  Button, Divider, ButtonBase, CardActions,
  CardContent, Avatar, Collapse, Container,
} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import { Hide, useIsMobile } from './Hide';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardContent: {
    paddingBottom: 8,
    paddingRight: 8,
  },
  cardContentIconAppBar: {
    paddingLeft: 16,
    paddingTop: 16,
  },
  cardContentIconAppBarMobile: {
    paddingLeft: 16,
    paddingTop: 24,
  },
  cardContentIconNoAppBar: {
    paddingLeft: 16,
    paddingTop: 24,
  },
  cardContentNoIconAppBar: {
    paddingLeft: 24,
    paddingTop: 8,
  },
  cardContentNoIconNoAppBar: {
    paddingLeft: 16,
    paddingTop: 24,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: 40,
    width: 40,
  },
  flex: {
    flexGrow: 1,
  },
  buttons: {
    whiteSpace: 'nowrap',
    alignSelf: 'flex-end',
    paddingLeft: '90px !important',
  },
  label: {
    alignSelf: 'center',
  }
}), { name: 'MuiBanner' });

const MuiBanner = React.forwardRef(({
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
}, ref) => {
  const classes = useStyles();

  const isMobile = useIsMobile();

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
    <Collapse in={open} ref={ref}>
      <Paper elevation={0} className={classes.root} {...paperProps}>
        <Card elevation={0} {...containerProps} {...cardProps}>
          <CardContent
            className={clsx(
              classes.cardContent,
              icon && appBar && !isMobile && classes.cardContentIconAppBar,
              icon && appBar && isMobile && classes.cardContentIconAppBarMobile,
              icon && !appBar && classes.cardContentIconNoAppBar,
              !icon && appBar && classes.cardContentNoIconAppBar,
              !icon && !appBar && classes.cardContentNoIconNoAppBar,
            )}
          >
            <Grid
              container
              wrap="nowrap"
              spacing={appBar ? 3 : 2}
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              {icon && (
                <Grid item>
                  <Avatar
                    className={classes.avatar}
                    sx={{
                      bgcolor: 'primary.main',
                    }}
                    {...iconProps}
                  >
                    {icon}
                  </Avatar>
                </Grid>
              )}

              <Grid item className={classes.label}>
                <Typography variant="body2">
                  {label}
                </Typography>
              </Grid>

              <Hide mdDown>
                {appBar && hasButton && renderButtons}
              </Hide>
            </Grid>
          </CardContent>

          {!appBar && hasButton && (
            <Hide mdDown>
              <CardActions>
                {renderButtons}
              </CardActions>
            </Hide>
          )}

          {hasButton && (
            <Hide mdUp>
              <CardActions>
                {renderButtons}
              </CardActions>
            </Hide>
          )}

          <Hide mdDown>
            <div />
          </Hide>
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
