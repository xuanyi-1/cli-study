import path from "node:path";
import {program  } from "commander";
import createInitCommand from "@lyd/init";
import { log,isDebug } from "@lyd/utils";
import { dirname } from 'dirname-filename-esm';
import fse from "fs-extra";
import semver from "semver";

const __dirname = dirname(import.meta);
const pkgPath=path.resolve(__dirname,'../package.json')
const pkg=fse.readJsonSync(pkgPath)


const LOWEST_NODE_VERSION='14.0.0'

function checkNodeVersion(){
       log.verbose('node version',process.version)
       if(!semver.gte(process.version,LOWEST_NODE_VERSION)){
              throw new Error(`cli 需要安装${LOWEST_NODE_VERSION}以上版本的Node.js`)
       }
       console.log(111)
}

function preAction(){
       checkNodeVersion()
}

//脚手架异常监听
process.on('uncaughtException',(e)=>{
       if(isDebug()){
              console.log(e)
       }else{
              console.log(e.message)
       }
 
})

export default  function(args){
       log.info('version',pkg.version)
program.name(Object.keys(pkg.bin)[0])
       .usage('<command> [options]')
       .version(pkg.version)
       .option('-d,--debug','是否开启调试模式',false)
       .hook('preAction',preAction)

// program.command('init [name]')
//     .description('init project')
//     .option('-f,--force','是否强制更新',false)
//     .action((name,opts)=>{
//         console.log('init',name,opts)
//     })

createInitCommand(program)
program.parse(process.argv)
}