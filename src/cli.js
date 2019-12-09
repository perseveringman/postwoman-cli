#! /usr/bin/env node

'use strict'

const showBanner = require('node-banner');

const {
  showHelpInformation,
  showVersionInformation,
  showUnknownOptionInformation,
  showInvalidArgsInformation } = require('./utils/helpers');

// parse args
const [, , ...args] = process.argv;

if (!args.length) {
  (async () => {
    await showHelpInformation()
  })();
} else if (args.length > 1 || !args[0].includes('-')) {
  showInvalidArgsInformation();
} else if (['--help', '-h'].includes(args[0])) {
  showHelpInformation();
} else if (['--version', '-v'].includes(args[0])) {
  showVersionInformation();
} else {
  showUnknownOptionInformation(args[0]);
}