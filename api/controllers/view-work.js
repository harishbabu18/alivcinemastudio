module.exports = {


  friendlyName: 'View work',


  description: 'Display "WORK" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/work'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
