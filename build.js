'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single',
  borderColor: 'magenta'
}

const accentColor = text => chalk.rgb(45, 113, 166)(text)

const data = {
  name: chalk.green.bold('      Fumitaka, Yoshikane'),
  handle: chalk.blue.bold('blackbracken'),

  labelWork: chalk.white('       Work:'),
  work: chalk.white('An undergraduate in CS'),

  labelTwitter: chalk.white('    Twitter:'),
  twitter: chalk.white('https://twitter.com/') + accentColor('black_bracken'),

  labelGitHub: chalk.white('     GitHub:'),
  github: chalk.white('https://github.com/') + accentColor('blackbracken'),

  labelWeb: chalk.white('        Web:'),
  web: chalk.white('https://') + accentColor('bracken.black'),

  labelMail: chalk.white('       Mail:'),
  mail: chalk.white('me@') + accentColor('bracken.black')
}

const newline = '\n'
const heading = `${data.name} ! ${data.handle}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const mailing = `${data.labelMail}  ${data.mail}`

const output = heading +
  newline + newline +
  webing + newline +
  mailing + newline +
  twittering + newline +
  githubing

fs.writeFileSync(path.join(__dirname, 'bin/output'), boxen(output, options))
