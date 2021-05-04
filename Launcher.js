class Launcher{
    constructor(b1,p2){
        var options={
         bodyA:b1,pointB:p2,
         length:10,
         stiffness:0.04
        }
        this.launcher=Matter.Constraint.create(options)
        World.add(world,this.launcher)
        this.bodyA=b1
        this.pointB=p2

    }
    display(){
        if(this.launcher.bodyA!=null){
            line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
}    

    
}
    fly(){
        this.launcher.bodyA=null
    }
    attach(){
        this.launcher.bodyA = this.bodyA
    }
}