const log=require('npmlog')
const isDebug=require('./isDebug')
if(isDebug()){
    log.level='verbose'
  }else{
    log.level='info'
  }
  
  log.heading='帅哥脚手架'
  
  // log.addLevel()
module.exports=log