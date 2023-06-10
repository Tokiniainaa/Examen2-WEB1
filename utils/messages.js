const moment = require('moment'); 

function formatMessage(yourName, text) {
  return {
    yourName,
    text,
    time: moment().format('h:mm a')
  };
}

function notification(text) {
  return {
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = {
  formatMessage,
  notification
}