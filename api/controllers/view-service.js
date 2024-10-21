module.exports = {


  friendlyName: 'View service',


  description: 'Display "Service" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/service'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
