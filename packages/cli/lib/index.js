const commander=require('commander')
const createInitCommand=require('@lyd/init')
const {log,isDebug}=require('@lyd/utils')
const {program}=commander
const semver=require('semver')
const pkg=require('../package.json')


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

module.exports=function(args){
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