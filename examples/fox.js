const randomAnimalsImage = require('../index.js')

async function getFoxImage(){
    const fox = await randomAnimalsImage.fox()
    console.log("Fox Image : " + fox)
}
getFoxImage()