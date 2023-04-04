const fs = require('fs');
const pdf2img = require('pdf-img-convert');

let index = 0;
fs.readdirSync('./input').forEach((file) => {
  index++;
  outputImg = pdf2img.convert('./input/' + file);
  outputImg.then((outputImgs)  => {
    const fileName = file.replace('.pdf','');
    let subFolder = '';
    if (outputImgs.length > 1) {
      subFolder = fileName + '/'
      if (!fs.existsSync("./output/" + subFolder)){
        fs.mkdirSync("./output/" + subFolder);
      }
    }
    for (i = 0; i < outputImgs.length; i++)
      fs.writeFile("./output/" + subFolder + file.replace('.pdf','') +i+ ".png", outputImgs[i], function (error) {
        if (error) { console.error("Error: " + error);
      }
    });
  }).catch(function (e) {
    console.log(e);
  });
  if (index % 50 == 0) {
    console.log('resolved: ' + index)
  }
})
