const randomAnimalsImage = require('../index.js')

async function getRedPandaImage(){
    const redpanda = await randomAnimalsImage.redpanda()
    console.log("Red Panda Image : " + redpanda)
}
getRedPandaImage()