const fs = require( 'fs' );

module.exports.ls = () => {
  fs.readdir( './', ( err, files ) => {
    const output = files.reduce( ( acc, file ) => {
      return `${ acc } ${ file }`;
    }, '' );
    console.log( output );
  } );
};

module.exports.touch = ( filename ) => {
  fs.open( filename, 'a', ( err, fd ) => {
    if ( err ) { return console.log( err ) }
    fs.close( fd, ( err ) => {
      if ( err ) { return console.log( err ) }
      console.log( `Touched ${ filename }` );
    } );
  } );
};

module.exports.mkdir = ( dirname ) => {
  fs.mkdir( dirname, ( err ) => {
    if ( err ) { return console.log( err ) }
    console.log( `Created ${ dirname }` );
  } );
};
