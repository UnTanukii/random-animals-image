const randomAnimalsImage = require('../index.js')

async function getCatImage(){
    const cat = await randomAnimalsImage.cat()
    console.log("Cat Image : " + cat)
}
async function getDogImage(){
    const dog = await randomAnimalsImage.dog()
    console.log("Dog Image : " + dog)
}
async function getPandaImage(){
    const panda = await randomAnimalsImage.panda()
    console.log("Panda Image : " + panda)
}
async function getFoxImage(){
    const fox = await randomAnimalsImage.fox()
    console.log("Fox Image : " + fox)
}
async function getKoalaImage(){
    const koala = await randomAnimalsImage.koala()
    console.log("Koala Image : " + koala)
}
async function getRedPandaImage(){
    const redpanda = await randomAnimalsImage.redpanda()
    console.log("Red Panda Image : " + redpanda)
}
async function getBirdImage(){
    const bird = await randomAnimalsImage.bird()
    console.log("Bird Image : " + bird)
}
async function getRaccoonImage(){
    const raccoon = await randomAnimalsImage.raccoon()
    console.log("Raccoon Image : " + raccoon)
}
async function getKangarooImage(){
    const kangaroo = await randomAnimalsImage.kangaroo()
    console.log("Kangaroo Image : " + kangaroo)
}

getCatImage()
//=> get cat image link
getDogImage()
//=> get dog image link
getPandaImage()
//=> get panda image link
getFoxImage()
//=> get fox image link
getKoalaImage()
//=> get koala image link
getRedPandaImage()
//=> get red panda image link
getBirdImage()
//=> get bird image link
getRaccoonImage()
//=> get raccoon image link
getKangarooImage()
//=> get kangaroo image link