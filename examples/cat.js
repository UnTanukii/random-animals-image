const randomAnimalsImage = require('../index.js')

async function getCatImage(){
    const cat = await randomAnimalsImage.cat()
    console.log(cat)
}
getCatImage()