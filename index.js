#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const meow = require('meow')
const version = meow().pkg.version

const cli = meow(`
    To get version use '-v'
    $ koa-deplay -v
    version is ${version}

    To install template use '-i [Project Name]'
    $ koa-deplay -i [Project Name]
    template install now...
    `)

const run = function (obj) {

    if (obj[0] == '-v') {
        console.log(`version is ${version}`)

    } else if (obj[0] == '-h') {
        console.log(cli.help)

    } else if (obj[0] == '-i') {

        console.log('template install now...')

        // Source Directory
        const lib = path.dirname(__filename) + '\\lib'

        // Creat Directory
        const folder = obj[1] == undefined ? '' : obj[1]
        const dir = path.join(process.cwd(), folder)

        if (!fs.existsSync(dir)) {
            create(dir)
        }
        install(lib, dir)
    }
}


async function create(target) {
    console.log('creating:' + target)
    fs.mkdirSync(target, 777)
}

async function install(source, target) {
    console.log('installing')
    fse.copy(source, target, err => {
        if (err) return console.error(err)
        console.log('success! please npm install')
    })
}

run(process.argv.splice(2))