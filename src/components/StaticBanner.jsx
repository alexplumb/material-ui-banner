import React from 'react';
import Banner from './Banner';

export default class StaticBanner extends React.Component {
  static Instance;

  static hide() {
    Banner.Instance.setState({
      open: false,
    });
  }

  static show({
    body = '',
    buttonLabel = '',
    buttonOnClick = () => {},
    showDismissButton = true,
    dismissButtonLabel = 'Dismiss',
    icon = null,
  }) {
    if (Banner.Instance) {
      Banner.Instance.setState({
        open: true,
        options: {
          ...Banner.Instance.state.options,
          body,
          buttonLabel,
          buttonOnClick,
          showDismissButton,
          dismissButtonLabel,
          icon,
        },
      });
    } else {
      console.warn('No banner found');
      console.warn(body);
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      options: {
        body: '',
        buttonLabel: '',
        buttonOnClick: () => {},
        showDismissButton: true,
        dismissButtonLabel: 'Dismiss',
        icon: null,
      },
    };

    Banner.Instance = this;
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { open, options } = this.state;

    return <Banner open={open} onClose={this.handleClose} {...options} appBar />;
  }
}
