const randomAnimalsImage = require('../index.js')

async function getPandaImage(){
    const panda = await randomAnimalsImage.panda()
    console.log("Panda Image : " + panda)
}
getPandaImage()