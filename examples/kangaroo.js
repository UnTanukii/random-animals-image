const randomAnimalsImage = require('../index.js')

async function getKangarooImage(){
    const kangaroo = await randomAnimalsImage.kangaroo()
    console.log("Kangaroo Image : " + kangaroo)
}
getKangarooImage()