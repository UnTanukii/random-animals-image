const randomAnimalsImage = require('../index.js')

async function getDogImage(){
    const dog = await randomAnimalsImage.dog()
    console.log("Dog Image : " + dog)
}
getDogImage()