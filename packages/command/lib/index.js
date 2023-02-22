class Command{
  constructor(instance){
if(!instance){
  throw new Error('command instance must not be null!!')
}
this.program=instance
const cmd=this.program.command(this.command)

cmd.description(this.description)
cmd.hook('preAction',()=>{
  this.preAction()
})
cmd.hook('postAction',()=>{
  this.postAction()
})
if(this.options?.length>0){
  this.options.forEach(option => {
    cmd.option(...option)
  });
}
// cmd.option('-f,--force','是否强制更新',false)
cmd.action((...params)=>{
  this.action(params)
      
    })
  }

get command(){
  throw new Error('command instance must not be null!!')
}

get description(){
  throw new Error('description instance must not be null!!')
}

get options(){
  return[]
}

get action(){
  throw new Error('action instance must not be null!!')
}

preAction(){}
postAction(){}  

}

module.exports=Command