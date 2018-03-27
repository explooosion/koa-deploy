#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const meow = require('meow')
const version = require('./package.json').version;

const cli = meow(`
    To get version use '-v'
    $ koa-deplay -v
    Version is ${version}

    To install template use '-i [Project Name]'
    $ koa-deplay -i [Project Name]
    Installing...
    `)

const run = function (obj) {

    if (obj[0] == '-v') {
        console.log(`Version: ${version}`)
    } else if (obj[0] == '-h') {
        console.log(cli.help)

    } else if (obj[0] == '-i') {

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
    console.info('Creating:' + target)
    fs.mkdirSync(target, 777)
}

async function install(source, target) {
    console.info('Installing...')
    fse.copy(source, target, err => {
        if (err) return console.error(err)
        console.info('Success! Please npm install')
    })
}

run(process.argv.splice(2))