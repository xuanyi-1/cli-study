import { log, isDebug } from "@lyd/utils";


function printErrorLog(e,type){
    if(isDebug()){
        log.error(type,e)
    }else{
        log.error(type,e.message)
    }
}

//脚手架异常监听
process.on("uncaughtException",(e)=> printErrorLog(e,'error'));

process.on('unhandledRejection',(e)=>printErrorLog(e,'promise'))