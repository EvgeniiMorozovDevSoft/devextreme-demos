window.onload = function () {
  const viewModel = {
    doneButton: {
      icon: 'check',
      type: 'success',
      text: 'Done',
      onClick() {
        DevExpress.ui.notify('The Done button was clicked');
      },
    },

    weatherButton: {
      icon: '../../../../images/icons/weather.png',
      text: 'Weather',
      onClick() {
        DevExpress.ui.notify('The Weather button was clicked');
      },
    },

    sendButton: {
      icon: 'fa fa-envelope-o',
      text: 'Send',
      onClick() {
        DevExpress.ui.notify('The Send button was clicked');
      },
    },

    plusButton: {
      icon: 'plus',
      onClick() {
        DevExpress.ui.notify('The button was clicked');
      },
    },

    backButton: {
      icon: 'back',
      onClick() {
        DevExpress.ui.notify('The button was clicked');
      },
    },

    doneDisabledButton: {
      icon: 'check',
      type: 'success',
      text: 'Done',
      disabled: true,
    },

    weatherDisabledButton: {
      icon: '../../../../images/icons/weather.png',
      text: 'Weather',
      disabled: true,
    },

    sendDisabledButton: {
      icon: 'fa fa-envelope-o',
      text: 'Send',
      disabled: true,
    },

    plusDisabledButton: {
      icon: 'plus',
      disabled: true,
    },

    backDisabledButton: {
      icon: 'back',
      disabled: true,
    },
  };

  ko.applyBindings(viewModel, document.getElementById('demo'));
};
