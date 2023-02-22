#!/usr/bin/env node

const importLocal=require('import-local')

const entry=require('../lib/index')
if (importLocal(__filename)){

} else {
  entry(process.argv.slice(2))
}