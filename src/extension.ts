import * as vscode from 'vscode';

// This method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  console.log('🔱 BRAMHASTRA divine extension is now active!');

  // Register the command that is specified in package.json
  let disposable = vscode.commands.registerCommand('my-extension.helloWorld', () => {
    // Display a message box to the user with divine greeting
    vscode.window.showInformationMessage('🔱 Namaste! The divine power of BRAMHASTRA is at your service!');
  });

  context.subscriptions.push(disposable);
}

// This method is called when the extension is deactivated
export function deactivate() {
  console.log('🔱 BRAMHASTRA divine powers are now dormant');
} 