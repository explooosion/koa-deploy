#!/usr/bin/env node

const path = require('path')
const meow = require('meow')
const version = meow().pkg.version

const p = path.dirname(__dirname)
console.log(p + '\\' + path.basename(__dirname))

const cli = meow(`
    Koa-Deploy
    $ koa-deplay -v
    version is ${version}

    $ koa-deplay -i
    package install now
    `)

const run = function (obj) {
    if (obj[0] == '-v') {
        console.log(`version is ${version}`)
    } else if (obj[0] == '-h') {
        console.log(cli.help)
    } else if (obj[0] == '-i') {
        console.log('package install now')
    }
}

run(process.argv.splice(2))