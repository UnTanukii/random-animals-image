const randomAnimalsImage = require('../index.js')

async function getKoalaImage(){
    const koala = await randomAnimalsImage.koala()
    console.log("Koala Image : " + koala)
}
getKoalaImage()