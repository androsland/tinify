const fs = require('fs');
var tinify = require("tinify");

const srcFolder = './';
const destFolder = './compressed/';
const supported = [ 'jpg','png' ];

if ( process.argv.length < 3 ){
    console.log( 'Usage: node compress.js [image-extension]' );
    return;
}

var fileType = process.argv[2];
if ( supported.indexOf( fileType ) == -1 ){
    console.log( 'Filetypes supported: jpn, png' );
    return;
}

tinify.key = "Y8-B_it2Ok7mZNojdQf0mRUBudYDVaTe";
tinify.validate(function (err) {
    // Validation of API key failed.
    if (err) throw err;
});

if ( !fs.existsSync( destFolder ) ) {
    fs.mkdirSync( destFolder );
}

fs.readdirSync(srcFolder).forEach( file => {
    if (fs.lstatSync(srcFolder + file).isFile()){
        
        if (file.indexOf(fileType) > -1) {
            
            console.log(file);
            console.log('=======');
            
            var source = tinify.fromFile(file);

            // TODO Handle errors
            source.toFile( destFolder + file );
            
        }

    }    
});





