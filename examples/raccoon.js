const randomAnimalsImage = require('../index.js')

async function getRaccoonImage(){
    const raccoon = await randomAnimalsImage.raccoon()
    console.log("Raccoon Image : " + raccoon)
}
getRaccoonImage()