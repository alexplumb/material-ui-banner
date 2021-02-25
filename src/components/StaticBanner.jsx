import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Banner from './Banner';

export default class StaticBanner extends React.Component {
  static Instance;

  static displayName = 'MuiStaticBanner';

  static hide() {
    Banner.Instance.setState({
      open: false,
    });
  }

  static show({
    label = '',
    buttonLabel = '',
    buttonOnClick = () => {},
    buttonComponent = ButtonBase,
    buttonProps = {},
    showDismissButton = true,
    dismissButtonLabel = 'Dismiss',
    dismissButtonProps = {},
    icon = null,
    iconProps = {},
    cardProps = {},
    paperProps = {},
    appBar = false,
    onClose = () => {},
  }) {
    if (Banner.Instance) {
      Banner.Instance.setState({
        open: true,
        options: {
          ...Banner.Instance.state.options,
          label,
          buttonLabel,
          buttonOnClick,
          showDismissButton,
          dismissButtonLabel,
          dismissButtonProps,
          icon,
          iconProps,
          buttonProps,
          buttonComponent,
          cardProps,
          paperProps,
          appBar,
          onClose
        },
      });
    } else {
      console.warn('No banner found');
      console.warn(label);
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      options: {
        label: '',
        buttonLabel: '',
        buttonOnClick: () => {},
        buttonComponent: ButtonBase,
        buttonProps: {},
        showDismissButton: true,
        dismissButtonLabel: 'Dismiss',
        dismissButtonProps: {},
        icon: null,
        iconProps: {},
      },
    };

    Banner.Instance = this;
  }

  handleClose = () => {
    this.state.options.onClose();
    this.setState({ open: false });
  }

  render() {
    const { open, options } = this.state;

    return <Banner open={open} {...options} onClose={this.handleClose} appBar />;
  }
}
