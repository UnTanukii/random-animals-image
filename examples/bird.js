const randomAnimalsImage = require('../index.js')

async function getBirdImage(){
    const bird = await randomAnimalsImage.bird()
    console.log("Bird Image : " + bird)
}
getBirdImage()