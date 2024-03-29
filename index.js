const fetch = require('node-fetch');

async function GetAnimal(name){
    const response = await fetch('https://some-random-api.com/img/' + name)
    var json = await response.json()
    return json.link
}

module.exports.cat = await GetAnimal('cat')
module.exports.dog = await GetAnimal('dog')
module.exports.panda = await GetAnimal('panda')
module.exports.fox = await  GetAnimal('fox')
module.exports.koala = await GetAnimal('koala')
module.exports.redpanda = await GetAnimal('red_panda')
module.exports.bird = await GetAnimal('bird')
module.exports.raccoon = await GetAnimal('raccoon')
module.exports.kangaroo = await GetAnimal('kangaroo')
