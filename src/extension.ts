import * as vscode from 'vscode';

// This method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "BRAMHASTRA" is now active!');

  // Register the command that is specified in package.json
  let disposable = vscode.commands.registerCommand('my-extension.helloWorld', () => {
    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World from BRAMHASTRA Extension!');
  });

  context.subscriptions.push(disposable);
}

// This method is called when the extension is deactivated
export function deactivate() {} 