const { workspace, window } = require('vscode');
const postLog = require('./postLog')

let settings = workspace.getConfiguration("makerlog")

const log = () => {
  window.showInputBox({
    placeHolder: "What did you do today?",
  }).then(content => {
    console.log(content);
    // REVIEW Work on the status name
    window.showInformationMessage(content, 'Done', 'To Do').then(status => {
      console.log(status);
      let contentStatus;
      if (status = 'Done') {
        contentStatus = true;
      } else if (status = 'To Do') {
        contentStatus = false;
      }
      console.log(contentStatus);
      postLog(settings.webhook, content, contentStatus)
      // TODO Show status that the log has been posted
    })
  })
}

module.exports = log