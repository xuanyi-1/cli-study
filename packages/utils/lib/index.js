const log=require('./log')


if(process.argv.includes('--debug')||process.argv.includes('-d')){
  log.level='verbose'
}else{
  log.level='info'
}

log.heading='帅哥脚手架'

// log.addLevel()

module.exports={
  log
}