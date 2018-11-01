const terminalCommands = require( './terminal-commands.js' );

terminalCommands.ls();

terminalCommands.touch( 'test-touch.txt' );

terminalCommands.mkdir( 'test-mkdir' ); // initial create
//terminalCommands.mkdir( 'test-mkdir' ); // ERROR, dir exists
