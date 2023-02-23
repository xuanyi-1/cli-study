import log from "npmlog";

import isDebug from "./isDebug.js";

if(isDebug()){
    log.level='verbose'
  }else{
    log.level='info'
  }
  
  log.heading='帅哥脚手架'
  
  // log.addLevel()

export default log