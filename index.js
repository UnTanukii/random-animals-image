const fetch = require('node-fetch');

module.exports.cat = async function(){
    const response = await fetch('https://aws.random.cat/meow')
    var json = await response.json()
    return json.file
}

module.exports.dog = async function(){
    const response = await fetch('https://random.dog/woof.json')
    var json = await response.json()
    return json.url
}

module.exports.panda = async function(){
    const response = await fetch('https://some-random-api.ml/img/panda')
    var json = await response.json()
    return json.link
}

module.exports.fox = async function(){
    const response = await fetch('https://some-random-api.ml/img/fox')
    var json = await response.json()
    return json.link
}

module.exports.koala = async function(){
    const response = await fetch('https://some-random-api.ml/img/koala')
    var json = await response.json()
    return json.link
}

module.exports.redpanda = async function(){
    const response = await fetch('https://some-random-api.ml/img/red_panda')
    var json = await response.json()
    return json.link
}

module.exports.bird = async function(){
    const response = await fetch('https://some-random-api.ml/img/bird')
    var json = await response.json()
    return json.link
}

module.exports.raccoon = async function(){
    const response = await fetch('https://some-random-api.ml/animal/raccoon')
    var json = await response.json()
    return json.image
}

module.exports.kangaroo = async function(){
    const response = await fetch('https://some-random-api.ml/animal/kangaroo')
    var json = await response.json()
    return json.image
}