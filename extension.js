const vscode = require('vscode');
const log = require('./log');

function activate(context) {

	console.log('Congratulations, your extension "makerlog" is now active!');
	let disposable = vscode.commands.registerCommand('extension.makerlog', function () {
		console.log('MakerLog extension is active!');
		vscode.window.showInformationMessage('MakerLog extension is active!');
		log()
	});
	context.subscriptions.push(disposable);
}
exports.activate = activate;

vscode.commands.registerCommand('extension.makerlogInput', function() {
	// TODO Improve the error logging functionality
	// command 'extension.makerlogInput' not found
	log();
});

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
