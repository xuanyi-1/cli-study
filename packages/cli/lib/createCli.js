import path from "node:path";
import { program } from "commander";
import { log } from "@lyd/utils";
import { dirname } from "dirname-filename-esm";
import fse from "fs-extra";
import semver from "semver";

const __dirname = dirname(import.meta);
const pkgPath = path.resolve(__dirname, "../package.json");
const pkg = fse.readJsonSync(pkgPath);

const LOWEST_NODE_VERSION = "14.0.0";

function checkNodeVersion() {
  log.verbose("node version", process.version);
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(`cli 需要安装${LOWEST_NODE_VERSION}以上版本的Node.js`);
  }
}

function preAction() {
  checkNodeVersion();
}


export default function createCli(){
    log.info("version", pkg.version);
    program
      .name(Object.keys(pkg.bin)[0])
      .usage("<command> [options]")
      .version(pkg.version)
      .option("-d,--debug", "是否开启调试模式", false)
      .hook("preAction", preAction);

program.on('option:debug',function(){
    if(program.opts().debug){
        log.verbose('debug','debug模式已经开启')
    }
})

program.on('command:*',function(obj){
    log.error('未知命令：'+obj[0])
})

return program
}