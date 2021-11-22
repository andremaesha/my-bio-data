const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const googleCloud = path.resolve(__dirname, 'certificate/googleCloud');
const destinationGoogleCloud = path.resolve(__dirname, 'src/images/certificate');

const dicoding = path.resolve(__dirname, 'certificate/dicoding');
const destinationDicoding = path.resolve(__dirname, 'src/images/certificate/dicoding');

if (!(fs.existsSync(destinationGoogleCloud) && fs.existsSync(destinationDicoding))) {
    fs.mkdirSync(destinationGoogleCloud);
    fs.mkdirSync(destinationDicoding);
}

fs.readdirSync(googleCloud).forEach(image => {

    // change image size with width 480px, and prefix -small.jpg
    sharp(`${googleCloud}/${image}`)
    .resize(480)
    .toFile(path.resolve(__dirname, `${destinationGoogleCloud}/${image.split('.').slice(0, -1).join('.')}-small.jpg`));
});

fs.readdirSync(dicoding).forEach(image => {

    // change image size with width 480px, and prefix -small.jpg
    sharp(`${dicoding}/${image}`)
    .resize(480)
    .toFile(path.resolve(__dirname, `${destinationDicoding}/${image.split('.').slice(0, -1).join('.')}-small.jpg`));
});