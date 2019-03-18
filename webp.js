/* Handles conversion of images into webp.
   To run, type 'node webp.js' in console. */

   const imagemin = require('imagemin');
const webp = require("imagemin-webp");
const outputFolder = "./static/images/";
const PNG = './static/images/*.png';
const JPG = './static/images/*.jpg';

// Run imagemin on all pngs, and make sure that output is lossless
imagemin([PNG], outputFolder, {
    plugins: [webp({lossless: true})]
});

// Run imagemin on all jpgs, and make sure that output is moderate quality.
imagemin([JPG], outputFolder, {
    plugins: [webp({quality: 65})]
});

